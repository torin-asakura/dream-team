<?php
declare(strict_types=1);

namespace TwoFAS\Light\Factories;

use LogicException;
use TwoFAS\Light\Http\Middleware\Create_Response;
use TwoFAS\Light\Http\Middleware\Middleware_Bag;
use TwoFAS\Light\Http\Middleware\Middleware_Interface;

class Middleware_Factory {

	/**
	 * @var Middleware_Bag
	 */
	private $middleware_bag;

	/**
	 * @param Middleware_Bag $middleware_bag
	 */
	public function __construct( Middleware_Bag $middleware_bag ) {
		$this->middleware_bag = $middleware_bag;
	}
	
	public function create( array $middleware_keys, Create_Response $create_response ): Middleware_Interface {
		$ordered_middleware   = $this->select_middleware( $middleware_keys );
		$ordered_middleware[] = $create_response;

		return $this->create_chain( $ordered_middleware );
	}
	
	private function select_middleware( array $middleware_keys ): array {
		$all_middleware = $this->middleware_bag->get_middleware();

		return array_map( function ( $middleware_name ) use ( $all_middleware ) {
			if ( array_key_exists( $middleware_name, $all_middleware ) ) {
				return $all_middleware[ $middleware_name ];
			}

			throw new LogicException( 'Some middleware does not exist.' );
		}, $middleware_keys );
	}
	
	private function create_chain( array $ordered_middleware ): Middleware_Interface {
		$first = array_shift( $ordered_middleware );

		array_reduce( $ordered_middleware, function ( Middleware_Interface $current, Middleware_Interface $next ) {
			$current->add_next( $next );

			return $next;
		}, $first );

		return $first;
	}
}
