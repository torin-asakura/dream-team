<?php
declare(strict_types=1);

namespace TwoFAS\Light\Authentication\Middleware;

class Spammer_Login_Check extends Middleware {
	
	const SPAMMER_WP_ERROR_CODE = 'spammer_account';
	
	/**
	 * @inheritDoc
	 */
	public function handle( $user, $response = null ) {
		if ( $this->is_wp_error( $user ) && $user->get_error_code() === self::SPAMMER_WP_ERROR_CODE ) {
			return $this->not_handled();
		}
		
		return $this->run_next( $user, $response );
	}
}
