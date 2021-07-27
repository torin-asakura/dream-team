<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Listeners;

use TwoFAS\Light\Events\Authentication_Interface;
use TwoFAS\Light\Storage\Authentication_Storage;

class Close_Authentication extends Listener {
	
	/**
	 * @var Authentication_Storage
	 */
	private $authentication_storage;
	
	public function __construct( Authentication_Storage $authentication_storage ) {
		$this->authentication_storage = $authentication_storage;
	}
	
	public function handle( Authentication_Interface $event ) {
		$this->authentication_storage->close_authentication( $event->get_authentication() );
	}
}
