<?php
/**
 * Plugin Name:       2FAS Prime — Two Factor Authentication
 * Plugin URI:        https://wordpress.org/plugins/2fas-light/
 * Description:       Free, simple and secure token-based authentication for your WordPress. No registration required.
 * Version:           3.3
 * Requires PHP:      7.2
 * Requires at least: 5.0
 * Author:            Two Factor Authentication Service Inc.
 * Author URI:        https://2fas.com
 * License:           GPL2
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Network:           true
 * Text Domain:       2fas-light
 * Domain Path:       /languages
 */

defined( 'ABSPATH' ) or die();

function twofas_light_start() {
	require_once 'constants.php';
	require_once 'check.php';
}

function twofas_light_delete_cron_jobs() {
	wp_clear_scheduled_hook( 'twofas_light_delete_expired_sessions' );
}

function twofas_light_load_plugin_textdomain() {
	load_plugin_textdomain( '2fas-light', false, basename( dirname( __FILE__ ) ) . '/languages/' );
}

register_deactivation_hook( __FILE__, 'twofas_light_delete_cron_jobs' );

add_action( 'init', 'twofas_light_start' );
add_action( 'plugins_loaded', 'twofas_light_load_plugin_textdomain' );
