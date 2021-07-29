<?php
declare(strict_types=1);

namespace TwoFAS\Light\Authentication\Middleware;

use TwoFAS\Light\Authentication\Login_Token\Login_Token_Manager;
use TwoFAS\Light\Exceptions\{DateTime_Creation_Exception, User_Not_Found_Exception};
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Http\Response\{Not_Handled_Response, View_Response, JSON_Response, Redirect_Response};
use TwoFAS\Light\Storage\{Authentication_Storage, Storage, User_Storage};
use WP_Error;
use WP_User;

final class Reauth_Request extends Middleware {

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

	/**
	 * @param Storage             $storage
	 * @param Login_Token_Manager $login_token_manager
	 * @param Request             $request
	 */
	public function __construct( Storage $storage, Login_Token_Manager $login_token_manager, Request $request ) {
		$this->user_storage           = $storage->get_user_storage();
		$this->authentication_storage = $storage->get_authentication_storage();
		$this->login_token_manager    = $login_token_manager;
		$this->request                = $request;
	}

	/**
	 * @param WP_Error|WP_User                                                                                                                $user
	 * @param JSON_Response|View_Response|Redirect_Response|Not_Handled_Response|null $response
	 *
	 * @return JSON_Response|Redirect_Response|View_Response|Not_Handled_Response
	 *
	 * @throws User_Not_Found_Exception
	 * @throws DateTime_Creation_Exception
	 */
	public function handle( $user, $response = null ) {
		if ( ! empty ( $this->request->request( 'reauth' ) ) ) {
			
			if ( $this->user_storage->is_wp_user_set() ) {
				if ( ! is_null( $this->login_token_manager->get() ) ) {
					$this->login_token_manager->reset();
				}
				
				$authentication = $this->authentication_storage->get_authentication(
					$this->user_storage->get_user_id() );
				if ( ! is_null( $authentication ) ) {
					$this->authentication_storage->close_authentication( $authentication );
				}
			}
			
			return $this->not_handled();
		}

		return $this->run_next( $user, $response );
	}
}
