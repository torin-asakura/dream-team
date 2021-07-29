<?php
declare(strict_types=1);

namespace TwoFAS\Light\Http\Middleware;

use TwoFAS\Light\Helpers\Flash;
use TwoFAS\Light\Http\Action_URL;
use TwoFAS\Light\Http\Request\Request;

class Check_Ajax extends Middleware {

	/**
	 * @var Request
	 */
	private $request;

	/**
	 * @var Flash
	 */
	private $flash;
	
	public function __construct( Request $request, Flash $flash ) {
		$this->request = $request;
		$this->flash   = $flash;
	}

	/**
	 * @inheritDoc
	 */
	public function handle() {
		if ( ! $this->check() ) {
			$this->flash->add_message( 'error', 'ajax' );

			return $this->redirect( new Action_URL( $this->request->page() ) );
		}

		return $this->next->handle();
	}

	private function check(): bool {
		return $this->request->is_ajax();
	}
}
