<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Hooks;

use TwoFAS\Light\Authentication\{Login_Process, Login_Response};
use TwoFAS\Light\Http\Response\{JSON_Response, Not_Handled_Response, Redirect_Response, View_Response};
use WP_Error;
use WP_User;

class Authenticate_Filter implements Hook_Interface {
	
	/**
	 * @var Login_Process
	 */
	private $login_process;
	
	/**
	 * @var Login_Response
	 */
	private $login_response;
	
	public function __construct( Login_Process $login_process, Login_Response $login_response ) {
		$this->login_process  = $login_process;
		$this->login_response = $login_response;
	}
	
	public function register_hook() {
		add_filter( 'authenticate', [ $this, 'authenticate' ], PHP_INT_MAX );
		add_action( 'jetpack_sso_handle_login', [ $this, 'authenticate' ], 100 );
	}
	
	/**
	 * @param WP_User|WP_Error|null $user
	 *
	 * @return WP_User|WP_Error|null|void
	 */
	public function authenticate( $user ) {
		if ( is_null( $user ) ) {
			return null;
		}
		
		$response = $this->login_process->authenticate( $user );
		
		if ( $this->is_not_handled( $response ) ) {
			return $user;
		}
		
		$this->login_response->process( $response );
		
		if ( $this->login_response->should_response_be_returned() ) {
			return $this->login_response->get_response();
		}
	}
	
	/**
	 * @param null|View_Response|JSON_Response|Redirect_Response|Not_Handled_Response $response
	 *
	 * @return bool
	 */
	private function is_not_handled( $response ): bool {
		return is_null( $response ) || $response instanceof Not_Handled_Response;
	}
}
