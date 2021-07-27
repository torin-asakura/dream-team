<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Notifications;

class Notification {
	
	/**
	 * @var array
	 */
	private static $notifications = [];
	
	/**
	 * @param string $key
	 *
	 * @return string
	 */
	public static function get( string $key ): string {
		if ( empty( self::$notifications ) ) {
			self::load_notifications();
		}
		
		if ( ! isset( self::$notifications[ $key ] ) ) {
			return self::$notifications['default'];
		}
		
		return self::$notifications[ $key ];
	}
	
	private static function load_notifications() {
		self::$notifications = [
			// Plugin overall notifications
			'csrf'                          => __( 'CSRF token is invalid.', '2fas-light' ),
			'ajax'                          => __( 'Invalid AJAX request.', '2fas-light' ),
			'inconsistent-data'             => __( 'Plugin data is inconsistent.', '2fas-light' ),
			
			// Validation
			'token-invalid'                 => __( 'Wrong token entered, please try again.', '2fas-light' ),
			'backup-code-invalid'           => __( 'Wrong backup code entered, please try again.', '2fas-light' ),
			'secret-invalid'                => __( 'TOTP secret is invalid.', '2fas-light' ),
			
			// Trusted devices
			'trusted-device-removed'        => __( 'The trusted browser has been removed.', '2fas-light' ),
			
			// User enables and disables authentication method
			'totp-enabled'                  => __( 'Two-factor authentication has been enabled.', '2fas-light' ),
			'totp-disabled'                 => __( 'Two-factor authentication has been disabled.', '2fas-light' ),
			'totp-not-configured'           => __( 'TOTP is not configured.', '2fas-light' ),
			'configuration-removed'         => __( 'The configuration has been removed successfully.', '2fas-light' ),
			'configuration-remove-error'    => __( 'An error occurred while removing the 2FAS configuration.', '2fas-light' ),
			'totp-configured'               => __( 'Two-factor authentication has been configured and enabled.', '2fas-light' ),
			// General errors
			'default'                       => __( 'Something went wrong. Please try again.', '2fas-light' ),
			'db-error'                      => __( 'Something went wrong while connecting to the database.', '2fas-light' ),
			'forbidden'                     => __('You do not have sufficient permissions to perform this action.', '2fas-light'),
			'user-not-found'                => __( 'User has not been found.', '2fas-light' ),
			'user-not-logged-in'            => __( 'User is not logged in.', '2fas-light' ),
			'login-token-not-found'         => __( 'Token has not been found.', '2fas-light' ),
			'login-token-validation-failed' => __( 'Token validation failed.', '2fas-light' ),
			'template-not-found'            => __( "2FAS plugin couldn't find a template.", '2fas-light' ),
			'template-compilation'          => __( 'An error occurred in the 2FAS plugin while compiling the template.', '2fas-light' ),
			'template-rendering'            => __( 'An error occurred in the 2FAS plugin while rendering the template.', '2fas-light' ),
			'authentication-expired'        => __( 'Your session has expired. Please log in again.', '2fas-light' ),
			'authentication-limit'          => __( 'Attempts limit exceeded. Your account has been blocked for 5 minutes.', '2fas-light' ),
			'authentication-failed'         => __( 'Authentication failed. Please log in again.', '2fas-light' ),
			'totp-status-disabled'          => __( 'To do this please enable 2FA.', '2fas-light' ),
		];
	}
}
