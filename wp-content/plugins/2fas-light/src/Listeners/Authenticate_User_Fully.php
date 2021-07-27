<?php
declare(strict_types=1);

namespace TwoFAS\Light\Listeners;

use Exception;
use TwoFAS\Light\Authentication\Login_Token\Login_Token_Manager;
use TwoFAS\Light\Events\User_Interface;
use TwoFAS\Light\Exceptions\{Authentication_Failed_Exception, Login_Token_Not_Found_Exception};

class Authenticate_User_Fully extends Listener {
	
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
	 * @param User_Interface $event
	 *
	 * @throws Exception
	 * @throws Authentication_Failed_Exception
	 * @throws Login_Token_Not_Found_Exception
	 */
	public function handle( User_Interface $event ) {
		$login_token = $this->login_token_manager->get();
		
		if ( is_null( $login_token ) ) {
			throw new Login_Token_Not_Found_Exception();
		}
		
		if ( $login_token->get_user_id() !== $event->get_user_id() ) {
			throw new Authentication_Failed_Exception();
		}
		
		$this->login_token_manager->generate_second_step_token();
	}
}
