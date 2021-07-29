<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Listeners;

use LogicException;
use TwoFAS\Light\Backup\Code;
use TwoFAS\Light\Events\Backup_Login_Completed;
use TwoFAS\Light\Exceptions\Backup_Codes_Not_Found_Exception;
use TwoFAS\Light\Storage\User_Storage;

class Update_Backup_Codes extends Listener {
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	public function __construct( User_Storage $user_storage ) {
		$this->user_storage = $user_storage;
	}
	
	public function handle( Backup_Login_Completed $event ) {
		$code         = $event->get_code();
		$backup_codes = $this->user_storage->get_backup_codes();
		
		if ( empty ( $backup_codes ) ) {
			throw new Backup_Codes_Not_Found_Exception();
		}
		
		if ( ! $code->used() || ! $code->accepted() ) {
			throw new LogicException( 'Backup code has not been used or accepted' );
		}
		
		$updated_codes = array_filter( $backup_codes, function ( $backup_code ) use ( $code ) {
			if ( ! Code::from_base_64( $backup_code )->equals( $code ) ) {
				return true;
			}
			
			return false;
		} );
		
		$this->user_storage->set_backup_codes( $updated_codes );
	}
}
