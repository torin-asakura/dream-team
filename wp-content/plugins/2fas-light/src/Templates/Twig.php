<?php
declare(strict_types=1);

namespace TwoFAS\Light\Templates;

use Exception;
use Twig\Environment;
use Twig\Error\{LoaderError, RuntimeError, SyntaxError};
use TwoFAS\Light\Exceptions\Handler\Error_Handler_Interface;
use TwoFAS\Light\Http\Response\View_Response;

class Twig {
	
	/**
	 * @var Environment
	 */
	private $twig;
	
	/**
	 * @var Error_Handler_Interface
	 */
	private $error_handler;
	
	/**
	 * @param Environment             $twig
	 * @param Error_Handler_Interface $error_handler
	 */
	public function __construct( Environment $twig, Error_Handler_Interface $error_handler ) {
		$this->twig          = $twig;
		$this->error_handler = $error_handler;
	}
	
	public function render_view( string $template_name, array $params = [] ): string {
		try {
			return $this->try_render( $template_name, $params );
		} catch ( Exception $e ) {
			return $this->error_handler->capture_exception( $e )->to_notification( $e, 'notice notice-error error' );
		}
	}
	
	public function render_response( View_Response $response ): string {
		return $this->render_view( $response->get_template(), $response->get_data() );
	}
	
	/**
	 * @param string $template_name
	 * @param array  $params
	 *
	 * @return string
	 *
	 * @throws LoaderError
	 * @throws RuntimeError
	 * @throws SyntaxError
	 */
	public function try_render( string $template_name, array $params = [] ): string {
		$params['twofas_light_assets_url']  = TWOFAS_LIGHT_ASSETS_URL;
		$params['twofas_light_plugin_path'] = TWOFAS_LIGHT_PLUGIN_URL;
		$params['twofas_light_admin_path']  = TWOFAS_LIGHT_WP_ADMIN_PATH;
		$params['login_url']                = wp_login_url();
		$params['nonce_field']              = wp_nonce_field(
			'twofas_light_ajax',
			$name = '_wpnonce',
			$referer = false,
			$echo = false
		);
		
		return $this->twig->render( $template_name, $params );
	}
}
