<?php
declare(strict_types=1);

namespace TwoFAS\Light\Core;

use Exception;
use TwoFAS\Light\Factories\Response_Factory;
use TwoFAS\Light\Hooks\Hook_Handler;
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Http\Response\{JSON_Response, Redirect_Response, View_Response};
use TwoFAS\Light\Update\Updater;

class Plugin {

	/**
	 * @var string
	 */
	public static $env = 'prod';

	/**
	 * @var Response_Factory
	 */
	private $response_factory;

	/**
	 * @var Request
	 */
	private $request;

	/**
	 * @var Hook_Handler
	 */
	private $hook_handler;

	/**
	 * @var Updater
	 */
	private $updater;

	/**
	 * @param Response_Factory $response_factory
	 * @param Request          $request
	 * @param Hook_Handler     $hook_handler
	 * @param Updater          $updater
	 */
	public function __construct(
		Response_Factory $response_factory,
		Request $request,
		Hook_Handler $hook_handler,
		Updater $updater
	) {
		$this->response_factory = $response_factory;
		$this->request          = $request;
		$this->hook_handler     = $hook_handler;
		$this->updater          = $updater;
	}

	public function run() {
		try {
			if ( $this->updater->should_plugin_be_updated() ) {
				$this->updater->update_plugin();
			}

			$response = $this->response_factory->create_response( $this->request );
		} catch ( Exception $e ) {
			$response = $this->response_factory->create_error_response( $e );
		}

		if ( $response instanceof JSON_Response ) {
			$response->send_json();
		}

		if ( $response instanceof Redirect_Response ) {
			$response->redirect();
		}

		if ( $response instanceof View_Response ) {
			$this->hook_handler->register_hooks();
		}
	}

	public static function terminate() {
		if ( 'prod' === self::$env ) {
			exit;
		}
	}
}
