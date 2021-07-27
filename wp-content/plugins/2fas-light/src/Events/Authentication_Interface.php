<?php
declare(strict_types=1);

namespace TwoFAS\Light\Events;

use TwoFAS\Light\Authentication\Authentication;

interface Authentication_Interface extends Event_Interface {
	
	public function get_authentication(): Authentication;
}
