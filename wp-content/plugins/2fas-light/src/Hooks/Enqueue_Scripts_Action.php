<?php
declare(strict_types=1);

namespace TwoFAS\Light\Hooks;

use TwoFAS\Light\Http\Action_Index;

class Enqueue_Scripts_Action implements Hook_Interface {

	public function register_hook() {
		add_action( 'login_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
	}

	public function enqueue_scripts() {
		wp_enqueue_script(
			'twofas-light-js',
			TWOFAS_LIGHT_PLUGIN_URL . 'assets/js/twofas_light.js',
			[ 'jquery' , 'wp-i18n'],
			TWOFAS_LIGHT_PLUGIN_VERSION,
			true );

		wp_localize_script(
			'twofas-light-js',
			'twofas_light',
			[
				'ajax_url' => admin_url( 'admin.php' ),
				'login_url' =>  wp_login_url(),
				'twofas_light_personal_settings' => Action_Index::TWOFAS_PERSONAL_SETTINGS,
				'twofas_light_admin_settings' => Action_Index::TWOFAS_ADMIN_SETTINGS
			] );
		wp_set_script_translations( 'twofas-light-js', '2fas-light', TWOFAS_LIGHT_PLUGIN_PATH . 'languages' );
	}

}
