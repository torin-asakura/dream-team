<?php
declare( strict_types=1 );

use Psr\Container\ContainerInterface;
use TwoFAS\Light\Hooks\{Action_Links_Filter,
	Add_Custom_Column_Filter,
	Admin_Menu_Action,
	Authenticate_Filter,
	Clean_Login_Process_Action,
	Cron_Job_Interval_Filter,
	Delete_Authentications_Action,
	Delete_Expired_Authentications_Action,
	Delete_Expired_Sessions_Action,
	Delete_Trusted_Devices_Action,
	Destroy_Session_Action,
	Enqueue_Scripts_Action,
	Enqueue_Styles_Action,
	Hook_Handler,
	Jetpack_User_Data_Action,
	Login_Footer_Action,
	Login_Notices_Filter,
	Network_Setup_Validation_Action,
	Multisite_Setup_Validation_Action,
	Regenerate_Session_Action,
	Save_Login_Time_Action,
	Setup_User_Storage_Action,
	Delete_Expired_Trusted_Devices_Action,
	Update_Option_User_Roles_Action
};

return [
	Hook_Handler::class => DI\factory(
		function ( ContainerInterface $c ) {
			$hook_handler = new Hook_Handler();
			
			$hook_handler
				->add_hook( $c->get( Enqueue_Scripts_Action::class ) )
				->add_hook( $c->get( Enqueue_Styles_Action::class ) )
				->add_hook( $c->get( Action_Links_Filter::class ) )
				->add_hook( $c->get( Cron_Job_Interval_Filter::class ) )
				->add_hook( $c->get( Delete_Expired_Sessions_Action::class ) )
				->add_hook( $c->get( Destroy_Session_Action::class ) )
				->add_hook( $c->get( Regenerate_Session_Action::class ) )
				->add_hook( $c->get( Login_Footer_Action::class ) )
				->add_hook( $c->get( Setup_User_Storage_Action::class ) )
				->add_hook( $c->get( Authenticate_Filter::class ) )
				->add_hook( $c->get( Admin_Menu_Action::class ) )
				->add_hook( $c->get( Save_Login_Time_Action::class ) )
				->add_hook( $c->get( Delete_Trusted_Devices_Action::class ) )
				->add_hook( $c->get( Delete_Expired_Trusted_Devices_Action::class ) )
				->add_hook( $c->get( Clean_Login_Process_Action::class ) )
				->add_hook( $c->get( Delete_Authentications_Action::class ) )
				->add_hook( $c->get( Delete_Expired_Authentications_Action::class ) )
				->add_hook( $c->get( Add_Custom_Column_Filter::class ) )
				->add_hook( $c->get( Multisite_Setup_Validation_Action::class ) )
				->add_hook( $c->get( Network_Setup_Validation_Action::class ) )
				->add_hook( $c->get( Jetpack_User_Data_Action::class ) )
				->add_hook( $c->get( Login_Notices_Filter::class ) )
				->add_hook( $c->get( Update_Option_User_Roles_Action::class ) );
			
			return $hook_handler;
		} )
];
