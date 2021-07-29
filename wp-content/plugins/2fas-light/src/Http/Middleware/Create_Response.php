<?php

namespace TwoFAS\Light\Http\Middleware;

use TwoFAS\Light\Http\Controllers\Controller;
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Http\Response\{JSON_Response, View_Response, Redirect_Response};

class Create_Response extends Middleware {

	/**
	 * @var Request
	 */
	private $request;

	/**
	 * @var Controller
	 */
	private $controller;

	/**
	 * @var string
	 */
	private $method;
	
	public function __construct( Request $request, Controller $controller, string $method ) {
		$this->request    = $request;
		$this->controller = $controller;
		$this->method     = $method;
	}

	/**
	 * @return JSON_Response|Redirect_Response|View_Response
	 */
	public function handle() {
		return $this->controller->{$this->method}( $this->request );
	}
}
