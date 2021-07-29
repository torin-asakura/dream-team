<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Events;

use TwoFAS\Light\Backup\Code;

class Backup_Login_Completed implements User_Interface {
	
	/**
	 * @var int
	 */
	protected $user_id;
	
	/**
	 * @var Code
	 */
	protected $code;
	
	public function __construct( int $user_id, Code $code ) {
		$this->user_id = $user_id;
		$this->code    = $code;
	}
	
	public function get_user_id(): int {
		return $this->user_id;
	}
	
	public function get_code(): Code {
		return $this->code;
	}
}
