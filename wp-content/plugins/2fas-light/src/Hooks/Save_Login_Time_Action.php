<?php
declare(strict_types=1);

namespace TwoFAS\Light\Hooks;

use TwoFAS\Light\Exceptions\User_Not_Found_Exception;
use TwoFAS\Light\Storage\User_Storage;

class Save_Login_Time_Action implements Hook_Interface {

	/**
	 * @var User_Storage
	 */
	private $user_storage;

	/**
	 * @param User_Storage $user_storage
	 */
	public function __construct( User_Storage $user_storage ) {
		$this->user_storage = $user_storage;
	}

	public function register_hook() {
		add_action( 'wp_login', [ $this, 'save' ], 10, 0 );
	}

	public function save() {
		try {
			$this->user_storage->set_last_login_time( time() );
		} catch ( User_Not_Found_Exception $e ) {
		}
	}
}
