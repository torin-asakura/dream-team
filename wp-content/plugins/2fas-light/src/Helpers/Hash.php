<?php
declare(strict_types=1);

namespace TwoFAS\Light\Helpers;

use Exception;
use TwoFAS\Light\Random\Random_String_Generator;

class Hash {
	
	const TRUSTED_DEVICE_KEY_LENGTH = 23;
	const STEP_TOKEN_KEY_LENGTH     = 128;
	const SESSION_KEY_LENGTH        = 16;
	
	/**
	 * @return string
	 *
	 * @throws Exception
	 */
	public static function get_trusted_device_id(): string {
		$str = self::generate( self::TRUSTED_DEVICE_KEY_LENGTH );
		
		return md5( $str->__toString() );
	}
	
	/**
	 * @return string
	 *
	 * @throws Exception
	 */
	public static function get_step_token(): string {
		$str = self::generate( self::STEP_TOKEN_KEY_LENGTH );
		
		return $str->__toString();
	}
	
	/**
	 * @return string
	 *
	 * @throws Exception
	 */
	public static function get_session_id(): string {
		$str = self::generate( self::SESSION_KEY_LENGTH );
		
		return $str->to_base_64()->__toString();
	}
	
	/**
	 * @param int $length
	 *
	 * @return Str
	 *
	 * @throws Exception
	 */
	private static function generate( int $length ): Str {
		$generator = new Random_String_Generator();
		
		return $generator->string( $length );
	}
}
