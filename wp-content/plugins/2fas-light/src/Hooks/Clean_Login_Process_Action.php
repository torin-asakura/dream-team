<?php

namespace TwoFAS\Light\Hooks;

use TwoFAS\Light\Authentication\Authentication;
use TwoFAS\Light\Authentication\Login_Token\Login_Token_Manager;
use TwoFAS\Light\Exceptions\DateTime_Creation_Exception;
use TwoFAS\Light\Http\Request\Session;
use TwoFAS\Light\Storage\{Authentication_Storage, Storage, User_Storage};

class Clean_Login_Process_Action implements Hook_Interface {

	/**
	 * @var Authentication_Storage
	 */
	private $authentication_storage;

	/**
	 * @var Login_Token_Manager
	 */
	private $login_token_manager;

	/**
	 * @var User_Storage
	 */
	private $user_storage;

	/**
	 * @var Session
	 */
	private $session;
	
	public function __construct( Storage $storage, Login_Token_Manager $login_token_manager, Session $session ) {
		$this->authentication_storage = $storage->get_authentication_storage();
		$this->user_storage           = $storage->get_user_storage();
		$this->login_token_manager    = $login_token_manager;
		$this->session                = $session;
	}

	public function register_hook() {
		add_action( 'wp_login', [ $this, 'clean' ], 5 );
	}

	/**
	 * @throws DateTime_Creation_Exception
	 */
	public function clean() {
		if ( $this->user_storage->is_wp_user_set() ) {
			$this->login_token_manager->reset();
			$this->session->destroy();
			$authentication = $this->authentication_storage->get_authentication( $this->user_storage->get_user_id() );

			if ( $authentication instanceof Authentication ) {
				$this->authentication_storage->close_authentication( $authentication );
			}
		}
	}
}
