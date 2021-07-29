<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Authentication\Login_Token;

use JsonSerializable;
use RuntimeException;

class Login_Token implements JsonSerializable {
	
	/**
	 * @var int
	 */
	private $user_id;
	
	/**
	 * @var string
	 */
	private $hash;
	
	/**
	 * @var int
	 */
	private $step;
	
	/**
	 * @var string
	 */
	private $context;
	
	public function __construct( int $user_id, string $hash, int $step, string $context ) {
		$this->user_id = $user_id;
		$this->hash    = $hash;
		$this->step    = $step;
		$this->context = $context;
	}
	
	public function get_user_id(): int {
		return $this->user_id;
	}
	
	public function get_hash(): string {
		return $this->hash;
	}
	
	public function get_context(): string {
		return $this->context;
	}
	
	public function is_fully_authenticated(): bool {
		return Step::SECOND === $this->step;
	}
	
	/**
	 * @return array
	 */
	public function jsonSerialize(): array {
		return [
			'user_id' => $this->user_id,
			'hash'    => $this->hash,
			'step'    => $this->step,
			'context' => $this->context
		];
	}
	
	public static function createFromJson( string $json ): self {
		$object = json_decode( $json );
		
		if ( json_last_error() !== JSON_ERROR_NONE ) {
			throw new RuntimeException( json_last_error_msg() );
		}
		
		return new self( $object->user_id, $object->hash, $object->step, $object->context );
	}
}
