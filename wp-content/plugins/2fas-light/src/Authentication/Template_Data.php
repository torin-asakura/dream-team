<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Authentication;

use TwoFAS\Light\Exceptions\User_Not_Found_Exception;
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Storage\Storage;
use TwoFAS\Light\Totp\QR_Generator;
use TwoFAS\Light\Totp\Secret_Generator;

class Template_Data {
	
	const WP_LOGIN_REDIRECT_TO         = 'redirect_to';
	const WP_LOGIN_REMEMBER_ME         = 'rememberme';
	const WP_LOGIN_TEST_COOKIE         = 'testcookie';
	const WP_LOGIN_INTERIM_LOGIN       = 'interim-login';
	const WP_LOGIN_CUSTOMIZE_LOGIN     = 'customize-login';
	const TWOFAS_LOGIN_REMEMBER_DEVICE = 'twofas_light_remember_device';
	
	/**
	 * @var QR_Generator
	 */
	private $qr_generator;
	
	/**
	 * @var Secret_Generator
	 */
	private $secret_generator;
	
	/**
	 * @var array
	 */
	private $data = [];
	
	/**
	 * @param QR_Generator     $qr_generator
	 * @param Secret_Generator $secret_generator
	 */
	public function __construct( QR_Generator $qr_generator, Secret_Generator $secret_generator ) {
		$this->qr_generator     = $qr_generator;
		$this->secret_generator = $secret_generator;
	}
	
	/**
	 * @param string $key
	 * @param mixed  $value
	 */
	public function set( string $key, $value ) {
		$this->data[ $key ] = $value;
	}
	
	/**
	 * @param Request $request
	 */
	public function set_from_request( Request $request ) {
		$redirect_to = $request->request( self::WP_LOGIN_REDIRECT_TO );
		$remember_me = $request->post( self::WP_LOGIN_REMEMBER_ME );
		
		if ( empty( $remember_me ) ) {
			$remember_me = $request->get( self::WP_LOGIN_REMEMBER_ME );
		}
		
		$test_cookie     = $request->post( self::WP_LOGIN_TEST_COOKIE );
		$interim_login   = $request->request( self::WP_LOGIN_INTERIM_LOGIN );
		$customize_login = $request->request( self::WP_LOGIN_CUSTOMIZE_LOGIN );
		$remember_device = $request->post( self::TWOFAS_LOGIN_REMEMBER_DEVICE );
		
		if ( ! empty( $redirect_to ) ) {
			$this->set( 'redirect_to', $redirect_to );
		}
		
		if ( ! empty( $remember_me ) ) {
			$this->set( 'rememberme', $remember_me );
		}
		
		if ( ! empty( $test_cookie ) ) {
			$this->set( 'testcookie', $test_cookie );
		}
		
		if ( ! empty( $interim_login ) ) {
			$this->set( 'interim_login', $interim_login );
		}
		
		if ( ! empty( $customize_login ) ) {
			$this->set( 'customize_login', $customize_login );
		}
		
		if ( ! empty( $remember_device ) ) {
			$this->set( 'remember_device', $remember_device );
		}
		
		if ( $request->has_twofas_param( 'totp-secret' ) ) {
			$this->set( 'totp_secret', $request->get_twofas_param( 'totp-secret' ) );
		}
	}
	
	/**
	 * @param Storage $storage
	 *
	 * @throws User_Not_Found_Exception
	 */
	public function set_from_storage( Storage $storage ) {
		$user_storage    = $storage->get_user_storage();
		$options_storage = $storage->get_options();
		$backup_codes    = $user_storage->get_backup_codes();
		$user_roles      = $user_storage->get_roles();
		
		$this->set( 'is_totp_enabled', $user_storage->is_totp_enabled() );
		$this->set( 'offline_codes_count', is_array( $backup_codes ) ? count( $backup_codes ) : 0 );
		$this->set( 'remember_browser_allowed', $options_storage->has_remember_browser_allowed_role( $user_roles ) );
		
		if ( ! $user_storage->is_totp_enabled()
		     && ! $user_storage->is_totp_configured()
		     && $options_storage->has_obligatory_role( $user_storage->get_roles() ) ) {
			
			$totp_secret = $this->get('totp_secret') ?? $this->secret_generator->generate_totp_secret();
			$this->set( 'totp_secret', $totp_secret );
			$this->set( 'qr_code', $this->qr_generator->generate_qr_code( $totp_secret ) );
		}
	}
	
	/**
	 * @param string $key
	 *
	 * @return mixed
	 */
	public function get( string $key ) {
		if ( ! array_key_exists( $key, $this->data ) ) {
			return null;
		}
		
		return $this->data[ $key ];
	}
	
	public function get_all(): array {
		return $this->data;
	}
}
