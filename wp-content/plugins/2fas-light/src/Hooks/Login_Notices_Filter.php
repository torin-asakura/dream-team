<?php

namespace TwoFAS\Light\Hooks;

use TwoFAS\Light\Templates\Twig;

class Login_Notices_Filter implements Hook_Interface {
	
	/**
	 * @var Twig
	 */
	private $twig;
	
	/**
	 * @param Twig $twig
	 */
	public function __construct( Twig $twig ) {
		$this->twig = $twig;
	}
	
	public function register_hook() {
		add_filter( 'login_message', [ $this, 'render_notices' ], 20 );
	}
	
	public function render_notices() {
		echo $this->twig->render_view( 'login_error.html.twig' );
	}
}
