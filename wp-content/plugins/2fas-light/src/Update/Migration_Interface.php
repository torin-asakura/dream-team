<?php
declare(strict_types=1);

namespace TwoFAS\Light\Update;

use TwoFAS\Light\Exceptions\Migration_Exception;

interface Migration_Interface {
	
	public function supports( string $version ): bool;
	
	/**
	 * @throws Migration_Exception
	 */
	public function up();
}
