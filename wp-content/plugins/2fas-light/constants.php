<?php

$plugin_file_path = __DIR__ . '/twofas_light.php';
$plugin_path      = plugin_dir_path( $plugin_file_path );
$plugin_url       = plugin_dir_url( $plugin_file_path );
$plugin_basename  = plugin_basename( $plugin_file_path );
$assets_url       = $plugin_url . 'assets/';
$templates_path   = $plugin_path . 'assets/view/';
$admin_url        = get_admin_url();

define( 'TWOFAS_LIGHT_PLUGIN_PATH', $plugin_path );
define( 'TWOFAS_LIGHT_PLUGIN_URL', $plugin_url );
define( 'TWOFAS_LIGHT_PLUGIN_BASENAME', $plugin_basename );
define( 'TWOFAS_LIGHT_ASSETS_URL', $assets_url );
define( 'TWOFAS_LIGHT_TEMPLATES_PATH', $templates_path );
define( 'TWOFAS_LIGHT_WP_ADMIN_PATH', $admin_url );
define( 'TWOFAS_LIGHT_PLUGIN_VERSION', '3.3' );
define( 'TWOFAS_LIGHT_WP_MINIMUM_VERSION', '5.0' );
if ( ! defined( 'TWOFAS_LIGHT_CHECK_CONFLICTED_PLUGINS' ) ) {
	define( 'TWOFAS_LIGHT_CHECK_CONFLICTED_PLUGINS', true );
}
