<?php
declare(strict_types=1);

namespace TwoFAS\Light\Exceptions;

use RuntimeException;

class Validation_Exception extends RuntimeException {
	
	/**
	 * @var string
	 */
	protected $label = 'default';
	
	/**
	 * @return string
	 */
	public function get_label(): string {
		return $this->label;
	}
}
