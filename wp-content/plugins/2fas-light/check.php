<?php

// platform_check.php @generated by Composer
// @edited by 2FAS
// if any requirements will be changed in composer.json just run `composer install` and copy it from platform_check.php to this file

$issues = [];
$missingExtensions = [];

if (! ( PHP_VERSION_ID >= 70200 ) ) {
	$issues[] = sprintf(
	/* translators: %s: Minimum PHP version */
		__( '2FAS Prime plugin requires a PHP version ">= 7.2.0". You are running %s.', '2fas-light' ),
		PHP_VERSION
	);
}

extension_loaded('curl') || $missingExtensions[] = 'curl';
extension_loaded('gd') || $missingExtensions[] = 'gd';
extension_loaded('gettext') || $missingExtensions[] = 'gettext';
extension_loaded('iconv') || $missingExtensions[] = 'iconv';
extension_loaded('json') || $missingExtensions[] = 'json';
extension_loaded('mbstring') || $missingExtensions[] = 'mbstring';
extension_loaded('openssl') || $missingExtensions[] = 'openssl';
extension_loaded('tokenizer') || $missingExtensions[] = 'tokenizer';

if ($missingExtensions) {
	$issues[] = sprintf(
		__('2FAS Prime plugin requires installing the following PHP extensions: %s.', '2fas-light' ),
		implode(', ', $missingExtensions)
	);
}

if ( version_compare( get_bloginfo( 'version' ), TWOFAS_LIGHT_WP_MINIMUM_VERSION, '<' )) {
	$issues[] = sprintf(
	/* translators: %s: Minimum WordPress version */
		__( '2FAS Prime plugin doesn’t support your version of WordPress. The minimum required version is %s.', '2fas-light' ),
		TWOFAS_LIGHT_WP_MINIMUM_VERSION
	);
}

if ( twofas_light_full_plugin_active() ) {
	$issues[] = __('2FAS Classic plugin is active, therefore the Prime version of the plugin is disabled. There can be only one active 2FAS plugin. You can resolve this issue by disabling 2FAS Classic plugin.', '2fas-light');
}

if( TWOFAS_LIGHT_CHECK_CONFLICTED_PLUGINS && $conflicted_plugins = twofas_light_get_conflicted_plugins()) {
	$issues[] = sprintf(
		__("2FAS Prime plugin doesn't work properly with the following plugins: <strong>%s</strong>.", '2fas-light' ),
		implode(', ', $conflicted_plugins)
	);
}

if ( $issues ) {
	if (PHP_SAPI === 'cli' || PHP_SAPI === 'phpdbg') {
		if ( ! ini_get( 'display_errors' ) ) {
			fwrite(STDERR, '2FAS Prime detected issues in your platform:' . PHP_EOL.PHP_EOL . implode(PHP_EOL, $issues) . PHP_EOL.PHP_EOL);
		}
	} else {
		$is_admin = current_user_can( 'manage_options' );
		
		if ( $is_admin ) {
			add_action( 'admin_notices', function () use ( $issues ) {
				echo twofas_light_admin_notices( $issues );
			} );
		}
	}
} else {
	require_once 'start.php';
}

/**
 * @return bool
 */
function twofas_light_full_plugin_active() {
	if ( ! function_exists( 'get_plugins' ) ) {
		require_once ABSPATH . 'wp-admin/includes/plugin.php';
	}
	
	$active_plugins = get_option( 'active_plugins' );
	$result         = false;
	
	foreach ( $active_plugins as $data ) {
		$result |= ( preg_match( '/\/twofas\.php/', $data ) === 1 );
	}
	
	return $result;
}

/**
 * @return array
 */
function twofas_light_get_conflicted_plugins() {
	$conflicted_libraries = [
		'endroid/qr-code',
		'php-di/php-di',
		'twig/twig',
		'whichbrowser/parser'
	];
	
	$paths = preg_grep( '~' . implode( '|', $conflicted_libraries ) . '~', get_included_files() );

	return array_reduce($paths, function ($result, $path) {
		if (preg_match ('~[a-zA-Z0-9_-]+(?=/includes/vendor|/vendor)~', $path, $matches) && !in_array($matches[0], $result))
			$result[] = $matches[0];
		
		return $result;
	}, []);
}

/**
 * @param array $issues
 *
 * @return string
 */
function twofas_light_admin_notices( array $issues ) {
	$messages = '';
	foreach ( $issues as $issue ) {
		$messages .= '<li>' . wp_kses( $issue, [ 'strong' => [] ] ) . '</li>';
	}
	
	return '
		<div class="error notice twofas-light-error-message">
		    <p><strong>2FAS Prime plugin requirements error</strong></p>
		    <ul class="twofas-light-error-list">
		        ' . $messages . '
		    </ul>
		    <p>
		        Plugin functionality cannot be enabled until this problem is solved.
		        Please ask your hosting provider to support 2FAS Prime plugin\'s requirements.
		    </p>
		</div>
		';
}
