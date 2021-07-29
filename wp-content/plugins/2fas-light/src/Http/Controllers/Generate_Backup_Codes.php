<?php
declare(strict_types=1);

namespace TwoFAS\Light\Http\Controllers;

use Exception;
use TwoFAS\Light\Backup\{Code, Code_Generator};
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Http\Response\JSON_Response;

class Generate_Backup_Codes extends Controller {
	
	/**
	 * @var Code_Generator
	 */
	private $code_generator;
	
	public function __construct( Code_Generator $code_generator ) {
		$this->code_generator = $code_generator;
	}
	
	/**
	 * @param Request $request
	 *
	 * @return JSON_Response
	 *
	 * @throws Exception
	 */
	public function generate( Request $request ): JSON_Response {
		return $this->json( array_map( function ( Code $code ) {
			return $code->format();
		}, $this->code_generator->generate() ), 201 );
	}
}
