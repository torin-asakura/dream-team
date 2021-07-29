<?php
declare(strict_types=1);

namespace TwoFAS\Light\Factories;

use LogicException;
use Psr\Container\ContainerInterface;
use TwoFAS\Light\Http\Controllers\Controller;

class Controller_Factory {

	/**
	 * @var ContainerInterface
	 */
	private $container;

	/**
	 * @param ContainerInterface $container
	 */
	public function __construct( ContainerInterface $container ) {
		$this->container = $container;
	}

	/**
	 * @param string $controller_name
	 *
	 * @return Controller
	 *
	 * @throws LogicException
	 */
	public function create( string $controller_name ): Controller {
		if ( ! $this->container->has( $controller_name ) ) {
			throw new LogicException( 'Controller name: ' . $controller_name . ' is not registered in DI container' );
		}

		return $this->container->get( $controller_name );
	}
}
