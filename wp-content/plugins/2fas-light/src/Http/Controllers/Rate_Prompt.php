<?php
declare(strict_types=1);

namespace TwoFAS\Light\Http\Controllers;

use TwoFAS\Light\Exceptions\DateTime_Creation_Exception;
use TwoFAS\Light\Http\Code;
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Http\Response\JSON_Response;
use TwoFAS\Light\Rate_Plugin_Prompt\Rate_Plugin_Prompt;

class Rate_Prompt extends Controller {
	
	/**
	 * @var Rate_Plugin_Prompt
	 */
	private $rate_plugin_prompt;
	
	/**
	 * @param Rate_Plugin_Prompt $rate_plugin_prompt
	 */
	public function __construct( Rate_Plugin_Prompt $rate_plugin_prompt ) {
		$this->rate_plugin_prompt = $rate_plugin_prompt;
	}
	
	public function postpone( Request $request ): JSON_Response {
		try {
			if ( $this->rate_plugin_prompt->should_display() ) {
				$this->rate_plugin_prompt->restart_countdown();
			}
			
			return $this->json( [] );
		} catch ( DateTime_Creation_Exception $e ) {
			return $this->json( [], Code::INTERNAL_SERVER_ERROR );
		}
	}
	
	public function hide( Request $request ): JSON_Response {
		if ( $this->rate_plugin_prompt->should_display() ) {
			$this->rate_plugin_prompt->hide();
		}
		
		return $this->json( [] );
	}
}
