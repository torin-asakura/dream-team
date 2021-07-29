<?php
declare(strict_types=1);

namespace TwoFAS\Light\Authentication;

use Exception;
use TwoFAS\Light\Authentication\Handler\Login_Handler;
use TwoFAS\Light\Authentication\Middleware\Middleware_Interface;
use TwoFAS\Light\Exceptions\Handler\Error_Handler_Interface;
use TwoFAS\Light\Http\Response\{JSON_Response, Not_Handled_Response, Redirect_Response, View_Response};
use WP_Error;
use WP_User;

class Login_Process {

	/**
	 * @var Middleware_Interface
	 */
	private $before_middleware;

	/**
	 * @var Middleware_Interface
	 */
	private $after_middleware;

	/**
	 * @var Login_Handler
	 */
	private $login_handler;

	/**
	 * @var Error_Handler_Interface
	 */
	private $error_handler;

	/**
	 * @param Middleware_Interface    $before_middleware
	 * @param Middleware_Interface    $after_middleware
	 * @param Login_Handler           $login_handler
	 * @param Error_Handler_Interface $error_handler
	 */
	public function __construct(
		Middleware_Interface $before_middleware,
		Middleware_Interface $after_middleware,
		Login_Handler $login_handler,
		Error_Handler_Interface $error_handler
	) {
		$this->before_middleware = $before_middleware;
		$this->after_middleware  = $after_middleware;
		$this->login_handler     = $login_handler;
		$this->error_handler     = $error_handler;
	}

	/**
	 * @param WP_Error|WP_User $user
	 *
	 * @return JSON_Response|Redirect_Response|View_Response|Not_Handled_Response|null
	 */
	public function authenticate( $user ) {
		$response = $this->before_middleware->handle( $user );

		if ( $this->should_be_returned( $response ) ) {
			return $response;
		}

		$response = $this->create_response( $user );

		return $this->after_middleware->handle( $user, $response );
	}

	/**
	 * @param JSON_Response|Redirect_Response|View_Response|Not_Handled_Response|null $response
	 *
	 * @return bool
	 */
	private function should_be_returned( $response ): bool {
		if ( $response instanceof Not_Handled_Response ) {
			return true;
		}
		
		if ( $response instanceof JSON_Response ) {
			return true;
		}

		if ( $response instanceof Redirect_Response ) {
			return true;
		}

		return false;
	}

	/**
	 * @param WP_Error|WP_User $user
	 *
	 * @return JSON_Response|Redirect_Response|View_Response|Not_Handled_Response
	 */
	private function create_response( $user ) {
		try {
			$response = $this->login_handler->authenticate( $user );
		} catch ( Exception $e ) {
			$response = $this->error_handler->capture_exception( $e )->to_json( $e );
		}

		return $response;
	}
}
