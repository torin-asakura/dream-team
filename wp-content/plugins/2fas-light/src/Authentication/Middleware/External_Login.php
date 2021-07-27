<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Authentication\Middleware;

use TwoFAS\Light\Core\Plugin_Compatibility;
use TwoFAS\Light\Http\Request\Request;

/**
 * This class redirects to a default WordPress login page
 * if a login is done from an external site (for example, WooCommerce, Jetpack login form).
 */
final class External_Login extends Middleware {
	
	/**
	 * @var Plugin_Compatibility
	 */
	private $plugin_compatibility;
	
	/**
	 * @var Request
	 */
	private $request;
	
	public function __construct( Plugin_Compatibility $plugin_compatibility, Request $request ) {
		$this->plugin_compatibility = $plugin_compatibility;
		$this->request              = $request;
	}
	
	/**
	 * @inheritDoc
	 */
	public function handle( $user, $response = null ) {
		if ( $this->is_wp_user( $user ) ) {
			if ( $this->plugin_compatibility->is_external_login( $this->request ) ) {
				return $this->safe_redirect( $this->plugin_compatibility->get_wc_redirect_to_url( $this->request ) );
			}
			
			if ( $this->is_jetpack_sso_login() ) {
				return $this->safe_redirect( $this->plugin_compatibility->get_jetpack_redirect_to_url( $this->request ) );
			}
		}
		
		return $this->run_next( $user, $response );
	}
}
