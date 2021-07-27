<?php
declare(strict_types=1);

namespace TwoFAS\Light\Authentication\Middleware;

use TwoFAS\Light\Storage\User_Storage;

/**
 * This class calls a WordPress function which
 * determines whether the administration panel
 * should be viewed over SSL.
 */
final class SSL extends Middleware {

	/**
	 * @var User_Storage
	 */
	private $user_storage;

	/**
	 * @param User_Storage $user_storage
	 */
	public function __construct( User_Storage $user_storage ) {
		$this->user_storage = $user_storage;
	}

	/**
	 * @inheritDoc
	 */
	public function handle( $user, $response = null ) {
		if ( ! $this->is_wp_user( $user ) && $this->user_storage->is_wp_user_set() && ! force_ssl_admin() ) {
			if ( get_user_option( 'use_ssl', $this->user_storage->get_user_id() ) ) {
				force_ssl_admin( true );
			}
		}

		return $this->run_next( $user, $response );
	}
}
