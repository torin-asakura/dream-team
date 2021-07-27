<?php
declare(strict_types=1);

namespace TwoFAS\Light\Helpers;

class Environment {
	
	public function get_wordpress_version(): string {
		return get_bloginfo( 'version' );
	}
	
	public function get_wordpress_app_name(): string {
		$name = get_bloginfo( 'name' );
		$name = empty( $name ) ? 'WordPress' : $name;
		$name = html_entity_decode( $name, ENT_QUOTES, 'UTF-8' );
		
		return substr( $name, 0, 255 );
	}
	
	public function get_wordpress_network_name(): string {
		return get_current_site()->site_name;
	}
	
	public function get_wordpress_app_url(): string {
		return get_site_url();
	}
	
	public function get_php_version(): string {
		return PHP_VERSION;
	}
}
