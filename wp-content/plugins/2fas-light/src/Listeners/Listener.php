<?php
declare(strict_types=1);

namespace TwoFAS\Light\Listeners;

use LogicException;

abstract class Listener {
	
	/**
	 * @param string $event
	 *
	 * @return Listener
	 *
	 * @throws LogicException
	 */
	public function listen_for( string $event ): Listener {
		if ( ! class_exists( $event ) ) {
			throw new LogicException( 'Event ' . $event . ' does not exists' );
		}
		
		add_action( $event, [ $this, 'handle' ] );
		
		return $this;
	}
}
