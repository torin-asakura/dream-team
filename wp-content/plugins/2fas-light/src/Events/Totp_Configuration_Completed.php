<?php
declare(strict_types=1);

namespace TwoFAS\Light\Events;

use TwoFAS\Light\Totp\{Secret, Token};

class Totp_Configuration_Completed implements Event_Interface {

	/**
	 * @var Secret
	 */
	private $secret;

	/**
	 * @var Token
	 */
	private $token;

	/**
	 * @param Secret $secret
	 * @param Token  $token
	 */
	public function __construct( Secret $secret, Token $token ) {
		$this->secret = $secret;
		$this->token  = $token;
	}

	public function get_secret(): Secret {
		return $this->secret;
	}

	public function get_token(): Token {
		return $this->token;
	}
}
