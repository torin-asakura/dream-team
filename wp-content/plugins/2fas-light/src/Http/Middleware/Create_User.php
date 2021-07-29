<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Http\Middleware;

use TwoFAS\Light\Exceptions\User_Not_Found_Exception;
use TwoFAS\Light\Factories\User_Factory;
use TwoFAS\Light\Storage\User_Storage;

class Create_User extends Middleware {
	
	/**
	 * @var User_Factory
	 */
	private $user_factory;
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	public function __construct( User_Factory $user_factory, User_Storage $user_storage ) {
		$this->user_factory = $user_factory;
		$this->user_storage = $user_storage;
	}
	
	/**
	 * @inheritDoc
	 */
	public function handle() {
		try {
			if ( ! $this->user_storage->is_wp_user_set() ) {
				$this->user_storage->set_wp_user( $this->user_factory->create() );
			}
		} catch ( User_Not_Found_Exception $e ) {
		
		} finally {
			return $this->next->handle();
		}
	}
}
