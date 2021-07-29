<?php

namespace TwoFAS\Light\Http\Middleware;

use TwoFAS\Light\Http\Response\{JSON_Response, Redirect_Response, View_Response};

interface Middleware_Interface {

	/**
	 * @param Middleware_Interface $next
	 */
	public function add_next( Middleware_Interface $next );

	/**
	 * @return View_Response|Redirect_Response|JSON_Response
	 */
	public function handle();
}
