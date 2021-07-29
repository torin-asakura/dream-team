<?php
declare(strict_types=1);

namespace TwoFAS\Light\Update\Migrations;

use TwoFAS\Light\Exceptions\Migration_Exception;
use TwoFAS\Light\Storage\User_Storage;
use TwoFAS\Light\Update\Migration;

class Migration_2019_01_08_Add_Last_Login_Time extends Migration {
	
	/**
	 * @codeCoverageIgnore
	 */
	protected function introduced(): string {
		return '3.0.0';
	}
	
	/**
	 * @throws Migration_Exception
	 */
	public function up() {
		$users = get_users();
		
		foreach ( $users as $user ) {
			update_user_meta( $user->ID, User_Storage::USER_LAST_LOGIN_TIME, 0 );
		}
	}
}
