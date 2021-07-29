<?php
declare(strict_types=1);

namespace TwoFAS\Light\Hooks;

use TwoFAS\Light\Http\Request\Session;

class Regenerate_Session_Action implements Hook_Interface {

	/**
	 * @var Session
	 */
	private $session;
	
	public function __construct( Session $session ) {
		$this->session = $session;
	}

	public function register_hook() {
		add_action( 'wp_login', [ $this->session, 'destroy' ], 10, 0 );
	}
}
