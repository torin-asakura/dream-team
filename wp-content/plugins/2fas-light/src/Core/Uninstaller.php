<?php
declare(strict_types=1);

namespace TwoFAS\Light\Core;

use Exception;
use TwoFAS\Light\Exceptions\Handler\Error_Handler_Interface;
use TwoFAS\Light\Exceptions\Migration_Exception;
use TwoFAS\Light\Http\Request\Cookie;
use TwoFAS\Light\Storage\{Options_Storage, Storage, User_Storage};
use TwoFAS\Light\Update\Migrator;

class Uninstaller {
	
	/**
	 * @var Migrator
	 */
	private $migrator;
	
	/**
	 * @var Options_Storage
	 */
	private $options_storage;
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	/**
	 * @var Cookie
	 */
	private $cookie;
	
	/**
	 * @var Error_Handler_Interface
	 */
	private $error_handler;
	
	/**
	 * @param Migrator                $migrator
	 * @param Storage                 $storage
	 * @param Cookie                  $cookie
	 * @param Error_Handler_Interface $error_handler
	 */
	public function __construct(
		Migrator $migrator,
		Storage $storage,
		Cookie $cookie,
		Error_Handler_Interface $error_handler
	) {
		$this->migrator        = $migrator;
		$this->options_storage = $storage->get_options();
		$this->user_storage    = $storage->get_user_storage();
		$this->cookie          = $cookie;
		$this->error_handler   = $error_handler;
	}
	
	public function uninstall() {
		try {
			$this->rollback_migrations();
		} catch ( Exception $e ) {
			$this->error_handler->capture_exception( $e );
		}
		
		$this->options_storage->delete_wp_options();
		$this->user_storage->delete_wp_user_meta();
		$this->cookie->delete_plugin_cookies();
	}
	
	/**
	 * @throws Migration_Exception
	 */
	private function rollback_migrations() {
		$this->migrator->rollback_all();
	}
}
