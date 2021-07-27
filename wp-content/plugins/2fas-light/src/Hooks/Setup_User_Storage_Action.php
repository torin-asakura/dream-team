<?php

namespace TwoFAS\Light\Hooks;

use TwoFAS\Light\Exceptions\User_Not_Found_Exception;
use TwoFAS\Light\Factories\User_Factory;
use TwoFAS\Light\Storage\User_Storage;
use WP_Error;
use WP_User;

class Setup_User_Storage_Action implements Hook_Interface {
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	/**
	 * @var User_Factory
	 */
	private $user_factory;
	
	public function __construct( User_Storage $user_storage, User_Factory $user_factory ) {
		$this->user_storage = $user_storage;
		$this->user_factory = $user_factory;
	}
	
	public function register_hook() {
		add_filter( 'authenticate', [ $this, 'set_wp_user' ], PHP_INT_MAX );
		add_action( 'jetpack_sso_handle_login', [ $this, 'set_wp_user' ], 100 );
	}
	
	/**
	 * @param WP_Error|WP_User $user
	 *
	 * @return WP_Error|WP_User
	 */
	public function set_wp_user( $user ) {
		try {
			if ( $this->user_storage->is_wp_user_set() ) {
				$this->user_storage->reset_wp_user();
			}
			
			if ( $this->is_wp_user( $user ) ) {
				$this->user_storage->set_wp_user( $user );
			} else {
				$this->user_storage->set_wp_user( $this->user_factory->create() );
			}
		} catch ( User_Not_Found_Exception $e ) {
		}
		
		return $user;
	}
	
	/**
	 * @param WP_Error|WP_User $user
	 *
	 * @return bool
	 */
	private function is_wp_user( $user ): bool {
		return $user instanceof WP_User;
	}
}
