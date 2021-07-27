<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Authentication\Middleware;

use Exception;
use TwoFAS\Light\Events\Authentication_Expired;
use TwoFAS\Light\Events\Login_Attempts_Reached;
use TwoFAS\Light\Exceptions\Handler\Error_Handler_Interface;
use TwoFAS\Light\Exceptions\Totp_Disabled_Exception;
use TwoFAS\Light\Helpers\Dispatcher;
use TwoFAS\Light\Http\Code;
use TwoFAS\Light\Http\Response\{JSON_Response, View_Response};
use TwoFAS\Light\Notifications\Notification;
use TwoFAS\Light\Storage\{Authentication_Storage, Options_Storage, Storage, User_Storage};

class Authentication_Opener extends Middleware {

	/**
	 * @var Authentication_Storage
	 */
	private $authentication_storage;

	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	/**
	 * @var Options_Storage
	 */
	private $options_storage;
	
	/**
	 * @var Error_Handler_Interface
	 */
	private $error_handler;

	/**
	 * @param Storage                 $storage
	 * @param Error_Handler_Interface $error_handler
	 */
	public function __construct( Storage $storage, Error_Handler_Interface $error_handler ) {
		$this->authentication_storage = $storage->get_authentication_storage();
		$this->user_storage           = $storage->get_user_storage();
		$this->options_storage        = $storage->get_options();
		$this->error_handler          = $error_handler;
	}

	/**
	 * @inheritDoc
	 */
	public function handle( $user, $response = null ) {
		if ( $response instanceof JSON_Response || ! $this->user_storage->is_wp_user_set() ) {
			return $this->run_next( $user, $response );
		}
		try {
			$authentication = $this->authentication_storage->get_authentication( $this->user_storage->get_user_id() );

			if ( ! $this->user_storage->is_totp_enabled() && ! $this->options_storage->has_obligatory_role($this->user_storage->get_roles())) {
				throw new Totp_Disabled_Exception();
			}

			if ( is_null( $authentication ) ) {
				$authentication = $this->authentication_storage->open_authentication( $this->user_storage->get_user_id() );
			}

			if ( $authentication->is_expired() ) {
				Dispatcher::dispatch( new Authentication_Expired( $authentication ) );
				
				return $this->json_error( Notification::get( 'authentication-expired' ), Code::FORBIDDEN );
			}

			if ( $authentication->is_rejected() ) {
				Dispatcher::dispatch( new Login_Attempts_Reached( $authentication ) );
				
				return $this->json_error( Notification::get( 'authentication-limit' ), Code::FORBIDDEN );
			}
			
		} catch ( Exception $e ) {
			$response = $this->error_handler->capture_exception( $e )->to_json( $e );
		}

		return $this->run_next( $user, $response );
	}
}
