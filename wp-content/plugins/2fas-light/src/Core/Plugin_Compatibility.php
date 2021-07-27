<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Core;

use TwoFAS\Light\Http\Request\Request;

class Plugin_Compatibility {
	
	/**
	 * @param Request $request
	 *
	 * @return bool
	 */
	public function is_external_login( Request $request ): bool {
		$host           = $request->header( 'HTTP_HOST' );
		$request_uri    = $request->header( 'REQUEST_URI' );
		$requested_path = $host . $request_uri;
		$wp_login_path  = preg_replace( '/https?:\/\//', '', wp_login_url() );
		
		return false === strpos( $requested_path, $wp_login_path );
	}
	
	public function get_wc_redirect_to_url( Request $request ): string {
		$url         = wp_login_url();
		$redirect_to = '';
		$wc_redirect = $request->post( 'redirect' );
		$remember_me = $request->request( 'rememberme' );
		
		if ( $wc_redirect ) {
			$redirect_to = $wc_redirect;
		} elseif ( function_exists( 'wc_get_page_permalink' ) ) {
			$redirect_to = wc_get_page_permalink( 'myaccount' );
		}
		
		return $this->add_query_args($url, $redirect_to, $remember_me);
	}
	
	public function get_jetpack_redirect_to_url( Request $request ): string {
		$redirect_to = $request->request( 'jetpack_sso_redirect_to' );
		$remember_me = $request->request( 'rememberme' );
		
		return $this->add_query_args( wp_login_url(), $redirect_to, $remember_me );
	}
	
	private function add_query_args( string $url, string $redirect_to, string $remember_me): string {
		if ( $redirect_to ) {
			$redirect_to = urlencode( $redirect_to );
			$url         = add_query_arg( 'redirect_to', $redirect_to, $url );
		}
		
		if ( $remember_me ) {
			$url = add_query_arg( 'rememberme', $remember_me, $url );
		}
		
		return $url;
	}
}
