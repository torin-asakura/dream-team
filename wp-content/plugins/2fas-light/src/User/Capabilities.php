<?php
declare(strict_types=1);

namespace TwoFAS\Light\User;

abstract class Capabilities {
	
	const ADMIN = 'manage_options';
	const USER  = 'read';
}
