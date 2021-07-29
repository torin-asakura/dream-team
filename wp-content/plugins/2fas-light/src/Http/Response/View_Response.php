<?php
declare(strict_types=1);

namespace TwoFAS\Light\Http\Response;

class View_Response {

	/**
	 * @var string
	 */
	private $template;

	/**
	 * @var array
	 */
	private $data;
	
	public function __construct( string $template, array $data = array() ) {
		$this->template = $template;
		$this->data     = $data;
	}
	
	public function get_template(): string {
		return $this->template;
	}
	
	public function get_data(): array {
		return $this->data;
	}
}
