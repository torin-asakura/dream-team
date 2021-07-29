<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Http\Middleware;

use TwoFAS\Light\Http\Code;
use TwoFAS\Light\Http\Direct_URL;
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Notifications\Notification;
use TwoFAS\Light\Storage\User_Storage;

class Check_Logged_In extends Middleware {
	
	/**
	 * @var Request
	 */
	private $request;
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	public function __construct( Request $request, User_Storage $user_storage ) {
		$this->request      = $request;
		$this->user_storage = $user_storage;
	}
	
	/**
	 * @inheritDoc
	 */
	public function handle() {
		if ( ! $this->user_storage->is_wp_user_set() ) {
			if ( $this->request->is_ajax() ) {
				return $this->json(
					[
						'error' => Notification::get( 'user-not-logged-in' ),
					],
					Code::FORBIDDEN );
			}
			
			$redirect_to = $this->request->request_uri();
			$args        = [];
			if ( ! empty( $redirect_to ) ) {
				$args['redirect_to'] = urlencode( esc_url_raw( site_url($redirect_to) ) );
			}
			
			return $this->redirect( new Direct_URL( add_query_arg( $args, wp_login_url() ) ) );
		}
		
		return $this->next->handle();
	}
}
