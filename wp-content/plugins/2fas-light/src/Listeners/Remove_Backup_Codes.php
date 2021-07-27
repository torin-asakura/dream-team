<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Listeners;

use TwoFAS\Light\Events\User_Interface;
use TwoFAS\Light\Storage\User_Storage;

class Remove_Backup_Codes extends Listener {
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	public function __construct( User_Storage $user_storage ) {
		$this->user_storage = $user_storage;
	}
	
	public function handle( User_Interface $event ) {
		$this->user_storage->set_backup_codes( [] );
	}
}
