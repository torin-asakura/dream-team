<?php
declare(strict_types=1);

namespace TwoFAS\Light\Authentication\Handler;

use TwoFAS\Light\Events\Trusted_Device_Login_Completed;
use TwoFAS\Light\Helpers\Dispatcher;
use TwoFAS\Light\Http\Response\{JSON_Response, Redirect_Response, View_Response};
use TwoFAS\Light\Http\Code;
use TwoFAS\Light\Storage\{Storage, Trusted_Devices_Storage};
use WP_Error;
use WP_User;

/**
 * This class handles logging in on a trusted device.
 */
final class Trusted_Device_Login extends Login_Handler {

	/**
	 * @var Trusted_Devices_Storage
	 */
	private $trusted_devices_storage;

	/**
	 * @param Storage $storage
	 */
	public function __construct( Storage $storage ) {
		parent::__construct( $storage );
		$this->trusted_devices_storage = $storage->get_trusted_devices_storage();
	}

	public function supports( $user ): bool {
		return $this->user_storage->is_wp_user_set()
		       && $this->user_storage->is_totp_enabled()
		       && $this->trusted_devices_storage->is_device_trusted( $this->user_storage->get_user_id() );
	}
	
	/**
	 * @param WP_Error|WP_User $user
	 *
	 * @return bool|JSON_Response|View_Response|Redirect_Response
	 */
	protected function handle( $user ) {
		Dispatcher::dispatch( new Trusted_Device_Login_Completed( $this->get_user_id() ) );
		
		return $this->json( [ 'user_id' => $this->user_storage->get_user_id() ], Code::OK );
	}
}
