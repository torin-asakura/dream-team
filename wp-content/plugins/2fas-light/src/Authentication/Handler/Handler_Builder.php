<?php
declare(strict_types=1);

namespace TwoFAS\Light\Authentication\Handler;

class Handler_Builder {

	/**
	 * @var array
	 */
	private $handlers = [];
	
	public function add_handler( Login_Handler $handler ): Handler_Builder {
		$this->handlers[] = $handler;

		return $this;
	}
	
	public function build(): Login_Handler {
		$first = array_shift( $this->handlers );

		array_reduce( $this->handlers, function ( Login_Handler $current, Login_Handler $next ) {
			$current->then( $next );

			return $next;
		}, $first );

		return $first;
	}
}
