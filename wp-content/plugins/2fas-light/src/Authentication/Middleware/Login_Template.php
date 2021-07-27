<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Authentication\Middleware;

use TwoFAS\Light\Authentication\{Login_Action, Template_Data};
use TwoFAS\Light\Events\Second_Step_Rendered;
use TwoFAS\Light\Helpers\Dispatcher;
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Http\Response\{JSON_Response, View_Response};
use TwoFAS\Light\Storage\Storage;
use TwoFAS\Light\Templates\Views;

/**
 * This class sets a login template as a final response.
 */
final class Login_Template extends Middleware {
	
	/**
	 * @var Request
	 */
	private $request;
	
	/**
	 * @var Template_Data
	 */
	private $template_data;
	
	/**
	 * @var Storage
	 */
	private $storage;
	
	/**
	 * @var array
	 */
	private $login_actions = [
		'stop_login_process'      => Login_Action::STOP_LOGIN_PROCESS,
		'log_in_with_totp_code'   => Login_Action::LOG_IN_WITH_TOTP_CODE,
		'log_in_with_backup_code' => Login_Action::LOG_IN_WITH_BACKUP_CODE,
		'verify_totp_code'        => Login_Action::VERIFY_TOTP_CODE,
		'verify_backup_code'      => Login_Action::VERIFY_BACKUP_CODE
	];
	
	/**
	 * @param Request          $request
	 * @param Storage          $storage
	 * @param Template_Data    $template_data
	 */
	public function __construct( Request $request, Storage $storage, Template_Data $template_data ) {
		$this->request          = $request;
		$this->storage          = $storage;
		$this->template_data    = $template_data;
	}
	
	/**
	 * @inheritDoc
	 */
	public function handle( $user, $response = null ) {
		$user_storage = $this->storage->get_user_storage();
		
		if ( $response instanceof JSON_Response || ! $user_storage->is_wp_user_set() ) {
			return $this->run_next( $user, $response );
		}
		
		if ( ! $response instanceof View_Response ) {
			$response = new View_Response( $this->get_template() );
		}
		
		$this->template_data->set_from_request( $this->request );
		$this->template_data->set_from_storage( $this->storage );
		$this->template_data->set( 'actions', $this->login_actions );
		$this->template_data->set( 'login_form_action_url', esc_url( site_url( 'wp-login.php', 'login_post' ) ) );
		
		$data = $this->template_data->get_all();
		
		if ( array_key_exists( 'redirect_to', $data ) ) {
			$redirect_to = $data['redirect_to'];
			
			if ( force_ssl_admin() && false !== strpos( $redirect_to, 'wp-admin' ) ) {
				$redirect_to         = preg_replace( '|^http://|', 'https://', $redirect_to );
				$data['redirect_to'] = $redirect_to;
			}
		}
		
		$current_data = $response->get_data();
		
		foreach ( $data as $variable_name => $variable_value ) {
			$current_data[ $variable_name ] = $variable_value;
		}
		
		$view_response = new View_Response( $response->get_template(), $current_data );
		
		Dispatcher::dispatch( new Second_Step_Rendered( $view_response ) );
		
		return $view_response;
	}
	
	private function get_template(): string {
		if ( $this->can_display_configuration_template() ) {
			return Views::CONFIGURATION_AUTHENTICATION_PAGE;
		}
		
		if ( $this->can_display_totp_template() ) {
			return Views::TOTP_AUTHENTICATION_PAGE;
		}
		
		if ( $this->can_display_backup_codes_template() ) {
			return Views::BACKUP_AUTHENTICATION_PAGE;
		}
		
		return Views::TOTP_AUTHENTICATION_PAGE;
	}
	
	private function can_display_configuration_template(): bool {
		$user_storage    = $this->storage->get_user_storage();
		$options_storage = $this->storage->get_options();
		
		return ! $user_storage->is_totp_enabled()
		       && ! $user_storage->is_totp_configured()
		       && $options_storage->has_obligatory_role( $user_storage->get_roles() );
	}
	
	private function can_display_totp_template(): bool {
		return $this->request->is_login_action_equal_to( '' )
		       || $this->request->is_login_action_equal_to( Login_Action::LOG_IN_WITH_TOTP_CODE )
		       || $this->request->is_login_action_equal_to( Login_Action::VERIFY_TOTP_CODE );
	}
	
	private function can_display_backup_codes_template(): bool {
		return ( $this->request->is_login_action_equal_to( Login_Action::LOG_IN_WITH_BACKUP_CODE )
		         || $this->request->is_login_action_equal_to( Login_Action::VERIFY_BACKUP_CODE ) )
		       && $this->storage->get_user_storage()->have_backup_codes();
	}
}
