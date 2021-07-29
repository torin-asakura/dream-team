<?php
declare(strict_types=1);

namespace TwoFAS\Light\Totp;

use LogicException;
use TwoFAS\Light\Exceptions\Invalid_Totp_Secret_Exception;
use TwoFAS\Light\Helpers\Time;

class Token_Generator {
	
	/**
	 * Length of the Token generated
	 */
	const TOTP_TOKEN_LENGTH = 6;
	
	/**
	 * Interval between key regeneration
	 */
	const KEY_REGENERATION = 30;
	
	/**
	 * How many seconds behind or ahead of current time should codes be generated for to allow minor client/server
	 * time discrepancies. Must be divisible by self::KEY_REGENERATION.
	 */
	const SECONDS_BEHIND_OR_AHEAD = 120;
	
	/**
	 * @var int
	 */
	private $duration;
	
	/**
	 * @var Time
	 */
	private $time;
	
	/**
	 * Code_Generator constructor.
	 *
	 * @param Time $time
	 */
	public function __construct( Time $time ) {
		$this->duration = self::SECONDS_BEHIND_OR_AHEAD * 2;
		$this->time     = $time;
	}
	
	/**
	 * @param Secret $secret
	 *
	 * @return array
	 *
	 * @throws Invalid_Totp_Secret_Exception
	 * @throws LogicException
	 */
	public function generate_tokens( Secret $secret ): array {
		$tokens_for_period = [];
		$binary_key        = $secret->decode();
		
		for ( $code_offset = 0; $code_offset < $this->get_codes_amount(); $code_offset ++ ) {
			$tokens_for_period[] = $this->generate_token_for_code_offset( $binary_key, $code_offset );
		}
		
		return $tokens_for_period;
	}
	
	public function generate_token( string $binary_key, int $timestamp ): Token {
		$counter = $this->get_counter( $timestamp );
		$code    = $this->oath_hotp( $binary_key, $counter );
		
		return new Token( $code );
	}
	
	private function generate_token_for_code_offset( string $binary_key, int $code_offset ): Token {
		$timestamp = $this->time->get_current_timestamp_plus_seconds( $this->get_period( $code_offset ) );
		
		return $this->generate_token( $binary_key, $timestamp );
	}
	
	private function get_period( int $offset ): int {
		return - self::SECONDS_BEHIND_OR_AHEAD + ( $offset * self::KEY_REGENERATION );
	}
	
	/**
	 * @return int
	 *
	 * @throws LogicException
	 */
	private function get_codes_amount(): int {
		if ( $this->duration % self::KEY_REGENERATION ) {
			throw new LogicException( 'Number of codes is not valid' );
		}
		
		return $this->duration / self::KEY_REGENERATION;
	}
	
	/**
	 * Returns the floating Unix Timestamp divided by the keyRegeneration period.
	 *
	 * @param int $timestamp
	 *
	 * @return float
	 */
	private function get_counter( int $timestamp ): float {
		return floor( $timestamp / self::KEY_REGENERATION );
	}
	
	/**
	 * Takes the secret key and the timestamp and returns the one time
	 * password.
	 *
	 * @param string (binary) $key - Secret key in binary form.
	 * @param float $counter - Timestamp as returned by get_timestamp.
	 *
	 * @return string
	 *
	 * @throws LogicException
	 */
	private function oath_hotp( string $key, float $counter ): string {
		if ( strlen( $key ) < 8 ) {
			throw new LogicException;
		}
		$bin_counter = pack( 'N*', 0 ) . pack( 'N*', $counter ); // Counter must be 64-bit int
		$hash        = hash_hmac( 'sha1', $bin_counter, $key, true );
		
		return str_pad( $this->oath_truncate( $hash ), self::TOTP_TOKEN_LENGTH, '0', STR_PAD_LEFT );
	}
	
	/**
	 * Extracts the OTP from the SHA1 hash.
	 *
	 * @param string (binary) $hash
	 *
	 * @return string
	 */
	private function oath_truncate( string $hash ): string {
		$offset = ord( $hash[19] ) & 0xf;
		
		return strval((
			       ( ( ord( $hash[ $offset + 0 ] ) & 0x7f ) << 24 ) |
			       ( ( ord( $hash[ $offset + 1 ] ) & 0xff ) << 16 ) |
			       ( ( ord( $hash[ $offset + 2 ] ) & 0xff ) << 8 ) |
			       ( ord( $hash[ $offset + 3 ] ) & 0xff )
		       ) % pow( 10, self::TOTP_TOKEN_LENGTH ));
	}
}
