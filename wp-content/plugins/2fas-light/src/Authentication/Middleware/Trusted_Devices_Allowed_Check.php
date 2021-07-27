<?php
declare(strict_types=1);

namespace TwoFAS\Light\Authentication\Middleware;

use TwoFAS\Light\Storage\Storage;

class Trusted_Devices_Allowed_Check extends Middleware {

	/**
	 * @var Storage
	 */
	private $storage;

	/**
	 * @param Storage $storage
	 */
	public function __construct( Storage $storage ) {
		$this->storage = $storage;
	}

	/**
	 * @inheritDoc
	 */
	public function handle( $user, $response = null ) {
		$user_storage            = $this->storage->get_user_storage();
		$options_storage         = $this->storage->get_options();
		$trusted_devices_storage = $this->storage->get_trusted_devices_storage();

		if ( $this->is_wp_user( $user ) && $user_storage->is_totp_enabled() && $trusted_devices_storage->is_device_trusted( $user->ID ) ) {
			if ( ! $options_storage->has_remember_browser_allowed_role( $user->roles ) ) {
				$trusted_devices_storage->delete_trusted_devices( $user->ID );
			}
		}

		return $this->run_next( $user, $response );
	}
}
