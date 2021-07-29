<?php
declare(strict_types=1);

namespace TwoFAS\Light\Authentication\Middleware;

use TwoFAS\Light\Events\Totp_Configuration_Removed;
use TwoFAS\Light\Helpers\Dispatcher;
use TwoFAS\Light\Storage\Storage;

class Configuration_Remover extends Middleware {
	
	/**
	 * @var Storage
	 */
	private $storage;
	
	/**
	 * @param Storage $storage
	 */
	public function __construct( Storage $storage ) {
		$this->storage = $storage;
	}
	
	/**
	 * @inheritDoc
	 */
	public function handle( $user, $response = null ) {
		$user_storage            = $this->storage->get_user_storage();
		$options_storage         = $this->storage->get_options();
		
		if ( $this->is_wp_user( $user )
		     && $user_storage->is_totp_configured()
		     && ! $user_storage->is_totp_enabled()
		     && $options_storage->has_obligatory_role( $user->roles ) ) {
			Dispatcher::dispatch( new Totp_Configuration_Removed( $user->ID ) );
		}
		
		return $this->run_next( $user, $response );
	}
}
