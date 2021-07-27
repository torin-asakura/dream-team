<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Authentication\Handler;

use TwoFAS\Light\Backup\Code as Backup_Code;
use TwoFAS\Light\Backup\Code_Checker;
use TwoFAS\Light\Events\Backup_Login_Completed;
use TwoFAS\Light\Exceptions\Backup_Codes_Not_Found_Exception;
use TwoFAS\Light\Exceptions\Invalid_Backup_Code_Exception;
use TwoFAS\Light\Helpers\Dispatcher;
use TwoFAS\Light\Http\Code;
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Http\Response\{JSON_Response, Not_Handled_Response, View_Response, Redirect_Response};
use TwoFAS\Light\Storage\Storage;
use TwoFAS\Light\Templates\Views;

class Backup_Login extends Standard_Login {
	
	/**
	 * @var Code_Checker
	 */
	private $code_checker;
	
	/**
	 * @param Request      $request
	 * @param Code_Checker $code_checker
	 * @param Storage      $storage
	 */
	public function __construct( Request $request, Code_Checker $code_checker, Storage $storage ) {
		parent::__construct( $request, $storage );
		$this->page         = Views::BACKUP_AUTHENTICATION_PAGE;
		$this->code_checker = $code_checker;
	}
	
	/**
	 * @inheritDoc
	 */
	public function supports( $user ): bool {
		if ( $this->is_wp_user( $user ) ) {
			return false;
		}
		
		return ! empty( $this->request->post( 'twofas_light_backup_code' ) );
	}
	
	/**
	 * @return JSON_Response|Not_Handled_Response|Redirect_Response|View_Response
	 *
	 * @throws Backup_Codes_Not_Found_Exception
	 * @throws Invalid_Backup_Code_Exception
	 */
	protected function check_code() {
		$backup_code = new Backup_Code( $this->request->post( 'twofas_light_backup_code' ) );
		$this->code_checker->check( $backup_code );
		
		if ( ! $backup_code->accepted() ) {
			throw new Invalid_Backup_Code_Exception( 'Invalid backup code supplied' );
		}
		
		Dispatcher::dispatch( new Backup_Login_Completed( $this->get_user_id(), $backup_code ) );
		
		return $this->json( [ 'user_id' => $this->get_user_id() ], Code::OK );
	}
}
