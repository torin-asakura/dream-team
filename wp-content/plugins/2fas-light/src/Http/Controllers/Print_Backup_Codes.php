<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Http\Controllers;

use TwoFAS\Light\Core\Plugin;
use TwoFAS\Light\Helpers\Environment;
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Templates\Twig;
use TwoFAS\Light\Templates\Views;

class Print_Backup_Codes extends Controller {
	
	/**
	 * @var Twig
	 */
	private $twig;
	
	/**
	 * @var Environment
	 */
	private $environment;
	
	public function __construct( Twig $twig, Environment $environment ) {
		$this->twig        = $twig;
		$this->environment = $environment;
	}
	
	public function print( Request $request ) {
		echo $this->twig->render_response( $this->view(
			Views::PRINT_BACKUP_CODES,
			[
				'app_name' => $this->environment->get_wordpress_app_name(),
				'codes'    => $request->post( 'codes' )
			] ) );
		
		Plugin::terminate();
	}
}
