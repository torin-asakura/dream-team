<?php
declare(strict_types=1);

namespace TwoFAS\Light\Totp;

class Base32_Alphabet {
	
	/**
	 * Lookup needed for Base32 encoding
	 */
	private $alphabet = [
		'A' => 0,
		'B' => 1,
		'C' => 2,
		'D' => 3,
		'E' => 4,
		'F' => 5,
		'G' => 6,
		'H' => 7,
		'I' => 8,
		'J' => 9,
		'K' => 10,
		'L' => 11,
		'M' => 12,
		'N' => 13,
		'O' => 14,
		'P' => 15,
		'Q' => 16,
		'R' => 17,
		'S' => 18,
		'T' => 19,
		'U' => 20,
		'V' => 21,
		'W' => 22,
		'X' => 23,
		'Y' => 24,
		'Z' => 25,
		'2' => 26,
		'3' => 27,
		'4' => 28,
		'5' => 29,
		'6' => 30,
		'7' => 31
	];
	
	public function get_characters(): string {
		return implode( '', array_keys( $this->alphabet ) );
	}
	
	public function get_decoding_map(): array {
		return $this->alphabet;
	}
}
