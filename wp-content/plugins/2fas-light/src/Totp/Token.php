<?php
declare(strict_types=1);

namespace TwoFAS\Light\Totp;

use LogicException;
use TwoFAS\Light\Exceptions\Invalid_Totp_Token_Exception;

class Token {
	
	/**
	 * @var string
	 */
	private $value;
	
	/**
	 * @var bool
	 */
	private $accepted = false;
	
	public function __construct( string $value ) {
		$this->validate_format( $value );
		$this->value = $value;
	}
	
	public function get(): string {
		return $this->value;
	}
	
	public function accepted(): bool {
		return $this->accepted;
	}
	
	public function match( array $others ) {
		foreach ( $others as $token ) {
			if ( ! $token instanceof Token ) {
				throw new LogicException();
			}
			
			if ( $this->value === $token->get() ) {
				$this->accepted = true;
			}
		}
	}
	
	/**
	 * @param string $value
	 *
	 * @throws Invalid_Totp_Token_Exception
	 */
	private function validate_format( string $value ) {
		if ( empty( $value ) ) {
			throw new Invalid_Totp_Token_Exception( 'Empty TOTP token supplied' );
		}
		
		if ( preg_match( '/^[0-9]{6}$/', $value ) !== 1 ) {
			throw new Invalid_Totp_Token_Exception( 'TOTP token has no valid format' );
		}
	}
}
