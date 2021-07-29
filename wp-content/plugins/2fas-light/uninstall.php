<?php

use TwoFAS\Light\Core\Uninstaller;
use TwoFAS\Light\Exceptions\Handler\Error_Handler;
use TwoFAS\Light\Exceptions\Handler\Null_Logger;
use TwoFAS\Light\Helpers\Time;
use TwoFAS\Light\Http\Request;
use TwoFAS\Light\Storage\Authentication_Storage;
use TwoFAS\Light\Storage\DB_Wrapper;
use TwoFAS\Light\Storage\In_Memory_Session_Storage;
use TwoFAS\Light\Storage\Options_Storage;
use TwoFAS\Light\Storage\Trusted_Devices_Storage;
use TwoFAS\Light\Storage\User_Storage;
use TwoFAS\Light\Storage\Storage;
use TwoFAS\Light\Update\Migrator;
use TwoFAS\Light\Update\Plugin_Version;

// If uninstall not called from WordPress, then exit.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

require_once 'vendor/autoload.php';
require_once 'constants.php';

/**
 * Should be done this way because we cannot use PHPDI on uninstall when another plugin use it (uninstallation fails)
 */
global $wpdb;
$db_wrapper      = new DB_Wrapper( $wpdb );
$options_storage = new Options_Storage();
$cookie          = new Request\Cookie( $_COOKIE );
$request         = new Request\Request( [], [], [], $cookie );
$storage         = new Storage(
	$cookie,
	$options_storage,
	new User_Storage( $db_wrapper ),
	new In_Memory_Session_Storage(),
	new Authentication_Storage( $db_wrapper, new Time() ),
	new Trusted_Devices_Storage( $db_wrapper, $request ) );
$plugin_version  = new Plugin_Version( $options_storage );
$migrator        = new Migrator( $db_wrapper, $plugin_version, $storage );
$error_handler   = new Error_Handler( new Null_Logger(), false );

$uninstaller = new Uninstaller( $migrator, $storage, $cookie, $error_handler );
$uninstaller->uninstall();
