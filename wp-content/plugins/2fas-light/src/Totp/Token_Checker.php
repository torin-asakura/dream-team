<?php
declare(strict_types=1);

namespace TwoFAS\Light\Totp;

use TwoFAS\Light\Exceptions\User_Not_Found_Exception;
use TwoFAS\Light\Storage\User_Storage;

class Token_Checker {
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	/**
	 * @var Token_Generator
	 */
	private $token_generator;
	
	/**
	 * @param User_Storage    $user_storage
	 * @param Token_Generator $token_generator
	 */
	public function __construct( User_Storage $user_storage, Token_Generator $token_generator ) {
		$this->user_storage    = $user_storage;
		$this->token_generator = $token_generator;
	}
	
	/**
	 * @param Token $totp_token
	 *
	 * @throws User_Not_Found_Exception
	 */
	public function check( Token $totp_token ) {
		$totp_secret  = new Secret( $this->user_storage->get_totp_secret() );
		$valid_tokens = $this->token_generator->generate_tokens( $totp_secret );
		$totp_token->match( $valid_tokens );
	}
}
