<?php
declare(strict_types=1);

namespace TwoFAS\Light\Listeners;

use TwoFAS\Light\Events\Totp_Configuration_Completed;
use TwoFAS\Light\Storage\User_Storage;

class Add_Totp_Configuration extends Listener {
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	
	/**
	 * @param User_Storage $user_storage
	 */
	public function __construct( User_Storage $user_storage ) {
		$this->user_storage = $user_storage;
	}
	
	/**
	 * @param Totp_Configuration_Completed $event
	 */
	public function handle( Totp_Configuration_Completed $event ) {
		$this->user_storage->set_totp_secret( $event->get_secret()->get() );
		$this->user_storage->enable_totp();
	}
}
