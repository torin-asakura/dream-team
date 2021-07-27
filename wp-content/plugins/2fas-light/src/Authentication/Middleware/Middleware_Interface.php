<?php
declare(strict_types=1);

namespace TwoFAS\Light\Authentication\Middleware;

use TwoFAS\Light\Http\Response\{Not_Handled_Response, Redirect_Response, View_Response, JSON_Response};
use WP_Error;
use WP_User;

interface Middleware_Interface {

	/**
	 * @param Middleware_Interface $next
	 */
	public function add_next( Middleware_Interface $next );

	/**
	 * @param WP_User|WP_Error                                                                                                                $user
	 * @param JSON_Response|View_Response|Redirect_Response|Not_Handled_Response|null $response
	 *
	 * @return JSON_Response|View_Response|Redirect_Response|Not_Handled_Response|null
	 */
	public function handle( $user, $response = null );
}
