<?php
declare(strict_types=1);

namespace TwoFAS\Light\Listeners;

use TwoFAS\Light\Events\Second_Step_Rendered;

class Resolve_Conflicting_Scripts extends Listener {
	
	const JETPACK_SSO_LOGIN_SCRIPT_HANDLE = 'jetpack-sso-login';
	
	/**
	 * @param Second_Step_Rendered $event
	 */
	public function handle( Second_Step_Rendered $event) {
		add_action( 'login_enqueue_scripts', [ $this, 'dequeue_sso_login_script' ], 50 );
	}
	
	public function dequeue_sso_login_script() {
		wp_dequeue_script( self::JETPACK_SSO_LOGIN_SCRIPT_HANDLE );
	}
}
