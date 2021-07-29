<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Factories;

use LogicException;
use TwoFAS\Light\Authentication\Login_Token\Login_Token_Manager;
use TwoFAS\Light\Exceptions\User_Not_Found_Exception;
use TwoFAS\Light\Storage\User_Storage;
use WP_User;

class User_Factory {
	
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
	 * @return WP_User
	 *
	 * @throws User_Not_Found_Exception
	 */
	public function create(): WP_User {
		$step_token_hash = $this->login_token_manager->get_token_hash();
		
		if ( empty( $step_token_hash ) ) {
			throw new User_Not_Found_Exception();
		}
		
		$wp_user = $this->find_wp_user( $step_token_hash );
		
		if ( is_null( $wp_user ) ) {
			throw new User_Not_Found_Exception();
		}
		
		return $wp_user;
	}
	
	/**
	 * @param string $step_token_hash
	 *
	 * @return null|WP_User
	 */
	private function find_wp_user( string $step_token_hash ) {
		$users = get_users(
			[
				'blog_id'      => 0, //search in all blogs
				'meta_key'     => User_Storage::STEP_TOKEN,
				'meta_value'   => $step_token_hash,
				'meta_compare' => 'LIKE'
			] );
		
		if ( empty( $users ) ) {
			return null;
		}
		
		if ( count( $users ) > 1 ) {
			throw new LogicException( 'Found more than one user' );
		}
		
		return $users[0];
	}
}
