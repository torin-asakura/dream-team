<?php
declare(strict_types=1);

namespace TwoFAS\Light\Http\Controllers;

use TwoFAS\Light\Events\Totp_Configuration_Completed;
use TwoFAS\Light\Exceptions\{Invalid_Totp_Token_Exception, Validation_Exception};
use TwoFAS\Light\Helpers\Dispatcher;
use TwoFAS\Light\Helpers\Trusted_Devices;
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Http\Code;
use TwoFAS\Light\Http\Response\JSON_Response;
use TwoFAS\Light\Storage\Storage;
use TwoFAS\Light\Templates\Twig;
use TwoFAS\Light\Totp\{Secret, Token, Token_Generator};

class Configure_Totp extends Controller {

	use Trusted_Devices;

	/**
	 * @var Twig
	 */
	private $twig;

	/**
	 * @var Token_Generator
	 */
	private $token_generator;

	/**
	 * @param Twig            $twig
	 * @param Storage         $storage
	 * @param Token_Generator $token_generator
	 */
	public function __construct( Twig $twig, Storage $storage, Token_Generator $token_generator ) {
		$this->twig            = $twig;
		$this->storage         = $storage;
		$this->token_generator = $token_generator;
	}

	public function configure( Request $request ): JSON_Response {
		try {
			$totp_secret = new Secret( $request->post( 'twofas_light_totp_secret' ) );
			$totp_token  = new Token( $request->post( 'twofas_light_totp_token' ) );

			$valid_tokens = $this->token_generator->generate_tokens( $totp_secret );
			$totp_token->match( $valid_tokens );

			if ( ! $totp_token->accepted() ) {
				throw new Invalid_Totp_Token_Exception( 'Invalid TOTP token supplied' );
			}

			Dispatcher::dispatch( new Totp_Configuration_Completed( $totp_secret, $totp_token ) );

			return $this->json(
				[
					'twofas_light_totp_secret'     => $totp_secret->get(),
					'twofas_light_trusted_devices' => $this->twig->render_response( $this->get_trusted_devices_template() )
				]
			);
		} catch ( Validation_Exception $e ) {
			return $this->json( [], Code::BAD_REQUEST );
		}
	}
}
