<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Authentication\Handler;

use TwoFAS\Light\Events\Standard_Login_Completed;
use TwoFAS\Light\Events\Totp_Configuration_Completed;
use TwoFAS\Light\Exceptions\Invalid_Totp_Token_Exception;
use TwoFAS\Light\Helpers\Dispatcher;
use TwoFAS\Light\Http\Code;
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Storage\Options_Storage;
use TwoFAS\Light\Storage\Storage;
use TwoFAS\Light\Templates\Views;
use TwoFAS\Light\Totp\Secret;
use TwoFAS\Light\Totp\Token;
use TwoFAS\Light\Totp\Token_Generator;

class Login_Configuration extends Standard_Login {
	
	/**
	 * @var Options_Storage
	 */
	private $options_storage;
	
	/**
	 * @var Token_Generator
	 */
	private $token_generator;
	
	public function __construct( Request $request, Storage $storage, Token_Generator $token_generator ) {
		parent::__construct( $request, $storage );
		
		$this->page            = Views::CONFIGURATION_AUTHENTICATION_PAGE;
		$this->options_storage = $storage->get_options();
		$this->token_generator = $token_generator;
	}
	
	
	/**
	 * @inheritDoc
	 */
	public function supports( $user ): bool {
		if ( $this->is_wp_user( $user ) ) {
			return false;
		}
		
		return $this->user_storage->is_wp_user_set()
		       && ( ! $this->user_storage->is_totp_enabled() || ! $this->user_storage->is_totp_configured() )
		       && $this->request->has_twofas_param( 'totp-token' )
		       && $this->request->has_twofas_param( 'totp-secret' );
	}
	
	/**
	 * @inheritDoc
	 */
	protected function check_code() {
		$totp_secret = new Secret( $this->request->get_twofas_param( 'totp-secret' ) );
		$totp_token  = new Token( $this->request->get_twofas_param( 'totp-token' ) );
		
		$valid_tokens = $this->token_generator->generate_tokens( $totp_secret );
		$totp_token->match( $valid_tokens );
		
		if ( ! $totp_token->accepted() ) {
			throw new Invalid_Totp_Token_Exception( 'Invalid TOTP token supplied' );
		}
		
		Dispatcher::dispatch( new Totp_Configuration_Completed( $totp_secret, $totp_token ) );
		Dispatcher::dispatch( new Standard_Login_Completed( $this->get_user_id()) );
		
		return $this->json( [ 'user_id' => $this->get_user_id() ], Code::OK );
	}
}
