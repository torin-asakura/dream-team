<?php
declare(strict_types=1);

namespace TwoFAS\Light\Update;

use TwoFAS\Light\Exceptions\Migration_Exception;

interface Rollback_Migration {
	
	/**
	 * @throws Migration_Exception
	 */
	public function down();
}
