<?php

use TwoFAS\Light\Core\Plugin;
use TwoFAS\Light\Listeners\Listener_Provider;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once TWOFAS_LIGHT_PLUGIN_PATH . 'vendor/autoload.php';
require_once TWOFAS_LIGHT_PLUGIN_PATH . 'dependencies.php';

/** @var Listener_Provider $listener */
$listener = $twofas_container->get( Listener_Provider::class );
$listener->listen();

/** @var Plugin $plugin */
$plugin = $twofas_container->get( Plugin::class );
$plugin->run();
