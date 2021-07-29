<?php
declare(strict_types=1);

namespace TwoFAS\Light\Exceptions\Handler;

use Exception;
use TwoFAS\Light\Http\Response\{JSON_Response, View_Response};
use WP_Error;

interface Error_Handler_Interface {
	
	public function capture_exception( Exception $e, array $options = array() ): Error_Handler_Interface;
	
	public function to_json( Exception $e ): JSON_Response;
	
	public function to_view( Exception $e ): View_Response;
	
	public function to_wp_error( Exception $e ): WP_Error;
	
	public function to_notification( Exception $e, string $css_class ): string;
}
