<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Authentication\Handler;

use TwoFAS\Light\Events\Standard_Login_Completed;
use TwoFAS\Light\Exceptions\Invalid_Totp_Token_Exception;
use TwoFAS\Light\Helpers\Dispatcher;
use TwoFAS\Light\Http\Code;
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Http\Response\{JSON_Response, Not_Handled_Response, View_Response, Redirect_Response};
use TwoFAS\Light\Storage\Storage;
use TwoFAS\Light\Templates\Views;
use TwoFAS\Light\Totp\{Token, Token_Checker};
use WP_Error;
use WP_User;

/**
 * This class handles logging in if user manually enters a 2FA code.
 */
class Totp_Login extends Standard_Login {
	
	/**
	 * @var Token_Checker
	 */
	private $token_checker;
	
	public function __construct( Request $request, Token_Checker $token_checker, Storage $storage ) {
		parent::__construct( $request, $storage );
		$this->page          = Views::TOTP_AUTHENTICATION_PAGE;
		$this->token_checker = $token_checker;
	}
	
	/**
	 * @param WP_Error|WP_User $user
	 *
	 * @return bool
	 */
	public function supports( $user ): bool {
		if ( $this->is_wp_user( $user ) ) {
			return false;
		}
		
		return ! empty( $this->request->post( 'twofas_light_totp_token' ) );
	}
	
	/**
	 * @return JSON_Response|Not_Handled_Response|Redirect_Response|View_Response
	 *
	 * @throws Invalid_Totp_Token_Exception
	 */
	protected function check_code() {
		$totp_token = new Token( $this->request->post( 'twofas_light_totp_token' ) );
		$this->token_checker->check( $totp_token );
		
		if ( ! $totp_token->accepted() ) {
			throw new Invalid_Totp_Token_Exception( 'Invalid TOTP token supplied' );
		}
		
		Dispatcher::dispatch( new Standard_Login_Completed( $this->get_user_id() ) );
		
		return $this->json( [ 'user_id' => $this->get_user_id() ], Code::OK );
	}
}
