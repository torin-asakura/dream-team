<?php
declare(strict_types=1);

namespace TwoFAS\Light\Hooks;

use TwoFAS\Light\Storage\Authentication_Storage;

class Delete_Expired_Authentications_Action implements Hook_Interface {
	
	/**
	 * @var Authentication_Storage
	 */
	private $authentication_storage;
	
	/**
	 * @param Authentication_Storage $authentication_storage
	 */
	public function __construct( Authentication_Storage $authentication_storage ) {
		$this->authentication_storage = $authentication_storage;
	}
	
	public function register_hook() {
		$hook = 'delete_expired_authentications';
		
		if ( ! wp_next_scheduled( $hook ) ) {
			wp_schedule_event( time(), 'daily', $hook );
		}
		
		add_action( $hook, [ $this->authentication_storage, 'delete_expired_authentications' ] );
	}
}
