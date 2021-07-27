<?php
declare(strict_types=1);

namespace TwoFAS\Light\Hooks;

class Enqueue_Styles_Action implements Hook_Interface {

	public function register_hook() {
		add_action( 'login_enqueue_scripts', [ $this, 'enqueue_styles' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_styles' ] );
	}

	public function enqueue_styles() {
		wp_enqueue_style( 'twofas-light', TWOFAS_LIGHT_PLUGIN_URL . 'assets/css/twofas_light.css', array(), TWOFAS_LIGHT_PLUGIN_VERSION );
		wp_enqueue_style( 'roboto', 'https://fonts.googleapis.com/css?family=Roboto' );
	}
}
