<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Hooks;

use TwoFAS\Light\Exceptions\User_Not_Found_Exception;
use TwoFAS\Light\Helpers\Time;
use TwoFAS\Light\Storage\Storage;
use TwoFAS\Light\Storage\Trusted_Devices_Storage;
use TwoFAS\Light\Storage\User_Storage;

class Delete_Expired_Trusted_Devices_Action implements Hook_Interface {
	
	/**
	 * @var Trusted_Devices_Storage
	 */
	private $trusted_devices_storage;
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	/**
	 * @var Time
	 */
	private $time;
	
	public function __construct( Storage $storage, Time $time ) {
		$this->trusted_devices_storage = $storage->get_trusted_devices_storage();
		$this->user_storage            = $storage->get_user_storage();
		$this->time                    = $time;
	}
	
	
	public function register_hook() {
		add_action( 'wp_login', [ $this, 'delete_trusted_devices' ], 10, 0 );
	}
	
	public function delete_trusted_devices() {
		try {
			$user_id         = $this->user_storage->get_user_id();
			$trusted_devices = $this->trusted_devices_storage->get_trusted_devices( $user_id );
			
			foreach ( $trusted_devices as $trusted_device ) {
				if ( $this->is_expired( (int) $trusted_device['created_at'] ) ) {
					$this->trusted_devices_storage->remove_trusted_device( $user_id, $trusted_device['device_id'] );
				}
			}
		} catch (User_Not_Found_Exception $e) {}
	}
	
	private function is_expired( int $created_at ): bool {
		return $this->time->get_current_timestamp_minus_seconds( $created_at )  > Trusted_Devices_Storage::COOKIE_LIFESPAN;
	}
}
