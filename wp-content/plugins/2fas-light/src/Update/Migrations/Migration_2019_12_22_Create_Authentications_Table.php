<?php
declare(strict_types=1);

namespace TwoFAS\Light\Update\Migrations;

use TwoFAS\Light\Exceptions\Migration_Exception;
use TwoFAS\Light\Update\{Migration, Rollback_Migration};

class Migration_2019_12_22_Create_Authentications_Table extends Migration implements Rollback_Migration {
	
	const TABLE_AUTHENTICATIONS = 'authentications';
	
	/**
	 * @var array
	 */
	protected $tables = [
		self::TABLE_AUTHENTICATIONS => '{prefix}twofas_light_authentications',
	];
	
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
		$charset_collate = $this->db->get_charset_collate();
		
		$sql = "CREATE TABLE IF NOT EXISTS {$this->tables[ self::TABLE_AUTHENTICATIONS ]} (
`id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
`user_id` bigint(20) unsigned NOT NULL,
`attempts_remaining` tinyint(1) NOT NULL,
`created_at` bigint(20) NOT NULL,
`valid_to` bigint(20) NOT NULL,
PRIMARY KEY (id),
CONSTRAINT user_unique UNIQUE (user_id)
) ENGINE = INNODB {$charset_collate}";
		
		$result = $this->db->query( $sql );
		
		if ( false === $result ) {
			throw new Migration_Exception( $this->db->get_last_error() );
		}
	}
	
	/**
	 * @throws Migration_Exception
	 */
	public function down() {
		$result = $this->db->query( 'DROP TABLE IF EXISTS ' . $this->tables[ self::TABLE_AUTHENTICATIONS ] );
		
		if ( false === $result ) {
			throw new Migration_Exception( $this->db->get_last_error() );
		}
	}
}
