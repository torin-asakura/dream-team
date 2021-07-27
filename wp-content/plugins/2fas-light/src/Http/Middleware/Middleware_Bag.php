<?php

namespace TwoFAS\Light\Http\Middleware;

class Middleware_Bag {

	/**
	 * @var Middleware_Interface[]
	 */
	private $middleware = array();
	
	public function add_middleware( string $key, Middleware_Interface $middleware ) {
		$this->middleware[ $key ] = $middleware;
	}

	/**
	 * @return Middleware_Interface[]
	 */
	public function get_middleware(): array {
		return $this->middleware;
	}
}
