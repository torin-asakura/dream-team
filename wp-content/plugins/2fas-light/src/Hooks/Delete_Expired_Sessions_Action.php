<?php
declare(strict_types=1);

namespace TwoFAS\Light\Hooks;

use TwoFAS\Light\Helpers\Scheduler;
use TwoFAS\Light\Storage\Session_Storage_Interface;

class Delete_Expired_Sessions_Action implements Hook_Interface {

	/**
	 * @var Session_Storage_Interface
	 */
	private $session_storage;

	/**
	 * @var Scheduler
	 */
	private $scheduler;

	/**
	 * @param Session_Storage_Interface $session_storage
	 * @param Scheduler                 $scheduler
	 */
	public function __construct( Session_Storage_Interface $session_storage, Scheduler $scheduler ) {
		$this->session_storage = $session_storage;
		$this->scheduler       = $scheduler;
	}

	public function register_hook() {
		$hook = 'twofas_light_delete_expired_sessions';
		$this->scheduler->weekly( $hook );
		add_action( $hook, [ $this->session_storage, 'delete_expired_sessions' ] );
	}
}
