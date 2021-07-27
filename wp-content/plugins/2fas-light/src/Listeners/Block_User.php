<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Listeners;

use TwoFAS\Light\Events\Login_Attempts_Reached;
use TwoFAS\Light\Storage\User_Storage;

class Block_User extends Listener {
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	public function __construct( User_Storage $user_storage ) {
		$this->user_storage = $user_storage;
	}
	
	public function handle( Login_Attempts_Reached $event ) {
		$this->user_storage->block_user();
	}
}
