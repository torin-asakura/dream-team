<?php
declare(strict_types=1);

namespace TwoFAS\Light\Events;

class Totp_Configuration_Removed implements User_Interface {
	
	/**
	 * @var int $user_id
	 */
	private $user_id;
	
	public function __construct( int $user_id ) {
		$this->user_id = $user_id;
	}
	
	public function get_user_id(): int {
		return $this->user_id;
	}
}
