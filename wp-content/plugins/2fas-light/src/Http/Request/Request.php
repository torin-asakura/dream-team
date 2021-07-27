<?php
declare(strict_types=1);

namespace TwoFAS\Light\Http\Request;

use TwoFAS\Light\Http\Action_Index;

class Request {
	
	const TWOFAS_ARRAY_KEY = 'twofas-light';
	const LOGIN_ACTION_KEY = 'twofas_light_action';
	
	/**
	 * @var array
	 */
	protected $get;
	
	/**
	 * @var array
	 */
	protected $post;
	
	/**
	 * @var array
	 */
	protected $server;
	
	/**
	 * @var Cookie
	 */
	protected $cookie;
	
	public function __construct( array $get, array $post, array $server, Cookie $cookie ) {
		$this->get    = $get;
		$this->post   = $post;
		$this->server = $server;
		$this->cookie = $cookie;
	}
	
	/**
	 * @param string $name
	 *
	 * @return bool
	 */
	public function has( string $name ): bool {
		if ( array_key_exists( $name, $this->get ) ) {
			return true;
		} elseif ( array_key_exists( $name, $this->post ) ) {
			return true;
		}
		
		return false;
	}
	
	/**
	 * @param string $name
	 *
	 * @return array|string
	 */
	public function get( string $name ) {
		if ( isset( $this->get[ $name ] ) ) {
			return $this->get[ $name ];
		}
		
		return '';
	}
	
	/**
	 * @param string $name
	 *
	 * @return array|string
	 */
	public function post( string $name ) {
		if ( isset( $this->post[ $name ] ) ) {
			return $this->post[ $name ];
		}
		
		return '';
	}
	
	public function cookie(): Cookie {
		return $this->cookie;
	}
	
	public function header( string $name ): string {
		if ( isset( $this->server[ $name ] ) ) {
			return $this->server[ $name ];
		}
		
		return '';
	}
	
	/**
	 * @param string $name
	 *
	 * @return array|string
	 */
	public function request( string $name ) {
		$request = array_merge( $this->get, $this->post, $this->cookie->get_cookies() );
		
		if ( isset( $request[ $name ] ) ) {
			return $request[ $name ];
		}
		
		return '';
	}
	
	public function page(): string {
		$page = $this->get( 'page' );
		
		if ( empty( $page ) ) {
			$page = $this->post( 'page' );
		}
		
		return empty( $page ) ? '' : $page;
	}
	
	public function action(): string {
		$action = $this->get( Action_Index::TWOFAS_ACTION_KEY );
		
		if ( empty( $action ) ) {
			$action = $this->post( Action_Index::TWOFAS_ACTION_KEY );
		}
		
		return empty( $action ) ? '' : $action;
	}
	
	public function referer_action(): string {
		parse_str( $this->header( 'HTTP_REFERER' ), $query );
		
		if ( array_key_exists( Action_Index::TWOFAS_ACTION_KEY, $query ) ) {
			return $query[ Action_Index::TWOFAS_ACTION_KEY ];
		}
		
		return '';
	}
	
	public function request_uri(): string {
		return $this->header( 'REQUEST_URI' );
	}
	
	public function http_method(): string {
		return strtoupper( $this->header( 'REQUEST_METHOD' ) );
	}
	
	public function is_ajax(): bool {
		return 'xmlhttprequest' === strtolower( $this->header( 'HTTP_X_REQUESTED_WITH' ) );
	}
	
	public function is_post(): bool {
		return 'POST' === $this->http_method();
	}
	
	public function is_plugins_page(): bool {
		$request_uri = $this->header( 'REQUEST_URI' );
		
		return false !== strpos( $request_uri, 'plugins.php' );
	}
	
	public function is_plugin_search_page(): bool {
		$request_uri = $this->header( 'REQUEST_URI' );
		
		return false !== strpos( $request_uri, 'plugin-install.php' );
	}
	
	public function has_twofas_param( string $key ): bool {
		return $this->are_twofas_params_sent()
		       && array_key_exists( $key, $this->post[ self::TWOFAS_ARRAY_KEY ] );
	}
	
	public function has_twofas_params( array $params ): bool {
		if ( ! $this->are_twofas_params_sent() ) {
			return false;
		}
		
		$keys = array_keys( $this->post[ self::TWOFAS_ARRAY_KEY ] );
		$diff = array_diff( $params, $keys );
		
		return empty( $diff );
	}
	
	/**
	 * @param string $key
	 *
	 * @return null|string
	 */
	public function get_twofas_param( string $key ) {
		if ( ! $this->has_twofas_param( $key ) ) {
			return null;
		}
		
		$params = $this->post( self::TWOFAS_ARRAY_KEY );
		
		return $params[ $key ];
	}
	
	public function is_login_action_equal_to( string $action ): bool {
		return $this->post( self::LOGIN_ACTION_KEY ) === $action;
	}
	
	public function is_page_equal_to( string $page ): bool {
		return $this->get( 'page' ) === $page;
	}
	
	public function is_action_equal_to( string $action ): bool {
		return $this->get( Action_Index::TWOFAS_ACTION_KEY ) === $action;
	}

	public function get_ip(): string {
		$ip = $this->header( 'X-Forwarded-For' );
		
		if ( $this->validate_ip( $ip ) ) {
			return $ip;
		}
		
		$ip = $this->header( 'HTTP_X_FORWARDED_FOR' );
		
		if ( $this->validate_ip( $ip ) ) {
			return $ip;
		}
		
		return $this->header( 'REMOTE_ADDR' );
	}
	
	/**
	 * @return array|string
	 */
	public function get_nonce() {
		if ( $this->is_post() ) {
			return $this->post( '_wpnonce' );
		}
		
		return $this->get( '_wpnonce' );
	}

	private function validate_ip( string $ip ): bool {
		return null !== $ip && filter_var( $ip, FILTER_VALIDATE_IP );
	}
	
	private function are_twofas_params_sent(): bool {
		return array_key_exists( self::TWOFAS_ARRAY_KEY, $this->post )
		       && is_array( $this->post( self::TWOFAS_ARRAY_KEY ) );
	}
}
