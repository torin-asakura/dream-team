<?php
declare(strict_types=1);

namespace TwoFAS\Light\Events;

interface User_Interface extends Event_Interface {
	
	public function get_user_id(): int;
}
