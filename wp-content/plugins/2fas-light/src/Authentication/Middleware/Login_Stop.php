<?php
declare(strict_types=1);

namespace TwoFAS\Light\Authentication\Middleware;

use TwoFAS\Light\Authentication\Login_Action;
use TwoFAS\Light\Authentication\Login_Token\Login_Token_Manager;
use TwoFAS\Light\Exceptions\DateTime_Creation_Exception;
use TwoFAS\Light\Exceptions\User_Not_Found_Exception;
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Http\Response\{Not_Handled_Response, Redirect_Response, View_Response, JSON_Response};
use TwoFAS\Light\Storage\{Authentication_Storage, Storage, User_Storage};
use WP_Error;
use WP_User;

/**
 * This class handles a login stop request.
 */
final class Login_Stop extends Middleware {
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	/**
	 * @var Authentication_Storage
	 */
	private $authentication_storage;
	
	/**
	 * @var Login_Token_Manager
	 */
	private $login_token_manager;
	
	/**
	 * @var Request
	 */
	private $request;
	
	public function __construct( Storage $storage, Login_Token_Manager $login_token_manager, Request $request ) {
		$this->user_storage           = $storage->get_user_storage();
		$this->authentication_storage = $storage->get_authentication_storage();
		$this->login_token_manager    = $login_token_manager;
		$this->request                = $request;
	}
	
	/**
	 * @param WP_Error|WP_User                                                                                    $user
	 * @param JSON_Response|View_Response|Redirect_Response|Not_Handled_Response|null $response
	 *
	 * @return JSON_Response|Redirect_Response|View_Response|Not_Handled_Response|null
	 *
	 * @throws User_Not_Found_Exception
	 * @throws DateTime_Creation_Exception
	 */
	public function handle( $user, $response = null ) {
		if ( ! $this->is_wp_user( $user )
		     && $this->user_storage->is_wp_user_set()
		     && $this->request->is_login_action_equal_to( Login_Action::STOP_LOGIN_PROCESS ) ) {
			
			$this->login_token_manager->reset();
			
			$authentication = $this->authentication_storage->get_authentication( $this->user_storage->get_user_id() );
			if ( ! is_null( $authentication ) ) {
				$this->authentication_storage->close_authentication( $authentication );
			}
			
			$login_url     = wp_login_url();
			$interim_login = $this->request->request( 'interim-login' );
			
			if ( $interim_login ) {
				$login_url = add_query_arg( 'interim-login', '1', $login_url );
			}
			
			return $this->safe_redirect( $login_url );
		}
		
		return $this->run_next( $user, $response );
	}
}
