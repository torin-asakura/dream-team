<?php
declare(strict_types=1);

namespace TwoFAS\Light\Update\Migrations;

use TwoFAS\Light\Exceptions\Migration_Exception;
use TwoFAS\Light\Storage\Trusted_Devices_Storage;
use TwoFAS\Light\Update\Migration;

class Migration_2018_12_11_Move_Trusted_Devices_To_Separate_Table extends Migration {
	
	const TABLE_DEVICES = 'devices';
	
	/**
	 * @var array
	 */
	protected $tables = [
		self::TABLE_DEVICES => '{prefix}twofas_light_trusted_devices'
	];
	
	/**
	 * @param string $version
	 *
	 * @return bool
	 */
	public function supports( string $version ): bool {
		return $this->do_not_run_on_fresh_install( $version );
	}
	
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
		$users = get_users(
			[
				'meta_key' => Trusted_Devices_Storage::TWOFAS_TRUSTED_DEVICES
			] );
		
		foreach ( $users as $user ) {
			$trusted_devices = get_user_meta( $user->ID, Trusted_Devices_Storage::TWOFAS_TRUSTED_DEVICES, true );
			
			if ( empty( $trusted_devices ) || ! is_array( $trusted_devices ) ) {
				delete_user_meta( $user->ID, Trusted_Devices_Storage::TWOFAS_TRUSTED_DEVICES );
				continue;
			}
			
			foreach ( $trusted_devices as $device_id => $trusted_device ) {
				$this->db->insert(
					$this->tables[ self::TABLE_DEVICES ],
					[
						'user_id'        => $user->ID,
						'device_id'      => $device_id,
						'cookie_value'   => $trusted_device['device_key'],
						'ip'             => $trusted_device['ip'],
						'created_at'     => $trusted_device['timestamp'],
						'last_logged_in' => ( array_key_exists(
							'last_logged_in',
							$trusted_device ) ? $trusted_device['last_logged_in'] : null ),
						'user_agent'     => $trusted_device['user_agent']
					],
					[ '%d', '%s', '%s', '%s', '%d', '%d', '%s' ]
				);
			}
			
			delete_user_meta( $user->ID, Trusted_Devices_Storage::TWOFAS_TRUSTED_DEVICES );
		}
	}
}
