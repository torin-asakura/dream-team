<?php
declare(strict_types=1);

namespace TwoFAS\Light\Events;

use TwoFAS\Light\Authentication\Authentication;

class Login_Attempts_Reached implements Authentication_Interface {
	
	/**
	 * @var Authentication
	 */
	private $authentication;
	
	public function __construct( Authentication $authentication ) {
		$this->authentication = $authentication;
	}
	
	public function get_authentication(): Authentication {
		return $this->authentication;
	}
}
