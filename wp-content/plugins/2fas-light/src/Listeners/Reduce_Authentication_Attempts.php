<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Listeners;

use TwoFAS\Light\Events\Authentication_Interface;
use TwoFAS\Light\Storage\Authentication_Storage;

class Reduce_Authentication_Attempts extends Listener {
	
	/**
	 * @var Authentication_Storage
	 */
	private $authentication_storage;
	
	public function __construct( Authentication_Storage $authentication_storage ) {
		$this->authentication_storage = $authentication_storage;
	}
	
	public function handle( Authentication_Interface $event ) {
		$this->authentication_storage->reduce_authentication_attempts( $event->get_authentication() );
	}
}
