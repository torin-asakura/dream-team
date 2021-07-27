<?php
declare(strict_types=1);

namespace TwoFAS\Light\Update;

use RuntimeException;
use TwoFAS\Light\Storage\Options_Storage;

class Plugin_Version {
	
	/**
	 * @var Options_Storage
	 */
	private $options;
	
	/**
	 * @param Options_Storage $options
	 */
	public function __construct( Options_Storage $options ) {
		$this->options = $options;
	}
	
	/**
	 * @return string
	 *
	 * @throws RuntimeException
	 */
	public function get_db_version(): string {
		$version = $this->options->get_twofas_light_plugin_version();
		
		if ( $version ) {
			return $version;
		}
		
		if ( $this->is_fresh_installation() ) {
			return '0';
		}
		
		if ( $this->is_initial_release() ) {
			return '1.0.0';
		}
		
		throw new RuntimeException( 'inconsistent-data' );
	}
	
	public function get_source_code_version(): string {
		return TWOFAS_LIGHT_PLUGIN_VERSION;
	}
	
	public function update_db_version() {
		$this->options->set_twofas_light_plugin_version( $this->get_source_code_version() );
	}
	
	private function is_fresh_installation(): bool {
		$not_allowed_options = [
			Options_Storage::PLUGIN_VERSION,
		];
		
		foreach ( $not_allowed_options as $option ) {
			if ( false !== get_option( $option ) ) {
				return false;
			}
		}
		
		return true;
	}
	
	private function is_initial_release(): bool {
		$required_options = [
			Options_Storage::PLUGIN_VERSION,
		];
		
		foreach ( $required_options as $option ) {
			if ( false === get_option( $option ) ) {
				return false;
			}
		}
		
		return true;
	}
}
