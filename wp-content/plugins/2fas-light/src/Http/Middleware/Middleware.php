<?php

namespace TwoFAS\Light\Http\Middleware;

use TwoFAS\Light\Http\Response\{JSON_Response, Redirect_Response, View_Response};
use TwoFAS\Light\Http\URL_Interface;

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
	
	protected function view( string $template_name, array $data = array() ): View_Response {
		return new View_Response( $template_name, $data );
	}
	
	protected function json( array $body, int $status_code = 200 ): JSON_Response {
		return new JSON_Response( $body, $status_code );
	}
	
	protected function redirect( URL_Interface $url ): Redirect_Response {
		return new Redirect_Response( $url );
	}
}
