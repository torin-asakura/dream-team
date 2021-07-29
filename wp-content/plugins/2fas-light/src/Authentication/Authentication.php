<?php
declare(strict_types=1);

namespace TwoFAS\Light\Authentication;

use DateTime;

class Authentication {
	
	const MAX_LOGIN_ATTEMPTS    = 5;
	const EXPIRATION_IN_SECONDS = 300;
	
	/**
	 * @var int
	 */
	private $id;
	
	/**
	 * @var int
	 */
	private $user_id;
	
	/**
	 * @var int
	 */
	private $attempts_remaining;
	
	/**
	 * @var DateTime
	 */
	private $created_at;
	
	/**
	 * @var DateTime
	 */
	private $valid_to;
	
	/**
	 * @param int      $id
	 * @param int      $user_id
	 * @param int      $attempts_remaining
	 * @param DateTime $created_at
	 * @param DateTime $valid_to
	 */
	public function __construct( int $id, int $user_id, int $attempts_remaining, DateTime $created_at, DateTime $valid_to ) {
		$this->id                 = $id;
		$this->user_id            = $user_id;
		$this->attempts_remaining = $attempts_remaining;
		$this->created_at         = $created_at;
		$this->valid_to           = $valid_to;
	}
	
	public function get_user_id(): int {
		return $this->user_id;
	}
	
	public function get_attempts_remaining(): int {
		return $this->attempts_remaining;
	}
	
	public function is_expired(): bool {
		return $this->valid_to < new DateTime();
	}
	
	public function is_rejected(): bool {
		return $this->attempts_remaining <= 0;
	}
}
