<?php
declare(strict_types=1);

namespace TwoFAS\Light\Exceptions\Handler;

use Exception;

/**
 * @codeCoverageIgnore
 */
class Null_Logger implements Logger_Interface {

	public function capture_exception( Exception $e, array $options = [] ) {
		// Do nothing
	}
}
