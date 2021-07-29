<?php
declare(strict_types=1);

namespace TwoFAS\Light\Authentication\Handler;

use TwoFAS\Light\Exceptions\User_Not_Found_Exception;
use TwoFAS\Light\Http\Response\{JSON_Response, View_Response, Not_Handled_Response};
use TwoFAS\Light\Storage\{Storage, User_Storage};
use WP_Error;
use WP_User;

abstract class Login_Handler {

	/**
	 * @var Login_Handler|null
	 */
	protected $successor;

	/**
	 * @var User_Storage
	 */
	protected $user_storage;

	/**
	 * @param Storage $storage
	 */
	public function __construct( Storage $storage ) {
		$this->user_storage = $storage->get_user_storage();
	}

	/**
	 * @param WP_Error|WP_User $user
	 *
	 * @return bool
	 */
	abstract public function supports( $user ): bool;

	/**
	 * @param WP_Error|WP_User $user
	 *
	 * @return JSON_Response|View_Response|Not_Handled_Response
	 */
	abstract protected function handle( $user );

	/**
	 * @param WP_Error|WP_User $user
	 *
	 * @return JSON_Response|View_Response|Not_Handled_Response
	 */
	public function authenticate( $user ) {
		return $this->supports( $user ) ? $this->handle( $user ) : $this->fallback( $user );
	}

	public function then( Login_Handler $successor ) {
		$this->successor = $successor;
	}

	/**
	 * @param WP_Error|WP_User $user
	 *
	 * @return JSON_Response|View_Response|Not_Handled_Response
	 */
	protected function fallback( $user ) {
		if ( $this->successor ) {
			return $this->successor->authenticate( $user );
		}

		return $this->not_handled();
	}

	protected function json( array $body, int $status_code ): JSON_Response {
		return new JSON_Response( $body, $status_code );
	}

	protected function json_error( string $message, int $status_code ): JSON_Response {
		return $this->json( [ 'error' => $message ], $status_code );
	}

	protected function view( string $template, array $data = [] ): View_Response {
		return new View_Response( $template, $data );
	}

	protected function view_error( string $template, string $error, array $data = [] ): View_Response {
		return $this->view( $template, array_merge( $data, [ 'twofas_light_login_error' => new WP_Error( 'twofas_light_login_error', $error ) ] ) );
	}
	
	protected function not_handled(): Not_Handled_Response {
		return new Not_Handled_Response();
	}
	
	protected function is_wp_user_set(): bool {
		return $this->user_storage->is_wp_user_set();
	}

	/**
	 * @throws User_Not_Found_Exception
	 */
	protected function get_wp_user(): WP_User {
		if ( $this->user_storage->is_wp_user_set() ) {
			return $this->user_storage->get_wp_user();
		}

		throw new User_Not_Found_Exception();
	}

	/**
	 * @throws User_Not_Found_Exception
	 */
	protected function get_user_id(): int {
		return $this->get_wp_user()->ID;
	}

	/**
	 * @param WP_Error|WP_User $user
	 *
	 * @return bool
	 */
	protected function is_wp_user( $user ): bool {
		return $user instanceof WP_User;
	}
}
