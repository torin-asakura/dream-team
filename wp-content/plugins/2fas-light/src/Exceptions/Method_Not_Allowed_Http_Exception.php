<?php
declare(strict_types=1);

namespace TwoFAS\Light\Exceptions;

use Exception;

class Method_Not_Allowed_Http_Exception extends Http_Exception {

	/**
	 * @param Exception|null $previous
	 */
	public function __construct( Exception $previous = null ) {
		parent::__construct( 'Method Not Allowed', 405, $previous );
	}
}
