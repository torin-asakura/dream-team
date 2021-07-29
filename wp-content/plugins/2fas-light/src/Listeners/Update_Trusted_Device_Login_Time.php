<?php
declare(strict_types=1);

namespace TwoFAS\Light\Listeners;

use TwoFAS\Light\Events\Trusted_Device_Login_Completed;
use TwoFAS\Light\Storage\Trusted_Devices_Storage;

class Update_Trusted_Device_Login_Time extends Listener {
	
	/**
	 * @var Trusted_Devices_Storage
	 */
	private $trusted_devices_storage;
	
	public function __construct( Trusted_Devices_Storage $trusted_devices_storage ) {
		$this->trusted_devices_storage = $trusted_devices_storage;
	}
	
	public function handle( Trusted_Device_Login_Completed $event ) {
		$this->trusted_devices_storage->set_trusted_device_login_time( $event->get_user_id() );
	}
}
