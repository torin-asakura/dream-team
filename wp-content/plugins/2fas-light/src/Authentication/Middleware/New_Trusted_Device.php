<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Authentication\Middleware;

use Exception;
use TwoFAS\Light\Authentication\{Login_Action, Template_Data};
use TwoFAS\Light\Http\Code;
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Http\Response\{JSON_Response, Not_Handled_Response, Redirect_Response, View_Response};
use TwoFAS\Light\Storage\Storage;
use WP_Error;
use WP_User;

/**
 * This class adds a new trusted device if a user checked a checkbox on a login page.
 */
final class New_Trusted_Device extends Middleware {
	
	/**
	 * @var Request
	 */
	private $request;
	
	/**
	 * @var Storage
	 */
	private $storage;
	
	/**
	 * @param Request $request
	 * @param Storage $storage
	 */
	public function __construct( Request $request, Storage $storage ) {
		$this->request = $request;
		$this->storage = $storage;
	}
	
	/**
	 * @param WP_Error|WP_User                                                        $user
	 * @param JSON_Response|Not_Handled_Response|Redirect_Response|View_Response|null $response
	 *
	 * @return JSON_Response|Not_Handled_Response|Redirect_Response|View_Response|null
	 * @throws Exception
	 */
	public function handle( $user, $response = null ) {
		$remember_device         = $this->request->post( Template_Data::TWOFAS_LOGIN_REMEMBER_DEVICE );
		$trusted_devices_storage = $this->storage->get_trusted_devices_storage();
		$options_storage         = $this->storage->get_options();
		$user_storage            = $this->storage->get_user_storage();
		
		if ( ! $this->is_wp_user( $user )
		     && $user_storage->is_wp_user_set()
			 && $options_storage->has_remember_browser_allowed_role( $user_storage->get_roles() )
		     && $response instanceof JSON_Response
		     && Code::OK === $response->get_status_code()
		     && ! empty( $remember_device )
		     && $this->request->is_login_action_equal_to( Login_Action::VERIFY_TOTP_CODE ) ) {
			$body    = $response->get_body();
			$user_id = $body['user_id'];
			
			$trusted_devices_storage->add_trusted_device( $user_id );
		}
		
		return $this->run_next( $user, $response );
	}
}
