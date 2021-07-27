<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Authentication\Middleware;

use Exception;
use TwoFAS\Light\Authentication\Login_Token\{Login_Context, Login_Token_Manager};
use TwoFAS\Light\Exceptions\User_Not_Found_Exception;
use TwoFAS\Light\Http\Response\{Not_Handled_Response, Redirect_Response, View_Response, JSON_Response};
use TwoFAS\Light\Notifications\Notification;
use WP_Error;
use WP_User;

/**
 * This class is responsible for generating a new step token.
 */
final class Step_Token_Generator extends Middleware {
	
	/**
	 * @var Login_Token_Manager
	 */
	private $login_token_manager;
	
	/**
	 * @param Login_Token_Manager $login_token_manager
	 */
	public function __construct( Login_Token_Manager $login_token_manager ) {
		$this->login_token_manager = $login_token_manager;
	}
	
	/**
	 * @param WP_Error|WP_User                                                                                                                $user
	 * @param JSON_Response|Not_Handled_Response|Redirect_Response|View_Response|null $response
	 *
	 * @return JSON_Response|Not_Handled_Response|Redirect_Response|View_Response|null
	 * @throws Exception
	 */
	public function handle( $user, $response = null ) {
		try {
			if ( $this->is_wp_user( $user ) ) {
				if ( $this->is_jetpack_sso_login() ) {
					$context = Login_Context::JETPACK;
				} else {
					$context = Login_Context::USERNAME;
				}
				
				$this->login_token_manager->generate_first_step_token( $context );
			}
			
			return $this->run_next( $user, $response );
		} catch ( User_Not_Found_Exception $e ) {
			return $this->json_error( Notification::get( 'user-not-found' ), 404 );
		}
	}
}
