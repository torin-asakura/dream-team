<?php
declare(strict_types=1);

namespace TwoFAS\Light\Update\Migrations;

use TwoFAS\Light\Update\Migration;

class Migration_2020_10_27_Remove_Old_Fields extends Migration {
	
	/**
	 * @codeCoverageIgnore
	 */
	protected function introduced(): string {
		return '3.0.0';
	}
	
	/**
	 * @inheritDoc
	 */
	public function up() {
		foreach ( get_users() as $user ) {
			delete_user_meta( $user->ID, 'twofas_light_failed_logins_count' );
		}
	}
}
