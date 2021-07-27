<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Authentication\Handler;

use TwoFAS\Light\Authentication\Authentication;
use TwoFAS\Light\Events\Authentication_Expired;
use TwoFAS\Light\Events\Login_Attempt_Failed;
use TwoFAS\Light\Events\Login_Attempts_Reached;
use TwoFAS\Light\Exceptions\{Authentication_Expired_Exception,
	Authentication_Not_Found_Exception,
	DateTime_Creation_Exception,
	Invalid_Totp_Token_Exception,
	Login_Attempts_Reached_Exception,
	User_Not_Found_Exception,
	Validation_Exception};
use TwoFAS\Light\Helpers\Dispatcher;
use TwoFAS\Light\Http\Code;
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Http\Response\{JSON_Response, Not_Handled_Response, Redirect_Response, View_Response};
use TwoFAS\Light\Notifications\Notification;
use TwoFAS\Light\Storage\{Authentication_Storage, Storage};
use WP_Error;
use WP_User;

abstract class Standard_Login extends Login_Handler {
	
	/**
	 * @var string
	 */
	protected $page;
	
	/**
	 * @var Request
	 */
	protected $request;
	
	/**
	 * @var Authentication_Storage
	 */
	protected $authentication_storage;
	
	public function __construct( Request $request, Storage $storage ) {
		parent::__construct( $storage );
		$this->request                = $request;
		$this->authentication_storage = $storage->get_authentication_storage();
	}
	
	/**
	 * @return Authentication
	 *
	 * @throws Authentication_Not_Found_Exception
	 * @throws DateTime_Creation_Exception
	 */
	protected function get_authentication(): Authentication {
		$authentication = $this->authentication_storage->get_authentication( $this->get_user_id() );
		
		if ( is_null( $authentication ) ) {
			throw new Authentication_Not_Found_Exception();
		}
		
		return $authentication;
	}
	
	/**
	 * @param Authentication $authentication
	 *
	 * @throws Authentication_Expired_Exception
	 * @throws Login_Attempts_Reached_Exception
	 */
	protected function check_authentication( Authentication $authentication ) {
		if ( $authentication->is_expired() ) {
			throw new Authentication_Expired_Exception();
		}
		
		if ( $authentication->is_rejected() ) {
			throw new Login_Attempts_Reached_Exception();
		}
	}
	
	/**
	 * @return JSON_Response|Redirect_Response|View_Response|Not_Handled_Response
	 *
	 * @throws Invalid_Totp_Token_Exception
	 */
	abstract protected function check_code();
	
	/**
	 * @param WP_Error|WP_User $user
	 *
	 * @return JSON_Response|Redirect_Response|View_Response|Not_Handled_Response
	 *
	 * @throws Authentication_Not_Found_Exception
	 * @throws User_Not_Found_Exception
	 * @throws DateTime_Creation_Exception
	 */
	protected function handle( $user ) {
		$authentication = $this->get_authentication();
		try {
			$this->check_authentication( $authentication );
			return $this->check_code();
			
		} catch ( Login_Attempts_Reached_Exception $e ) {
			Dispatcher::dispatch( new Login_Attempts_Reached( $authentication ) );
			
			return $this->json_error( Notification::get( 'authentication-limit' ), Code::FORBIDDEN );
		} catch ( Authentication_Expired_Exception $e ) {
			Dispatcher::dispatch( new Authentication_Expired( $authentication ) );
			
			return $this->json_error( Notification::get( 'authentication-expired' ), Code::FORBIDDEN );
		} catch ( Validation_Exception $e ) {
			Dispatcher::dispatch( new Login_Attempt_Failed( $authentication ) );
			
			return $this->view_error( $this->page, Notification::get( $e->get_label() ) );
		}
	}
}
