<?php
declare(strict_types=1);

use Psr\Container\ContainerInterface;
use TwoFAS\Light\Exceptions\Handler\Error_Handler_Interface;
use TwoFAS\Light\Authentication\Handler\{
	Handler_Builder,
	Login_Handler,
	Totp_Login,
	Backup_Login,
	Trusted_Device_Login,
	Login_Configuration
};
use TwoFAS\Light\Authentication\Login_Process;
use TwoFAS\Light\Authentication\Middleware\{
	Authentication_Opener,
	Blocked_Account_Check,
	External_Login,
	Jetpack_Interceptor,
	Jetpack_Redirector,
	Login_Stop,
	Login_Template,
	Middleware_Builder,
	New_Trusted_Device,
	Reauth_Request,
	Second_Factor_Status_Check,
	Spammer_Login_Check,
	SSL,
	Step_Token_Generator,
	Trusted_Devices_Allowed_Check,
	Configuration_Remover
};

return [
	'BeforeMiddleware'   => DI\factory( function ( ContainerInterface $c ) {
			$builder = new Middleware_Builder();
			$builder
				->add_middleware( $c->get( Login_Stop::class ) )
				->add_middleware( $c->get( Reauth_Request::class ) )
				->add_middleware( $c->get( Spammer_Login_Check::class ) )
				->add_middleware( $c->get( Second_Factor_Status_Check::class ) )
				->add_middleware( $c->get( Blocked_Account_Check::class ) )
				->add_middleware( $c->get( Trusted_Devices_Allowed_Check::class ) )
				->add_middleware( $c->get( Configuration_Remover::class ) )
				->add_middleware( $c->get( Jetpack_Interceptor::class ) )
				->add_middleware( $c->get( Step_Token_Generator::class ) )
				->add_middleware( $c->get( SSL::class ) )
				->add_middleware( $c->get( External_Login::class ) );
			
			return $builder->build();
		} ),
	'AfterMiddleware'    => DI\factory( function ( ContainerInterface $c ) {
			$builder = new Middleware_Builder();
			$builder
				->add_middleware( $c->get( Authentication_Opener::class ) )
				->add_middleware( $c->get( Login_Template::class ) )
				->add_middleware( $c->get( New_Trusted_Device::class ) )
				->add_middleware( $c->get( Jetpack_Redirector::class ) );
			
			return $builder->build();
		} ),
	Login_Handler::class => DI\factory( function ( ContainerInterface $c ) {
			$builder = new Handler_Builder();
			$builder
				->add_handler( $c->get( Login_Configuration::class ) )
				->add_handler( $c->get( Trusted_Device_Login::class ) )
				->add_handler( $c->get( Totp_Login::class ) )
				->add_handler( $c->get( Backup_Login::class ) );
			
			return $builder->build();
		} ),
	Login_Process::class => DI\create()
		->constructor(
			DI\get( 'BeforeMiddleware' ),
			DI\get( 'AfterMiddleware' ),
			DI\get( Login_Handler::class ),
			DI\get( Error_Handler_Interface::class )
		)
];
