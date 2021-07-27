<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Hooks;

use InvalidArgumentException;
use DI\DependencyException;
use DI\FactoryInterface;
use DI\NotFoundException;
use TwoFAS\Light\Helpers\URL;
use TwoFAS\Light\Http\Action_Index;
use TwoFAS\Light\Storage\User_Storage;
use TwoFAS\Light\User\Capabilities;
use WP_User;

class Add_Custom_Column_Filter implements Hook_Interface {
	
	/**
	 * @var FactoryInterface
	 */
	private $user_factory;
	
	/**
	 * @param FactoryInterface $user_factory
	 */
	public function __construct( FactoryInterface $user_factory ) {
		$this->user_factory = $user_factory;
	}
	
	public function register_hook() {
		add_filter( 'user_row_actions', [ $this, 'user_row_actions' ], 10, 2 );
		add_filter( 'manage_users_columns', [ $this, 'manage_users_columns' ] );
		add_filter( 'manage_users_custom_column', [ $this, 'manage_users_custom_column' ], 10, 3 );
	}
	
	/**
	 * @param array   $actions
	 * @param WP_User $user
	 *
	 * @return array
	 *
	 * @throws DependencyException
	 * @throws NotFoundException
	 */
	public function user_row_actions( array $actions, WP_User $user ): array {
		/** @var User_Storage $user_storage */
		$user_storage = $this->user_factory->make( User_Storage::class );
		if ( current_user_can( Capabilities::ADMIN ) && $user_storage->get_user_id() === $user->ID ) {
			$url             = URL::create( Action_Index::TWOFAS_PERSONAL_SETTINGS );
			$actions['2fas'] = '<a href="' . esc_url( $url ) . '" aria-label="' . esc_attr(
					__( 'Edit your 2FAS settings', '2fas' ) ) . '">2FAS</a>';
		}
		
		return $actions;
	}
	
	public function manage_users_columns( array $columns ): array {
		if ( current_user_can( Capabilities::ADMIN ) ) {
			$columns['twofas_2fa_status'] = '2FAS';
		}
		
		return $columns;
	}
	
	/**
	 * @param string|null $value
	 * @param string      $column_name
	 * @param int         $user_id
	 *
	 * @return string|null
	 *
	 * @throws InvalidArgumentException
	 * @throws DependencyException
	 * @throws NotFoundException
	 */
	public function manage_users_custom_column( $value, string $column_name, int $user_id ) {
		switch ( $column_name ) {
			case 'twofas_2fa_status':
				/** @var User_Storage $user_storage */
				$user_storage = $this->user_factory->make( User_Storage::class );
				$user_storage->set_wp_user( new WP_User( $user_id ) );
				$value = $user_storage->is_totp_enabled() ? __( 'Active', '2fas' ) : __( 'Inactive', '2fas' );
				
				break;
		}
		
		return $value;
	}
}
