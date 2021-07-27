<?php
declare(strict_types=1);

namespace TwoFAS\Light\Listeners;

use TwoFAS\Light\Events\Totp_Configuration_Completed;
use TwoFAS\Light\Exceptions\DateTime_Creation_Exception;
use TwoFAS\Light\Helpers\Time;
use TwoFAS\Light\Storage\User_Storage;

class Update_Secret_Date extends Listener {
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	/**
	 * @var Time
	 */
	private $time;
	
	/**
	 * @param User_Storage $user_storage
	 * @param Time         $time
	 */
	public function __construct( User_Storage $user_storage, Time $time ) {
		$this->user_storage = $user_storage;
		$this->time         = $time;
	}
	
	/**
	 * @param Totp_Configuration_Completed $event
	 *
	 * @throws DateTime_Creation_Exception
	 */
	public function handle( Totp_Configuration_Completed $event ) {
		$this->user_storage->update_totp_secret_date( $this->time->get_current_datetime() );
	}
}
