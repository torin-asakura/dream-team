<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Authentication\Middleware;

use TwoFAS\Light\Authentication\Login_Token\{Login_Context, Login_Token_Manager};
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Storage\User_Storage;

class Jetpack_Redirector extends Middleware {
	
	/**
	 * @var Request
	 */
	private $request;
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	/**
	 * @var Login_Token_Manager
	 */
	private $login_token_manager;
	
	/**
	 * @param Request             $request
	 * @param User_Storage        $user_storage
	 * @param Login_Token_Manager $login_token_manager
	 */
	public function __construct(
		Request $request,
		User_Storage $user_storage,
		Login_Token_Manager $login_token_manager
	) {
		$this->request             = $request;
		$this->user_storage        = $user_storage;
		$this->login_token_manager = $login_token_manager;
	}
	
	/**
	 * This method reproduces the URL generation logic of Jetpack_SSO::build_sso_button_url().
	 * @see Jetpack_SSO::build_sso_button_url()
	 *
	 * @inheritDoc
	 */
	public function handle( $user, $response = null ) {
		if ( ! $this->user_storage->is_wp_user_set() ) {
			return $this->run_next( $user, $response );
		}
		
		$login_token = $this->login_token_manager->get();
		
		if ( is_null( $login_token )
		     || $login_token->get_context() !== Login_Context::JETPACK
		     || ! $login_token->is_fully_authenticated() ) {
			return $this->run_next( $user, $response );
		}
		
		$args = [
			'action' => 'jetpack-sso',
		];
		
		$redirect_to = $this->request->post( 'redirect_to' );
		if ( ! empty( $redirect_to ) ) {
			$args['redirect_to'] = urlencode( esc_url_raw( $redirect_to ) );
		}
		
		return $this->safe_redirect( add_query_arg( $args, wp_login_url() ) );
	}
}
