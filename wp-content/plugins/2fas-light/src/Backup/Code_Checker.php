<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Backup;

use TwoFAS\Light\Storage\User_Storage;

class Code_Checker {
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	/**
	 * @param User_Storage   $user_storage
	 */
	public function __construct( User_Storage $user_storage ) {
		$this->user_storage   = $user_storage;
	}
	
	public function check( Code $code ) {
		$backup_codes = $this->user_storage->get_backup_codes();
		
		if ( ! is_array( $backup_codes ) ) {
			$backup_codes = [];
		}
		
		$code->match( array_map( function (string $backup_code ) {
			return Code::from_base_64( $backup_code );
		}, $backup_codes ) );
	}
}
