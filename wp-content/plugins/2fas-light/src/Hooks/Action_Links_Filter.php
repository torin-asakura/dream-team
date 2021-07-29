<?php
declare(strict_types=1);

namespace TwoFAS\Light\Hooks;

use TwoFAS\Light\Http\Action_Index;

class Action_Links_Filter implements Hook_Interface {

	public function register_hook() {
		add_filter( 'plugin_action_links_' . TWOFAS_LIGHT_PLUGIN_BASENAME, [ $this, 'add_settings_link' ] );
	}

	public function add_settings_link( array $links ): array {
		return array_merge(
			[
				'settings' => $this->create_link()
			],
			$links );
	}

	private function create_link(): string {
		$url = admin_url( 'admin.php?page=' . Action_Index::TWOFAS_PERSONAL_SETTINGS );

		return '<a href="' . $url . '">Settings</a>';
	}
}
