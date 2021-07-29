<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Http\Request;

class Cookie {
	
	const TIME_DIFF_FOR_DELETION = 3600;
	
	/**
	 * @var array
	 */
	private $cookies;
	
	/**
	 * @var array
	 */
	private $plugin_cookie_patterns = [
		'/^twofas_light_trusted_device_[a-f0-9]{32}$/i',
	];
	
	public function __construct( array $cookies ) {
		$this->cookies = $cookies;
	}
	
	public function is_empty(): bool {
		return count( $this->cookies ) === 0;
	}
	
	public function has_cookie( string $name ): bool {
		return isset( $this->cookies[ $name ] );
	}
	
	public function set_cookie( string $name, string $value, int $lifespan, bool $http_only = false ) {
		$this->cookies[ $name ] = $value;
		$this->write_cookie( $name, $value, $lifespan, $http_only );
	}
	
	/**
	 * @param string $name
	 *
	 * @return array|string
	 */
	public function get_cookie( string $name ) {
		if ( $this->has_cookie( $name ) ) {
			return $this->cookies[ $name ];
		}
		
		return '';
	}
	
	public function get_cookies(): array {
		return $this->cookies;
	}
	
	public function delete_cookie( string $name ) {
		$this->set_cookie( $name, '', -self::TIME_DIFF_FOR_DELETION );
		
		if ( $this->has_cookie( $name ) ) {
			unset( $_COOKIE[ $name ] );
			unset( $this->cookies[ $name ] );
		}
	}
	
	public function delete_plugin_cookies() {
		foreach ( $this->get_plugin_cookies() as $plugin_cookie ) {
			$this->delete_cookie( $plugin_cookie );
		}
	}
	
	private function get_plugin_cookies(): array {
		$all_cookies    = $this->get_cookies();
		$plugin_cookies = [];
		
		foreach ( $this->plugin_cookie_patterns as $pattern ) {
			$result         = preg_grep( $pattern, $all_cookies );
			$plugin_cookies = array_merge( $plugin_cookies, $result );
		}
		
		return $plugin_cookies;
	}
	
	private function write_cookie( string $name, string $value, int $lifespan, bool $http_only = false ) {
		setcookie( $name, $value, time() + $lifespan, $this->get_cookie_path(), $this->get_cookie_domain(), false, $http_only );
	}
	
	private function get_cookie_path(): string {
		$cookie_path      = '/';
		$site_cookie_path = '/';
		
		if ( defined( 'COOKIEPATH' ) && is_string( COOKIEPATH ) ) {
			$cookie_path = COOKIEPATH;
		}
		
		if ( defined( 'SITECOOKIEPATH' ) && is_string( SITECOOKIEPATH ) ) {
			$site_cookie_path = SITECOOKIEPATH;
		}
		
		if ( $cookie_path !== $site_cookie_path ) {
			return $site_cookie_path;
		}
		
		return $cookie_path;
	}
	
	private function get_cookie_domain(): string {
		if ( defined( 'COOKIE_DOMAIN' ) && is_string( COOKIE_DOMAIN ) ) {
			return COOKIE_DOMAIN;
		}
		
		return '';
	}
}
