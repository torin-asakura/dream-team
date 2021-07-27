<?php
declare(strict_types=1);

namespace TwoFAS\Light\Events;

use TwoFAS\Light\Http\Response\View_Response;

class View_Response_Created implements Event_Interface {

	/**
	 * @var View_Response
	 */
	private $response;
	
	public function __construct( View_Response $response ) {
		$this->response = $response;
	}
	
	public function get_response(): View_Response {
		return $this->response;
	}
}
