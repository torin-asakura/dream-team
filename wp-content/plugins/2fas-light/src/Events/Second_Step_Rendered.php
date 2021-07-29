<?php
declare(strict_types=1);

namespace TwoFAS\Light\Events;

use TwoFAS\Light\Http\Response\View_Response;

class Second_Step_Rendered implements Event_Interface {

	/**
	 * @var View_Response
	 */
	private $view_response;

	/**
	 * @param View_Response $view_response
	 */
	public function __construct( View_Response $view_response ) {
		$this->view_response = $view_response;
	}

	/**
	 * @return View_Response
	 */
	public function get_view_response(): View_Response {
		return $this->view_response;
	}
}
