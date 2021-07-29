<?php
declare(strict_types=1);

namespace TwoFAS\Light\Http\Controllers;

use TwoFAS\Light\Exceptions\User_Not_Found_Exception;
use TwoFAS\Light\Helpers\Trusted_Devices;
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Http\Response\JSON_Response;
use TwoFAS\Light\Storage\Storage;
use TwoFAS\Light\Templates\Twig;

class Remove_Trusted_Device extends Controller {

	use Trusted_Devices;

	/**
	 * @var Twig
	 */
	private $twig;

	/**
	 * @param Twig    $twig
	 * @param Storage $storage
	 */
	public function __construct( Twig $twig, Storage $storage ) {
		$this->twig    = $twig;
		$this->storage = $storage;
	}

	/**
	 * @param Request $request
	 *
	 * @return JSON_Response
	 *
	 * @throws User_Not_Found_Exception
	 */
	public function remove( Request $request ): JSON_Response {
		$this->remove_trusted_device( $request->post( 'device_id' ) );

		return $this->json(
			[
				'twofas_light_trusted_devices' => $this->twig->render_response(
					$this->get_trusted_devices_template() )
			] );
	}

}
