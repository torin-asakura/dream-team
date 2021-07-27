<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Http;

abstract class Action_Index {
	
	const TWOFAS_ACTION_KEY        = 'twofas_light_action';
	const TWOFAS_PERSONAL_SETTINGS = 'twofas-light-personal-settings';
	const TWOFAS_ADMIN_SETTINGS    = 'twofas-light-admin-settings';
	
	const TWOFAS_ACTION_DEFAULT                               = '';
	const TWOFAS_ACTION_RELOAD_QR_CODE                        = 'twofas-light-reload-qr-code';
	const TWOFAS_ACTION_CONFIGURE_TOTP                        = 'twofas-light-configure-totp';
	const TWOFAS_ACTION_REMOVE_CONFIGURATION                  = 'twofas-light-remove-configuration';
	const TWOFAS_ACTION_TOTP_ENABLE                           = 'twofas-light-totp-enable';
	const TWOFAS_ACTION_TOTP_DISABLE                          = 'twofas-light-totp-disable';
	const TWOFAS_ACTION_REMOVE_TRUSTED_DEVICE                 = 'twofas-light-remove-trusted-device';
	const TWOFAS_ACTION_HIDE_RATE_PLUGIN_PROMPT               = 'twofas-light-hide-notice';
	const TWOFAS_ACTION_POSTPONE_RATE_PLUGIN_PROMPT           = 'twofas-light-postpone-notice';
	const TWOFAS_ACTION_GENERATE_BACKUP_CODES                 = 'twofas-light-generate-backup-codes';
	const TWOFAS_ACTION_PRINT_BACKUP_CODES                    = 'twofas-light-print-backup-codes';
	const TWOFAS_ACTION_UPDATE_OBLIGATORY_ROLES               = 'twofas-light-update-obligatory-roles';
	const TWOFAS_ACTION_UPDATE_REMEMBER_BROWSER_ALLOWED_ROLES = 'twofas-light-update-remember-browser-allowed-roles';
}
