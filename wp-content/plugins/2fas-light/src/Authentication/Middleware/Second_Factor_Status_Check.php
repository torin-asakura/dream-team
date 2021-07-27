<?php
declare(strict_types=1);

namespace TwoFAS\Light\Authentication\Middleware;

use TwoFAS\Light\Storage\{Options_Storage, User_Storage};

/**
 * This class checks whether user has 2FA enabled.
 */
final class Second_Factor_Status_Check extends Middleware {
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	/**
	 * @var Options_Storage
	 */
	private $options_storage;
	
	/**
	 * @param User_Storage    $user_storage
	 * @param Options_Storage $options_storage
	 */
	public function __construct( User_Storage $user_storage, Options_Storage $options_storage ) {
		$this->user_storage    = $user_storage;
		$this->options_storage = $options_storage;
	}
	
	/**
	 * @inheritDoc
	 */
	public function handle( $user, $response = null ) {
		if ( $this->is_wp_user( $user )
		     && $this->user_storage->is_wp_user_set()
		     && ( ! $this->user_storage->is_totp_enabled() || ! $this->user_storage->is_totp_configured() )
			 && ! $this->options_storage->has_obligatory_role( $user->roles ) ) {
			return $this->json( [ 'user_id' => $user->ID ] );
		}
		
		return $this->run_next( $user, $response );
	}
}
