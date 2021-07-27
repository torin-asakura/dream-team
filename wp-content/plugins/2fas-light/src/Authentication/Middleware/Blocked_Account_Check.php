<?php
declare(strict_types=1);

namespace TwoFAS\Light\Authentication\Middleware;

use TwoFAS\Light\Authentication\Login_Token\Login_Token_Manager;
use TwoFAS\Light\Http\Code;
use TwoFAS\Light\Notifications\Notification;
use TwoFAS\Light\Storage\User_Storage;

/**
 * This class checks whether user's account is blocked.
 */
final class Blocked_Account_Check extends Middleware {

	/**
	 * @var User_Storage
	 */
	private $user_storage;

	/**
	 * @var Login_Token_Manager
	 */
	private $login_token_manager;

	/**
	 * @param User_Storage        $user_storage
	 * @param Login_Token_Manager $login_token_manager
	 */
	public function __construct( User_Storage $user_storage, Login_Token_Manager $login_token_manager ) {
		$this->user_storage        = $user_storage;
		$this->login_token_manager = $login_token_manager;
	}

	/**
	 * @inheritDoc
	 */
	public function handle( $user, $response = null ) {
		if ( $this->user_storage->is_wp_user_set() && $this->user_storage->is_user_blocked() ) {
			$this->login_token_manager->reset();

			return $this->json_error( Notification::get( 'authentication-limit' ), Code::FORBIDDEN );
		}

		return $this->run_next( $user, $response );
	}
}
