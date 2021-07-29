<?php
declare(strict_types=1);

namespace TwoFAS\Light\Listeners;

use TwoFAS\Light\Events\View_Response_Created;
use TwoFAS\Light\Hooks\Admin_Menu_Action;

class Add_View_Response extends Listener {

	/**
	 * @var Admin_Menu_Action
	 */
	private $admin_menu_action;
	
	public function __construct( Admin_Menu_Action $admin_menu_action ) {
		$this->admin_menu_action = $admin_menu_action;
	}
	
	public function handle( View_Response_Created $event ) {
		$this->admin_menu_action->set_response( $event->get_response() );
	}
}
