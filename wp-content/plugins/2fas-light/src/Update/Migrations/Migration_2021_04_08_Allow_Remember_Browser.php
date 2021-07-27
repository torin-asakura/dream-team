<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Update\Migrations;

use WP_Roles;
use TwoFAS\Light\Update\Migration;

class Migration_2021_04_08_Allow_Remember_Browser extends Migration {
	
	/**
	 * @codeCoverageIgnore
	 */
	protected function introduced(): string {
		return '3.2.0';
	}
	
	/**
	 * @inheritDoc
	 */
	public function up() {
		$this->storage->get_options()->set_remember_browser_allowed_roles( array_keys( $this->get_wp_roles() ) );
	}
	
	private function get_wp_roles(): array {
		$wp_roles = new WP_Roles();
		
		return $wp_roles->role_names;
	}
}
