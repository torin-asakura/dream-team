<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Templates;

abstract class Views {
	
	// Dashboard
	const ERROR              = 'error.html.twig';
	const PRINT_BACKUP_CODES = 'includes/backup_codes_preview.html.twig';
	
	// Login page
	const TOTP_AUTHENTICATION_PAGE          = 'login_second_step.html.twig';
	const BACKUP_AUTHENTICATION_PAGE        = 'backup_login_step.html.twig';
	const CONFIGURATION_AUTHENTICATION_PAGE = 'login_configuration_step.html.twig';
}
