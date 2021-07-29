<?php
declare(strict_types=1);

namespace TwoFAS\Light\Authentication\Middleware;

use LogicException;
use TwoFAS\Light\Authentication\Jetpack_User_Data;
use TwoFAS\Light\Authentication\Login_Token\Login_Token_Manager;
use TwoFAS\Light\Http\Code;
use WP_User;

class Jetpack_Interceptor extends Middleware {
	
	/**
	 * @var Login_Token_Manager
	 */
	private $login_token_manager;
	
	/**
	 * @var Jetpack_User_Data
	 */
	private $user_data;
	
	/**
	 * @param Login_Token_Manager $login_token_manager
	 */
	public function __construct( Login_Token_Manager $login_token_manager ) {
		$this->login_token_manager = $login_token_manager;
	}
	
	/**
	 * @param Jetpack_User_Data $user_data
	 */
	public function set_user_data( Jetpack_User_Data $user_data ) {
		$this->user_data = $user_data;
	}
	
	/**
	 * @inheritDoc
	 */
	public function handle( $user, $response = null ) {
		if ( $this->is_jetpack_sso_login() ) {
			
			if ( ! ( $user instanceof WP_User ) ) {
				return $this->json_error( $user->get_error_message(), Code::BAD_REQUEST );
			}
			
			if ( ! $this->user_data instanceof Jetpack_User_Data ) {
				throw new LogicException( 'Jetpack user data was not set' );
			}
			
			if ( $this->has_user_authenticated_with_jetpack_and_2fas_light_second_step( $user ) ) {
				return $this->json( [ 'user_id' => $user->ID ] );
			}
			
			if ( $this->user_data->has_two_factor_enabled() ) {
				return $this->json( [ 'user_id' => $user->ID ] );
			}
		}
		
		return $this->run_next( $user, $response );
	}
	
	/**
	 * @param WP_User $user
	 *
	 * @return bool
	 */
	private function has_user_authenticated_with_jetpack_and_2fas_light_second_step( WP_User $user ): bool {
		$login_token = $this->login_token_manager->get();
		
		return ! is_null( $login_token )
		       && $login_token->get_user_id() === $user->ID
		       && $login_token->is_fully_authenticated();
	}
}
