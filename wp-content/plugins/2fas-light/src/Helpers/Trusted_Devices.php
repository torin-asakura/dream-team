<?php
declare(strict_types=1);

namespace TwoFAS\Light\Helpers;

use TwoFAS\Light\Http\Response\View_Response;
use TwoFAS\Light\Storage\Storage;

trait Trusted_Devices {
	
	/**
	 * @var Storage
	 */
	private $storage;
	
	public function get_trusted_devices_template(): View_Response {
		return new View_Response(
			'includes/trusted_devices.html.twig',
			[
				'trusted_devices' => $this->get_trusted_devices()
			]
		);
	}
	
	/**
	 * @return array|null
	 */
	public function get_trusted_devices() {
		$user_storage            = $this->storage->get_user_storage();
		$trusted_devices_storage = $this->storage->get_trusted_devices_storage();
		
		return $trusted_devices_storage->get_trusted_devices( $user_storage->get_user_id() );
	}
	
	public function remove_trusted_device( string $device_id ) {
		$user_storage            = $this->storage->get_user_storage();
		$trusted_devices_storage = $this->storage->get_trusted_devices_storage();
		
		$trusted_devices_storage->remove_trusted_device( $user_storage->get_user_id(), $device_id );
	}
}
