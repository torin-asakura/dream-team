<?php

namespace TwoFAS\Light\Helpers;

use OutOfRangeException;

/**
 * This is a value object that stores string which can be converted to lower/upper chars or to base64.
 */
class Str {
	
	/**
	 * @var string
	 */
	private $value;
	
	/**
	 * @param string $value
	 */
	public function __construct( $value = '' ) {
		$this->value = $value;
	}
	
	/**
	 * @return int
	 */
	public function length(): int {
		return mb_strlen( $this->value, 'UTF-8' );
	}
	
	/**
	 * @param int $index
	 *
	 * @return string
	 *
	 * @throws OutOfRangeException
	 */
	public function pick( int $index ): string {
		if ( $index >= $this->length() ) {
			throw new OutOfRangeException( 'Index of char is out of range.' );
		}
		
		return $this->value[ $index ];
	}
	
	public function concat( string $string ): self {
		$this->value .= $string;
		
		return $this;
	}
	
	public function replace( string $search, string $replace ): self {
		return new self( str_replace( $search, $replace, $this->value ) );
	}
	
	public function to_upper(): self {
		return new self( strtoupper( $this->value ) );
	}
	
	public function to_lower(): self {
		return new self( strtolower( $this->value ) );
	}
	
	public static function from_base_64( string $string ): self {
		return new self( base64_decode( $string ) );
	}
	
	public function to_base_64(): self {
		return new self( base64_encode( $this->value ) );
	}
	
	public function to_hex(): self {
		$hex = '';
		foreach ( str_split( $this->value ) as $char ) {
			$hex .= dechex( ord( $char ) );
		}
		
		return new self ( $hex );
	}
	
	public function hex_to_string(): self {
		$str = '';
		for ( $i = 0; $i < $this->length() - 1; $i += 2 ) {
			$hex = substr( $this->value, $i, 2 );
			$str .= chr( hexdec( $hex ) );
		}
		
		return new self ( $str );
	}
	
	public function to_bin(): self {
		return new self( hex2bin( $this->value ) );
	}
	
	public function bin_to_hex(): self {
		return new self ( bin2hex( $this->value )) ;
	}
	
	public function split( int $length = 1 ): array {
		return str_split( $this->value, $length );
	}
	
	public function implode( string $glue, array $array ): self {
		return new self( implode( $glue, $array ) );
	}
	
	public function equals( Str $other ): bool {
		return $this->value === $other->__toString();
	}
	
	public function __toString(): string {
		return $this->value;
	}
}
