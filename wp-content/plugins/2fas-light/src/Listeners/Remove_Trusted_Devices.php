<?php
declare(strict_types=1);

namespace TwoFAS\Light\Listeners;

use TwoFAS\Light\Events\Totp_Configuration_Removed;
use TwoFAS\Light\Http\Request\Session;
use TwoFAS\Light\Storage\Trusted_Devices_Storage;

class Remove_Trusted_Devices extends Listener {
	
	/**
	 * @var Trusted_Devices_Storage
	 */
	private $trusted_devices_storage;
	
	/**
	 * @var Session
	 */
	private $session;
	
	public function __construct( Trusted_Devices_Storage $trusted_devices_storage, Session $session ) {
		$this->trusted_devices_storage = $trusted_devices_storage;
		$this->session                 = $session;
	}
	
	/**
	 * @param Totp_Configuration_Removed $event
	 */
	public function handle( Totp_Configuration_Removed $event ) {
		$this->session->log_out_on_other_devices( $event->get_user_id() );
		$this->trusted_devices_storage->delete_trusted_devices( $event->get_user_id() );
	}
}
