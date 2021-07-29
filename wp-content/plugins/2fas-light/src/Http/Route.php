<?php
declare(strict_types=1);

namespace TwoFAS\Light\Http;

use TwoFAS\Light\Exceptions\{Method_Not_Allowed_Http_Exception, Not_Found_Http_Exception};
use TwoFAS\Light\Http\Request\Request;

class Route {

	/**
	 * @var Request
	 */
	private $request;

	/**
	 * @var array
	 */
	private $routes;
	
	public function __construct( Request $request, array $routes ) {
		$this->request = $request;
		$this->routes  = $routes;
	}
	
	public function get_routes(): array {
		return $this->routes;
	}

	/**
	 * @return array
	 *
	 * @throws Not_Found_Http_Exception
	 * @throws Method_Not_Allowed_Http_Exception
	 */
	public function create_route(): array {
		$page   = $this->request->page();
		$action = $this->request->action();
		$method = $this->request->http_method();

		if ( ! $this->can_process_route( $page, $action ) ) {
			throw new Not_Found_Http_Exception();
		}

		if ( ! $this->method_allowed( $page, $action, $method ) ) {
			throw new Method_Not_Allowed_Http_Exception();
		}

		return $this->match( $page, $action );
	}
	
	private function can_process_route( string $page, string $action ): bool {
		if ( empty( $page ) ) {
			return false;
		}

		return array_key_exists( $page, $this->routes )
			&& array_key_exists( $action, $this->routes[ $page ] );
	}
	
	private function method_allowed( string $page, string $action, string $method ): bool {
		return in_array( $method, $this->routes[ $page ][ $action ]['method'], true );
	}
	
	private function match( string $page, string $action ): array {
		return array(
			'controller' => $this->routes[ $page ][ $action ]['controller'],
			'action'     => $this->routes[ $page ][ $action ]['action'],
			'middleware' => $this->get_middleware( $page, $action ),
		);
	}

	private function get_middleware( string $page, string $action ): array {
		$middleware = array();

		if ( array_key_exists( 'middleware', $this->routes[ $page ][ $action ] ) ) {
			$middleware = $this->routes[ $page ][ $action ]['middleware'];
		}

		return $middleware;
	}
}
