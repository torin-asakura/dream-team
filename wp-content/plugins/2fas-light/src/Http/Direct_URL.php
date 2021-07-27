<?php
declare(strict_types=1);

namespace TwoFAS\Light\Http;

class Direct_URL implements URL_Interface {

	/**
	 * @var string
	 */
	private $url;
	
	public function __construct( string $url ) {
		$this->url = $url;
	}
	
	public function get(): string {
		return $this->url;
	}
}
