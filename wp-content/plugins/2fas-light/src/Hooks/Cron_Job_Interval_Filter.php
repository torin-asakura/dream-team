<?php
declare(strict_types=1);

namespace TwoFAS\Light\Hooks;

class Cron_Job_Interval_Filter implements Hook_Interface {

	const ONE_WEEK_IN_SECONDS = 604800;

	public function register_hook() {
		add_filter( 'cron_schedules', [ $this, 'add_weekly_interval' ] );
	}

	public function add_weekly_interval( array $schedules ): array {
		$schedules['weekly'] = [
			'interval' => self::ONE_WEEK_IN_SECONDS,
			'display'  => __( 'Once Weekly' )
		];

		return $schedules;
	}
}
