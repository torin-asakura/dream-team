<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Authentication\Login_Token;

use Exception;
use TwoFAS\Light\Exceptions\{Login_Token_Not_Found_Exception,
	Login_Token_Validation_Exception,
	User_Not_Found_Exception};
use TwoFAS\Light\Helpers\Hash;
use TwoFAS\Light\Http\Request\Session;
use TwoFAS\Light\Storage\User_Storage;

class Login_Token_Manager {
	
	const STEP_TOKEN_HASH = 'step_token_hash';
	
	/**
	 * @var Session
	 */
	private $session;
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	public function __construct( Session $session, User_Storage $user_storage ) {
		$this->session      = $session;
		$this->user_storage = $user_storage;
	}
	
	/**
	 * @param string $context
	 *
	 * @throws Exception
	 * @throws User_Not_Found_Exception
	 */
	public function generate_first_step_token( string $context ) {
		$this->create( Step::FIRST, $context );
	}
	
	/**
	 * @throws Exception
	 * @throws Login_Token_Validation_Exception
	 * @throws Login_Token_Not_Found_Exception
	 */
	public function generate_second_step_token() {
		$login_token = $this->get();
		
		if ( is_null( $login_token ) ) {
			throw new Login_Token_Not_Found_Exception();
		}
		
		if ( $this->get_token_hash() !== $login_token->get_hash() ) {
			throw new Login_Token_Validation_Exception();
		}
		
		$this->create( Step::SECOND, $login_token->get_context() );
	}
	
	/**
	 * @return Login_Token|null
	 */
	public function get() {
		$json = $this->user_storage->get_step_token();
		
		if ( ! is_null( $json ) ) {
			return Login_Token::createFromJson( $json );
		}
		
		return null;
	}
	
	/**
	 * @return null|string
	 */
	public function get_token_hash() {
		return $this->session->get( self::STEP_TOKEN_HASH );
	}
	
	/**
	 * @throws User_Not_Found_Exception
	 */
	public function reset() {
		$this->session->delete( self::STEP_TOKEN_HASH );
		$this->user_storage->delete_step_token();
	}
	
	/**
	 * @param int    $step
	 * @param string $context
	 *
	 * @throws Exception
	 */
	private function create( int $step, string $context ) {
		$login_token      = new Login_Token(
			$this->user_storage->get_user_id(),
			Hash::get_step_token(),
			$step,
			$context
		);
		$serialized_token = json_encode( $login_token );
		
		$this->session->set( self::STEP_TOKEN_HASH, $login_token->get_hash() );
		$this->user_storage->set_step_token( $serialized_token );
	}
}
