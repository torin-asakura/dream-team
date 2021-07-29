<?php
declare(strict_types=1);

namespace TwoFAS\Light\Totp;

use TwoFAS\Light\Exceptions\User_Not_Found_Exception;
use TwoFAS\Light\Helpers\Environment;
use TwoFAS\Light\Storage\User_Storage;

class QR_Code_Message {
	
	const MAXIMUM_ISSUER_LENGTH      = 18;
	const MAXIMUM_DESCRIPTION_LENGTH = 19;
	
	/**
	 * @var Environment
	 */
	private $environment;
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	/**
	 * @param Environment  $environment
	 * @param User_Storage $user_storage
	 */
	public function __construct( Environment $environment, User_Storage $user_storage ) {
		$this->environment  = $environment;
		$this->user_storage = $user_storage;
	}
	
	/**
	 * @param string $totp_secret
	 *
	 * @return string
	 *
	 * @throws User_Not_Found_Exception
	 */
	public function create( string $totp_secret ): string {
		$issuer      = $this->get_site_name();
		$user_email  = rawurlencode( $this->user_storage->get_email() );
		$totp_secret = rawurlencode( $totp_secret );
		$description = $this->get_description();
		
		return "otpauth://totp/{$description}:{$user_email}?secret={$totp_secret}&issuer={$issuer}";
	}

	private function get_site_name(): string {
		if ( is_multisite() ) {
			$site_name = sprintf(
				'%s (%s)',
				$this->environment->get_wordpress_app_name(),
				$this->environment->get_wordpress_network_name() );
		} else {
			$site_name = $this->environment->get_wordpress_app_name();
		}
		
		return rawurlencode( substr( $site_name, 0, self::MAXIMUM_ISSUER_LENGTH ) );
	}
	
	private function get_description(): string {
		$default_description = rawurlencode( 'WordPress Account' );
		$site_url            = get_option( 'siteurl' );
		if ( $site_url ) {
			$parsed = parse_url( $site_url );
			if ( isset( $parsed['host'] ) ) {
				$description = rawurlencode( $parsed['host'] );
				
				return $this->validate_description( $description ) ? $description : $default_description;
			}
		}
		
		return $default_description;
	}
	
	private function validate_description( string $description ): bool {
		return strlen( $description ) <= self::MAXIMUM_DESCRIPTION_LENGTH;
	}
}
