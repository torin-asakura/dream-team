<?php
declare(strict_types=1);

namespace TwoFAS\Light\Hooks;

class Hook_Handler {

	/**
	 * @var Hook_Interface[]
	 */
	private $hooks = array();
	
	public function add_hook( Hook_Interface $hook ): self {
		$this->hooks[] = $hook;

		return $this;
	}

	public function register_hooks() {
		foreach ( $this->hooks as $hook ) {
			$hook->register_hook();
		}
	}
}
