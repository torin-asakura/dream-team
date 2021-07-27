<?php
declare(strict_types=1);

namespace TwoFAS\Light\Authentication\Middleware;

class Middleware_Builder {

	/**
	 * @var array
	 */
	private $middleware = [];
	
	public function add_middleware( Middleware_Interface $middleware ): Middleware_Builder {
		$this->middleware[] = $middleware;

		return $this;
	}
	
	public function build(): Middleware_Interface {
		$first = array_shift( $this->middleware );

		array_reduce( $this->middleware, function ( Middleware_Interface $current, Middleware_Interface $next ) {
			$current->add_next( $next );

			return $next;
		}, $first );

		return $first;
	}
}
