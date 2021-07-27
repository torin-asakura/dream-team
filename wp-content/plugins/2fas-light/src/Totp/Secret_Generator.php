<?php
declare(strict_types=1);

namespace TwoFAS\Light\Totp;

class Secret_Generator {
	
	/**
	 * Length of secret
	 */
	const SECRET_LENGTH = 16;
	
	/** @var Base32_Alphabet */
	private $alphabet;
	
	/**
	 * Secret_Generator constructor.
	 *
	 * @param Base32_Alphabet $base32_alphabet
	 */
	public function __construct( Base32_Alphabet $base32_alphabet ) {
		$this->alphabet = $base32_alphabet;
	}
	
	/**
	 * Generates a 16 digit secret key in base32 format
	 *
	 * @return string
	 */
	public function generate_totp_secret(): string {
		$secret = '';
		
		while ( strlen( $secret ) < self::SECRET_LENGTH ) {
			$secret .= substr( str_shuffle( $this->alphabet->get_characters() ), - 1 );
		}
		
		return $secret;
	}
}
