<?php
declare(strict_types=1);

namespace TwoFAS\Light\Templates;

use DI\DependencyException;
use DI\FactoryInterface;
use DI\NotFoundException;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use TwoFAS\Light\Http\Request\Request;
use WhichBrowser\Parser;

/**
 * @codeCoverageIgnore
 */
class Browser_Twig_Extension extends AbstractExtension {

	/**
	 * @var Request
	 */
	private $request;

	/**
	 * @var FactoryInterface
	 */
	private $factory_interface;
	
	public function __construct( Request $request, FactoryInterface $factory_interface ) {
		$this->request           = $request;
		$this->factory_interface = $factory_interface;
	}

	public function getFunctions(): array {
		return [
			new TwigFunction( 'parse_browser', [ $this, 'parse_browser' ] ),
		];
	}


	/**
	 * @param string $user_agent
	 *
	 * @return string
	 *
	 * @throws DependencyException
	 * @throws NotFoundException
	 */
	public function parse_browser( string $user_agent ): string {
		/** @var Parser $parser */
		$parser = $this->factory_interface->make( Parser::class );

		$parser->analyse( $user_agent );

		return $parser->toString();
	}
}
