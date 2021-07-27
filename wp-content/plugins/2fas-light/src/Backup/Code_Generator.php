<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Backup;

use Exception;
use TwoFAS\Light\Helpers\Str;
use TwoFAS\Light\Storage\User_Storage;

class Code_Generator {
	
	const CODES_COUNT = 5;
	const CODE_LENGTH = 12;
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	/**
	 * @var Str
	 */
	private $dictionary;
	
	public function __construct( User_Storage $user_storage ) {
		$this->user_storage = $user_storage;
		$this->dictionary   = new Str( Code::NUMBERS . Code::LETTERS );
	}
	
	/**
	 * @return array
	 *
	 * @throws Exception
	 */
	public function generate(): array {
		$backup_codes = [];
		for ( $i = self::CODES_COUNT; $i > 0; $i-- ) {
			$backup_codes[] = new Code( $this->get_code() );
		}
		
		$this->user_storage->set_backup_codes( array_map( function ( Code $backup_code ) {
			return $backup_code->to_base_64();
		}, $backup_codes) );
		
		return $backup_codes;
	}
	
	/**
	 * @return string
	 *
	 * @throws Exception
	 */
	private function get_code(): string {
		return $this->get_characters( self::CODE_LENGTH );
	}
	
	/**
	 * @param int $count
	 *
	 * @return string
	 *
	 * @throws Exception
	 */
	private function get_characters( int $count ): string {
		return $count > 0 ? $this->get_character() . $this->get_characters( --$count ) : '';
	}
	
	/**
	 * @return string
	 *
	 * @throws Exception
	 */
	private function get_character(): string {
		return $this->dictionary->pick( random_int( 0, $this->dictionary->length() - 1 ) );
	}
}
