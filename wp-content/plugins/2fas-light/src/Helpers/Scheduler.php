<?php
declare(strict_types=1);

namespace TwoFAS\Light\Helpers;

class Scheduler {
	
	public function weekly( string $hook ) {
		$timestamp = wp_next_scheduled( $hook );
		
		if ( false === $timestamp ) {
			wp_schedule_event( time(), 'weekly', $hook );
		}
	}
}
