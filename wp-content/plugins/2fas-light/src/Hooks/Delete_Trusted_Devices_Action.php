<?php
declare(strict_types=1);

namespace TwoFAS\Light\Hooks;

use TwoFAS\Light\Storage\Trusted_Devices_Storage;

class Delete_Trusted_Devices_Action implements Hook_Interface {

	/**
	 * @var Trusted_Devices_Storage
	 */
	private $trusted_devices_storage;

	/**
	 * @param Trusted_Devices_Storage $trusted_devices_storage
	 */
	public function __construct( Trusted_Devices_Storage $trusted_devices_storage ) {
		$this->trusted_devices_storage = $trusted_devices_storage;
	}

	public function register_hook() {
		add_action( 'deleted_user', [ $this, 'delete_trusted_devices' ] );
	}

	/**
	 * @param int $user_id
	 */
	public function delete_trusted_devices( int $user_id ) {
		$this->trusted_devices_storage->delete_trusted_devices( $user_id );
	}
}
