<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Backup;

use LogicException;
use TwoFAS\Light\Exceptions\Invalid_Backup_Code_Exception;
use TwoFAS\Light\Helpers\Str;

class Code {
	
	const NUMBERS = '23456789';
	const LETTERS = 'ABCDEFGHJKMNPQRSTUVWXYZ';
	const FORMAT  = '/^[' . self::NUMBERS . self::LETTERS . ']{12}$/';
	
	/**
	 * @var Str
	 */
	private $value;
	
	/**
	 * @var bool
	 */
	private $accepted = false;
	
	/**
	 * @var bool
	 */
	private $used = false;
	
	public function __construct( string $value ) {
		$this->value = ( new Str( $value ) )->replace( '-', '' );
		$this->validate_format( $this->value );
	}
	
	public function get_value(): Str {
		return $this->value;
	}
	
	public function format(): string {
		return $this->value->implode( '-', $this->value->split( 4 ) )->__toString();
	}
	
	public function accepted(): bool {
		return $this->accepted;
	}
	
	public function used(): bool {
		return $this->used;
	}
	
	public function equals ( Code $other ): bool {
		return $this->value->equals( $other->get_value() );
	}
	
	public function match( array $others ) {
		$this->used = true;
		
		/** @var Code $code */
		foreach ( $others as $code ) {
			if ( ! $code instanceof Code ) {
				throw new LogicException();
			}
			
			if ( $this->equals( $code ) ) {
				$this->accepted = true;
			}
		}
	}
	
	public static function from_base_64( string $string ): self {
		return new self( Str::from_base_64( $string )->bin_to_hex()->hex_to_string()->__toString() );
	}
	
	public function to_base_64(): string {
		return $this->value->to_hex()->to_bin()->to_base_64()->__toString();
	}
	
	/**
	 * @param Str $value
	 *
	 * @throws Invalid_Backup_Code_Exception
	 */
	private function validate_format( Str $value ) {
		if ( 0 === $value->length() ) {
			throw new Invalid_Backup_Code_Exception( 'Empty backup code supplied' );
		}
		
		if ( preg_match( self::FORMAT, $value->__toString() ) !== 1 ) {
			throw new Invalid_Backup_Code_Exception( 'Backup code has no valid format' );
		}
	}
}
