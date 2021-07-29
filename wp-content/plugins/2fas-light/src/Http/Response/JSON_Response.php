<?php
declare(strict_types=1);

namespace TwoFAS\Light\Http\Response;

class JSON_Response {

	/**
	 * @var array
	 */
	private $body;

	/**
	 * @var int
	 */
	private $status_code;
	
	public function __construct( array $body, int $status_code ) {
		$this->body        = $body;
		$this->status_code = $status_code;
	}
	
	public function get_body(): array {
		return $this->body;
	}
	
	public function get_status_code(): int {
		return $this->status_code;
	}

	public function send_json() {
		status_header( $this->status_code );
		wp_send_json( $this->body );
	}
}
