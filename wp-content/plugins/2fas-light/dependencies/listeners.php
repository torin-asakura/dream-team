<?php
declare( strict_types=1 );

use Psr\Container\ContainerInterface;
use TwoFAS\Light\Events\{
	Second_Step_Rendered,
	Totp_Configuration_Completed,
	View_Response_Created,
	Standard_Login_Completed,
	Backup_Login_Completed,
	Trusted_Device_Login_Completed,
	Authentication_Expired,
	Login_Attempt_Failed,
	Login_Attempts_Reached,
	Totp_Configuration_Removed
};
use TwoFAS\Light\Listeners\{
	Add_View_Response,
	Remove_Trusted_Devices,
	Add_Totp_Configuration,
	Listener_Provider,
	Resolve_Conflicting_Scripts,
	Update_Secret_Date,
	Authenticate_User_Fully,
	Update_Trusted_Device_Login_Time,
	Reduce_Authentication_Attempts,
	Close_Authentication,
	Block_User,
	Update_Backup_Codes,
	Remove_Totp_Configuration,
	Remove_Backup_Codes
};

return [
	'events'                 => [
		Totp_Configuration_Completed::class => [
			Add_Totp_Configuration::class,
			Update_Secret_Date::class,
		],
		Totp_Configuration_Removed::class => [
			Remove_Totp_Configuration::class,
			Remove_Trusted_Devices::class,
			Remove_Backup_Codes::class
		],
		View_Response_Created::class        => [
			Add_View_Response::class
		],
		Second_Step_Rendered::class         => [
			Resolve_Conflicting_Scripts::class
		],
		Standard_Login_Completed::class => [
			Authenticate_User_Fully::class
		],
		Backup_Login_Completed::class => [
			Update_Backup_Codes::class,
			Authenticate_User_Fully::class
		],
		Trusted_Device_Login_Completed::class => [
			Authenticate_User_Fully::class,
			Update_Trusted_Device_Login_Time::class
		],
		Authentication_Expired::class => [
			Close_Authentication::class
		],
		Login_Attempt_Failed::class => [
			Reduce_Authentication_Attempts::class
		],
		Login_Attempts_Reached::class => [
			Block_User::class,
			Close_Authentication::class
		]
	],
	Listener_Provider::class => DI\factory(
		function ( ContainerInterface $c ) {
			$listener_provider = new Listener_Provider( $c );
			$listener_provider->add_events( $c->get( 'events' ) );
			
			return $listener_provider;
		} )
];
