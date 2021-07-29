<?php
declare(strict_types=1);

namespace TwoFAS\Light\Totp;

use LogicException;
use TwoFAS\Light\Exceptions\Invalid_Totp_Secret_Exception;

class Secret {
	
	/**
	 * @var Base32_Alphabet
	 */
	private $alphabet;
	
	/**
	 * @var string
	 */
	private $value;
	
	/**
	 * @param string $value
	 */
	public function __construct( string $value ) {
		$this->alphabet = new Base32_Alphabet();
		$this->validate_format( $value );
		$this->value = $value;
	}
	
	public function get(): string {
		return $this->value;
	}
	
	/**
	 * Decodes a base32 string into a binary string.
	 *
	 * @return string (binary)
	 *
	 * @throws LogicException
	 */
	public function decode(): string {
		$b32          = strtoupper( $this->value );
		$l            = strlen( $b32 );
		$n            = 0;
		$j            = 0;
		$binary       = '';
		$decoding_map = $this->alphabet->get_decoding_map();
		for ( $i = 0; $i < $l; $i ++ ) {
			
			$n = $n << 5;                // Move buffer left by 5 to make room
			$n = $n + $decoding_map[ $b32[ $i ] ];    // Add value into buffer
			$j = $j + 5;                // Keep track of number of bits in buffer
			
			if ( $j >= 8 ) {
				$j      = $j - 8;
				$binary .= chr( ( $n & ( 0xFF << $j ) ) >> $j );
			}
		}
		
		return $binary;
	}
	
	/**
	 * @param string $value
	 *
	 * @throws Invalid_Totp_Secret_Exception
	 */
	private function validate_format( string $value ) {
		if ( ! is_string( $value ) ) {
			throw new Invalid_Totp_Secret_Exception();
		}
		
		$b32                = strtoupper( $value );
		$allowed_characters = $this->alphabet->get_characters();

		if ( ! preg_match( '/^[' . $allowed_characters . ']{' . Secret_Generator::SECRET_LENGTH . '}$/', $b32 ) ) {
			throw new Invalid_Totp_Secret_Exception();
		}
	}
}
