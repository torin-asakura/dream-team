<?php
declare(strict_types=1);

namespace TwoFAS\Light\Http\Response;

use TwoFAS\Light\Core\Plugin;
use TwoFAS\Light\Http\URL_Interface;

class Redirect_Response {

	/**
	 * @var URL_Interface
	 */
	protected $url;
	
	public function __construct( URL_Interface $url ) {
		$this->url = $url;
	}

	public function redirect() {
		header( 'Location: ' . $this->url->get() );
		Plugin::terminate();
	}
}
