<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Authentication\Middleware;

use TwoFAS\Light\Http\Code;
use TwoFAS\Light\Http\Direct_URL;
use TwoFAS\Light\Http\Response\{
	JSON_Response,
	Not_Handled_Response,
	Redirect_Response,
	Safe_Redirect_Response,
	View_Response
};
use WP_Error;
use WP_User;

abstract class Middleware implements Middleware_Interface {
	
	/**
	 * @var Middleware_Interface
	 */
	protected $next;
	
	/**
	 * @param Middleware_Interface $next
	 */
	public function add_next( Middleware_Interface $next ) {
		$this->next = $next;
	}
	
	/**
	 * @param WP_User|WP_Error                 $user
	 * @param JSON_Response|View_Response|Redirect_Response|Not_Handled_Response|null $response
	 *
	 * @return JSON_Response|View_Response|Redirect_Response|Not_Handled_Response|null
	 */
	protected function run_next( $user, $response ) {
		if ( is_null( $this->next ) ) {
			return $response;
		}
		
		return $this->next->handle( $user, $response );
	}
	
	protected function json( array $body, int $status_code = Code::OK ): JSON_Response {
		return new JSON_Response( $body, $status_code );
	}
	
	protected function json_error( string $message, int $status_code ): JSON_Response {
		return $this->json( [ 'error' => $message ], $status_code );
	}
	
	protected function redirect( string $url ): Redirect_Response {
		return new Redirect_Response( new Direct_URL( $url ) );
	}
	
	protected function safe_redirect( string $url ): Safe_Redirect_Response {
		return new Safe_Redirect_Response( new Direct_URL( $url ) );
	}
	
	protected function not_handled(): Not_Handled_Response {
		return new Not_Handled_Response();
	}
	
	/**
	 * @param WP_Error|WP_User $user
	 *
	 * @return bool
	 */
	protected function is_wp_user( $user ): bool {
		return $user instanceof WP_User;
	}
	
	/**
	 * @param WP_Error|WP_User $user
	 *
	 * @return bool
	 */
	protected function is_wp_error( $user ): bool {
		return $user instanceof WP_Error;
	}
	
	protected function is_jetpack_sso_login(): bool {
		return did_action( 'jetpack_sso_handle_login' ) > 0;
	}
}
