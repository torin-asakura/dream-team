<?php
declare(strict_types=1);

namespace TwoFAS\Light\Random;

use Exception;
use TwoFAS\Light\Helpers\Str;

class Random_String_Generator {
	
	const LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const DIGITS  = '0123456789';
	const SYMBOLS = '!#$%&()*+,-./:;<=>?@[]^_`{|}~';
	
	/**
	 * @param int $size
	 *
	 * @return Str
	 *
	 * @throws Exception
	 */
	public function string( int $size ): Str {
		return $this->get_random( new Str( self::LETTERS . self::DIGITS . self::SYMBOLS ), $size );
	}
	
	/**
	 * @param int $size
	 *
	 * @return Str
	 *
	 * @throws Exception
	 */
	public function alpha_num( int $size ): Str {
		return $this->get_random( new Str( self::LETTERS . self::DIGITS ), $size );
	}
	
	/**
	 * @param int $size
	 *
	 * @return Str
	 *
	 * @throws Exception
	 */
	public function symbols( int $size ): Str {
		return $this->get_random( new Str( self::SYMBOLS ), $size );
	}
	
	/**
	 * @param Str $alphabet
	 * @param int $size
	 *
	 * @return Str
	 *
	 * @throws Exception
	 */
	private function get_random( Str $alphabet, int $size ): Str {
		$string = new Str();
		
		if ( $size < 1 ) {
			return $string;
		}
		
		while ( $string->length() < $size ) {
			$index  = random_int( 0, $alphabet->length() - 1 );
			$string = $string->concat( $alphabet->pick( $index ) );
		}
		
		return $string;
	}
}
