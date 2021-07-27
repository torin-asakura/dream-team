/* global twofas_light */

(function( $ ) {
	// ----------- TRANSLATIONS ------------
	const { __, _x, _n, sprintf } = wp.i18n;

	// ------------- CONFIG ----------------
	var toastTime = 5000;

	// ------------- VARIABLES -------------
	var reloadQRBtn                  = $( '.js-twofas-reload-qr-button' ),
	    QRimage                      = $( '.js-twofas-qr-image' ),
	    privateKeyValue              = $( '.js-twofas-private-key-value' ),
	    showPrivateKeyLink           = $( '.js-twofas-show-private-key' ),
	    notificationsWrapper         = $( '.js-twofas-light-notifications' ),
	    totpSecretInput              = $( '.js-twofas-light-totp-secret-input' ),
	    totpForm                     = $( '.js-twofas-light-totp-form' ),
	    totpFormSubmitBtn            = $( '.js-twofas-totp-submit' ),
	    totpToken                    = $( '#twofas-light-totp-token' ),
	    totpConfigurationSubmitBtn   = $( '.js-twofas-totp-login-configuration-submit' ),
	    backupCode                   = $( '#twofas_light_backup_code' ),
	    wpNonce                      = $( '#_wpnonce' ),
	    trustedDevicesBox            = $( '.js-twofas-light-trusted-devices-box' ),
	    trustedDevicesWrapper        = $( '.js-twofas-light-trusted-devices-wrapper' ),
	    trustedDeviceRemoveModal     = $( '.js-twofas-modal-remove-trusted-device' ),
	    trustedDeviceRemoveConfirm   = $( '.js-twofas-remove-trusted-device-confirm' ),
	    trustedHowToLink             = $( '.js-twofas-how-to-add-a-new-device' ),
	    modalTrustedHowTo            = $( '.js-twofas-modal-how-to-add-a-new-device' ),
	    totpSwitch                   = $( '.js-twofas-totp-switch' ),
	    loginForm                    = $( '#twofas-light-loginform' ),
	    wpSubmit                     = $( '#wp-submit' ),
	    configSubheader              = $( '.js-twofas-configuration-subheader' ),
	    configWrapper                = $( '.js-twofas-config-wrapper' ),
	    configuredBox                = $( '.js-twofas-configured-box' ),
	    configuredBoxContent         = $( '.js-twofas-configured-box-content' ),
	    configuredBoxDate            = $( '.js-twofas-light-date-content' ),
	    removeConfiguration          = $( '.js-twofas-remove-config' ),
	    removeBarForm                = $( '.js-twofas-remove-bar-form' ),
	    configBar                    = $( '.js-twofas-config-bar' ),
	    modalPrivateKey              = $( '.js-twofas-modal-private-key' ),
	    modalConfirmation            = $( '.js-twofas-modal-confirmation' ),
	    modalCancel                  = $( '.js-twofas-modal-cancel' ),
	    modalConfirm                 = $( '.js-twofas-confirmation-confirm' ),
	    modalRemoveConfig            = $( '.js-twofas-modal-remove-config' ),
	    modalRemoveConfirm           = $( '.js-twofas-remove-config-confirm' ),
	    ratePromptBox                = $( '.js-twofas-rate-plugin-prompt-box' ),
	    closeRatePromptButton        = $( '.js-twofas-close-rate-prompt' ),
	    postponeRatePromptButton     = $( '.js-twofas-postpone-rate-prompt' ),
	    stepCancelButton             = $( '.js-twofas-step-cancel-btn' ),
	    stepBackButton               = $( '.js-twofas-step-back-btn' ),
	    stepContinueButton           = $( '.js-twofas-step-continue-btn' ),
	    stepCard                     = $( '.js-twofas-step-card' ),
	    stepBreadcrumb               = $( '.js-twofas-step-breadcrumb' ),
	    backupCodesBox               = $( '.js-twofas-backup-codes-box' ),
	    backupCodesGenerateBtn       = $( '.js-twofas-generate-backup-codes' ),
	    modalBackupCodes             = $( '.js-twofas-modal-backup-codes' ),
	    modalBackupCodesConfirm      = $( '.js-twofas-modal-backup-codes-confirm' ),
	    regenerateBackupCodesConfirm = $( '.js-twofas-regenerate-backup-codes-confirm' ),
	    downloadBackupCodesBtn       = $( '.twofas-download-codes-link' ),
	    dangerZoneBox                = $( '.js-twofas-danger-zone-box' ),
	    totpToggleModal              = $( '.js-twofas-modal-toggle-totp' ),
	    totpToggleConfirm            = $( '.js-twofas-toggle-totp-confirm' ),
	    totpToggleCancel             = $( '.js-twofas-toggle-totp-cancel' ),
	    howBackupCodesWorks          = $( '.js-twofas-how-backup-codes-works' ),
	    modalHowBackupCodesWorks     = $( '.js-twofas-modal-backup-log-in' ),
	    modalLoginConfigurationStep  = $( '.js-twofas-modal-login-configuration-step'),
	    roleCheckBox                 = $('input[type="checkbox"][name^="role"]'),
	    rolesSaveButton              = $('.js-twofas-save-roles'),
	    rolesCancelButton            = $('.js-twofas-cancel-roles'),
	    roleState          = {
		    initialized: false,
		    current: null,
		    changed: null,
		    update: function( roles ) {
			    this.current = roles;
		    },
		    change: function ( roles ) {
		    	if (JSON.stringify(roles) !== JSON.stringify(this.current)) {
				    this.changed = roles;
			    } else {
				    this.changed = null;
			    }
		    }
	    },

	    currentStep                  = 1,
	    modalOpened                  = false,
	    modalOpenedName              = '',
	    trustedDeviceObj             = null,
	    trustedDeviceDeviceID        = null;

		stepBreadcrumb.each(function() {
			if ($( this ).hasClass('active')) {
				currentStep = $(this).data('step');
			}
		});

	// ------------- EVENTS -------------
	showPrivateKeyLink.on( 'click', showPrivateKey);
	reloadQRBtn.on( 'click', reloadQRCode);
	if (totpConfigurationSubmitBtn.length >0) {
		totpConfigurationSubmitBtn.on( 'click', submitLoginConfigurationTOTP);
	} else {
		totpFormSubmitBtn.on( 'click', submitTOTP);
		totpForm.on( 'submit', submitTOTP);
	}
	totpToken.on('keypress', validateInput);
	totpToken.on('keyup', validateToken);
	loginForm.on( 'submit', disableWPSubmit);
	removeConfiguration.on( 'click', showRemoveConfigModal);
	modalRemoveConfirm.on( 'click', removeConfig);
	modalCancel.on( 'click', modalCancelHandle);
	modalConfirm.on( 'click', reloadQRCodeConfirmed);
	closeRatePromptButton.on( 'click', closeRatePluginPrompt);
	postponeRatePromptButton.on( 'click', postponeRatePluginPrompt);
	trustedDeviceRemoveConfirm.on( 'click', removeTrustedDevice);
	trustedHowToLink.on( 'click', openHowToTrustedModal);
	backupCode.on( 'keyup', format_backup_code);
	stepContinueButton.on( 'click', nextStep);
	stepBackButton.on( 'click', previousStep);
	backupCodesGenerateBtn.on( 'click', generateBackupCodes);
	regenerateBackupCodesConfirm.on( 'click', function (event) {
		closeModalConfirmation();
		generateBackupCodes(event);
	});
	totpToggleConfirm.on( 'click', disableTotp);
	totpToggleCancel.on( 'click', cancelDisablingTotp );
	howBackupCodesWorks.on( 'click', showHowBackupCodesWorksModal);
	roleCheckBox.on( 'click', changeRoles);

	$( document ).on( 'click', '.js-twofas-remove-trusted-device', openRemoveTrustedDeviceModal );
	$( document ).on( 'click', '.js-twofas-totp-switch', totpSwitchToggle );
	$( document ).on( 'click', '.js-twofas-regenerate-backup-codes', showRegenerateBackupCodesConfirm);
	$( document ).on( 'keyup', closeModalOnEscKey);
	$( document ).on( 'mouseup', checkModalBackdropHandle);
	$( document ).on( 'ready', showLoginConfigurationStepModal);
	$( document ).on( 'ready', showCorrectStep);

	// ------------- FUNCTIONS -------------
	function setTotpSwitchEnabled () {
		totpSwitch.val( 'totp_enabled' );
		setCorrectConfiguredBoxContent( 'totp_enabled' );
		backupCodesBox.addClass('twofas-show');
		trustedDevicesBox.addClass('twofas-show');
	}

	function setTotpSwitchDisabled () {
		totpSwitch.val( 'totp_disabled' );
		setCorrectConfiguredBoxContent( 'totp_disabled' );
		backupCodesBox.removeClass('twofas-show');
		trustedDevicesBox.removeClass('twofas-show');
	}

	function setCorrectConfiguredBoxContent ( val ) {
		configuredBoxContent.each(function () {
			if ($(this).attr('data-totp-status') === val) {
				$(this).addClass('twofas-show');
			} else {
				$(this).removeClass('twofas-show');
			}
		});
	}

	function closeRatePluginPrompt () {
		ratePromptBox.addClass( 'closed' );

		jQuery.ajax( {
			url: twofas_light.ajax_url,
			type: 'post',
			data: {
				page: twofas_light.twofas_light_personal_settings,
				twofas_light_action: 'twofas-light-hide-notice',
				action: 'twofas_light_ajax',
				security: wpNonce.val()
			}
		} );
	}

	function postponeRatePluginPrompt () {
		ratePromptBox.addClass( 'closed' );

		jQuery.ajax( {
			url: twofas_light.ajax_url,
			type: 'post',
			data: {
				page: twofas_light.twofas_light_personal_settings,
				twofas_light_action: 'twofas-light-postpone-notice',
				action: 'twofas_light_ajax',
				security: wpNonce.val()
			}
		} );
	}

	function showTwofasToast ( type, content ) {
		var notification, notificationObj,
		    notificationTimeout = 0;

		notification = '<div class="twofas-light-toast js-twofas-light-toast twofas-light-toast-' + type + '">' +
			'<div class="twofas-light-toast-content"><p>' + content + '</p></div></div>';
		notificationObj = notificationsWrapper.append( notification );

		notificationObj = notificationObj.children().last();

		setTimeout( function() {
			notificationObj.addClass( 'twofas-show' );
		}, 100 );

		notificationTimeout = setTimeout( function() {
			notificationObj.removeClass( 'twofas-show' );

			setTimeout( function() {
				notificationObj.remove();
			}, 1000 );
		}, toastTime );

		notificationObj.on( 'click', function() {
			$( this ).removeClass( 'twofas-show' );
			clearTimeout( notificationTimeout );

			setTimeout( function() {
				notificationObj.remove();
			}, 1000 );
		} );
	}

	function showPrivateKey ( e ) {
		e.preventDefault();
		showModal(modalPrivateKey, '.js-twofas-modal-private-key');
	}

	function hideConfigBar () {
		configBar.removeClass('twofas-show');
	}

	function setConfiguredBoxDateToNow () {
		var currentTimestampInMs = Math.floor( Date.now() / 1000 );
		configuredBoxDate.attr( 'data-timestamp-to-format', currentTimestampInMs );
		formatLastPairedDeviceTimestamp();
	}

	function showConfiguredBox () {
		setConfiguredBoxDateToNow();

		if ( !configuredBox.hasClass( 'twofas-show' ) ) {
			configuredBox.addClass( 'twofas-show' );
		}
	}

	function closeModalConfirmation () {
		$( modalOpenedName ).animate( {
			opacity: 0
		}, 250, function() {
			$( this ).removeClass( 'twofas-show' ).css( 'opacity', '' );
			modalOpened = false;
			modalOpenedName = '';
		} );
	}

	function checkModalBackdropHandle ( e ) {
		if ( modalOpened ) {
			modalBackdropHandle( e );
		}
	}

	function modalBackdropHandle ( e ) {
		var modal;

		if ( modalOpened ) {
			modal = $( modalOpenedName ).find( '.twofas-modal' ).first();

			if ( !modal.is( e.target ) && 0 === modal.has( e.target ).length ) {
				closeModalConfirmation();
			}
		}
	}

	function modalCancelHandle ( e ) {
		e.preventDefault();
		closeModalConfirmation();
	}

	function removeConfig ( e ) {
		e.preventDefault();
		removeBarForm.submit();
	}

	function closeModalOnEscKey ( e ) {
		if ( 27 === e.keyCode ) {
			closeModalConfirmation();
		}
	}

	function reloadQRCode () {
		showModal(modalConfirmation, '.js-twofas-modal-confirmation');
	}

	function reloadQRCodeConfirmed ( e ) {
		e.preventDefault();
		reloadQRBtn.prop( 'disabled', 'disabled' );

		closeModalConfirmation();

		jQuery.ajax( {
			url: twofas_light.ajax_url,
			type: 'post',
			data: {
				page: twofas_light.twofas_light_personal_settings,
				twofas_light_action: 'twofas-light-reload-qr-code',
				action: 'twofas_light_ajax',
				security: wpNonce.val()
			},
			dataType: 'json'
		} ).done( function( response ) {
			var totpSecretValue, qrCodeSrc;

			response = JSON.parse( JSON.stringify( response ) );
			totpSecretValue = response[ 'twofas_light_totp_secret' ];
			qrCodeSrc = response[ 'twofas_light_qr_code' ];

			QRimage.attr( 'src', qrCodeSrc );
			privateKeyValue.html( totpSecretValue );
			totpSecretInput.attr( 'value', totpSecretValue );
		} ).error( function() {
			showTwofasToast( 'error', sprintf(__('Couldn\'t reload QR code.%sPlease try one more time!', '2fas-light') ), '<br />');
		} ).always( function() {
			reloadQRBtn.prop( 'disabled', false );
		} );
	}

	function submitTOTP( e ) {
		var totpTokenValue  = totpToken.val(),
		    totpSecretValue = totpSecretInput.val();

		e.preventDefault();

		totpFormSubmitBtn.attr( 'disabled', true );
		stepBackButton.attr( 'disabled' , true);

		$.ajax( {
			url: twofas_light.ajax_url,
			type: 'post',
			data: {
				page: twofas_light.twofas_light_personal_settings,
				twofas_light_action: 'twofas-light-configure-totp',
				twofas_light_totp_secret: totpSecretValue,
				twofas_light_totp_token: totpTokenValue,
				action: 'twofas_light_ajax',
				security: wpNonce.val()
			},
			dataType: 'json'
		} ).done( function( response ) {
			response = JSON.parse( JSON.stringify( response ) );

			replaceTrustedDevicesTableHtml( response[ 'twofas_light_trusted_devices' ] );
			totpToken.val( '' );

			showTwofasToast( 'success', sprintf(__('Two-factor authentication%shas been configured successfully.', '2fas-light'), '<br />' ));
			hideConfigWrapper();
			showConfiguredBox();
			showDangerZone();

			if ( configBar.hasClass( 'twofas-show' ) ) {
				hideConfigBar();
			}

			setTotpSwitchEnabled();

		} ).fail( function( response ) {
			if ( response.status === 400 ) {
				totpToken.val( '' );
				showTwofasToast( 'error', sprintf(__('Token is invalid :(%sPlease try one more time.', '2fas-light'), '<br />' ));
			} else {
				showTwofasToast( 'error', sprintf(__('Something went wrong.%sPlease try one more time!', '2fas-light'), '<br />' ));
			}
		} ).always( function() {
			totpFormSubmitBtn.attr( 'disabled', false );
			stepBackButton.attr( 'disabled' , false);
			return false;
		} );
	}

	function submitLoginConfigurationTOTP( e ) {
		totpForm.action = twofas_light.login_url;
		totpForm.submit();
	}

	function openRemoveTrustedDeviceModal ( e ) {
		e.preventDefault();

		trustedDeviceObj        = $( this );
		trustedDeviceDeviceID   = $( this ).attr( 'data-device' );

		showModal(trustedDeviceRemoveModal, '.js-twofas-modal-remove-trusted-device');
	}

	function removeTrustedDevice ( e ) {
		e.preventDefault();

		closeModalConfirmation();
		trustedDeviceObj.attr( 'disabled', true );

		$.ajax( {
			url: twofas_light.ajax_url,
			type: 'post',
			data: {
				device_id: trustedDeviceDeviceID,
				page: twofas_light.twofas_light_personal_settings,
				twofas_light_action: 'twofas-light-remove-trusted-device',
				action: 'twofas_light_ajax',
				security: wpNonce.val()
			},
			dataType: 'json'
		} ).done( function( response ) {
			response = JSON.parse( JSON.stringify( response ) );

			replaceTrustedDevicesTableHtml( response[ 'twofas_light_trusted_devices' ] );

			showTwofasToast( 'success', sprintf(__('The trusted browser%shas been removed', '2fas-light'), '<br />' ));
		} ).error( function() {
			showTwofasToast( 'error', sprintf(__('Couldn\'t remove web browser/device.%sPlease try one more time!', '2fas-light'), '<br />' ));
		} ).always( function() {
			trustedDeviceObj.attr( 'disabled', false );
			trustedDeviceObj = trustedDeviceDeviceID = null;
		} );
	}

	function openHowToTrustedModal ( e ) {
		e.preventDefault();
		showModal(modalTrustedHowTo, '.js-twofas-modal-how-to-add-a-new-device');
	}

	function generateBackupCodes( e ) {
		e.preventDefault();

		$.ajax( {
			url: twofas_light.ajax_url,
			type: 'post',
			data: {
				page: twofas_light.twofas_light_personal_settings,
				twofas_light_action: 'twofas-light-generate-backup-codes',
				action: 'twofas_light_ajax',
				security: wpNonce.val()
			},
			dataType: 'json'
		} ).done( function( response ) {
			var codes = JSON.parse( JSON.stringify( response ) );
			var modal_codes = $('.twofas-modal-codes');

			downloadBackupCodesBtn.attr( 'href', 'data:text/plain;charset=utf-8,' + encodeURIComponent( codes.join( '\n' ) ) );
			modal_codes.empty();

			codes.forEach( function( code, index ) {
				modal_codes.append('<h6>'+code+'</h6>');
				$('.twofas-backup-codes-inputs').append('<input type="hidden" name="codes[' + index + ']" value="'+code+'" />');
			});

			showModal(modalBackupCodes, '.js-twofas-modal-backup-codes');
			$('.twofas-backup-codes-box-new').removeClass( 'twofas-show' );
			$('.twofas-backup-codes-box-current').addClass( 'twofas-show' );
			$('.twofas-backup-codes-box-current-stats').find('h5').html('5 backup codes left');
		} ).error( function (e) {
			if (e && e.responseJSON && e.responseJSON.error && e.responseJSON.error === 'Cannot perform this action because second factor is disabled.') {
				showTwofasToast( 'error', 'Cannot perform this action because <br />second factor is disabled.' );
			} else {
				showTwofasToast( 'error', 'Couldn\'t generate backup codes.<br />Try one more time!' );
			}
		} );
	}

	function totpSwitchToggle () {
		totpSwitch.attr( 'disabled', true );
		var action = 'twofas-light-totp-enable';

		if ( 'totp_enabled' === totpSwitch.val() ) {
			showModal(totpToggleModal, '.js-twofas-modal-toggle-totp');
			return false;
		}

		totpChangeRequest(action);
	}

	function disableTotp () {
		totpSwitch.attr( 'disabled', true );
		totpChangeRequest('twofas-light-totp-disable');
		closeModalConfirmation();
	}

	function cancelDisablingTotp ( e ) {
		modalCancelHandle(e);
		totpSwitch.attr( 'disabled', false );
	}

	function totpChangeRequest ( action ) {
		$.ajax( {
			url: twofas_light.ajax_url,
			type: 'post',
			data: {
				page: twofas_light.twofas_light_personal_settings,
				twofas_light_action: action,
				action: 'twofas_light_ajax',
				security: wpNonce.val()
			},
			dataType: 'json'
		} ).done( function( response ) {
			var status;

			response = JSON.parse( JSON.stringify( response ) );
			status = response[ 'twofas_light_totp_status' ];

			if ( 'totp_enabled' === status ) {
				setTotpSwitchEnabled();
			}

			if ( 'totp_disabled' === status ) {
				setTotpSwitchDisabled();
			}
		} ).error( function() {
			showTwofasToast( 'error', sprintf(__('Something went wrong.%sTry one more time!', '2fas-light'), '<br />' ));
		} ).always( function() {
			totpSwitch.attr( 'disabled', false );
		} );
	}

	function changeRoles() {
		var roles = {};
		roles.obligatory = getObligatoryRoles();
		roles.trusted = getTrustedBrowsersRoles();
		roleState.change(roles);
		if (roleState.changed !== null) {
			rolesCancelButton.attr( 'disabled', false );
			rolesSaveButton.attr( 'disabled', false );
			rolesSaveButton.on( 'click', saveRoles);
			rolesCancelButton.on( 'click', function( event ) {
				event.preventDefault();
				markRoles(roleState.current);
				changeRoles();
			});
		} else {
			rolesCancelButton.attr( 'disabled', true );
			rolesSaveButton.attr( 'disabled', true );
			rolesSaveButton.off( 'click' );
			rolesCancelButton.off( 'click');
		}
	}

	function saveRoles( e ) {
		e.preventDefault();
		rolesCancelButton.attr( 'disabled', true );
		rolesSaveButton.attr( 'disabled', true );
		var roles = {};
		roles.obligatory = getObligatoryRoles();
		roles.trusted = getTrustedBrowsersRoles();

		$.when(
			$.ajax( {
				url: twofas_light.ajax_url,
				type: 'post',
				data: {
					page: twofas_light.twofas_light_admin_settings,
					twofas_light_action: 'twofas-light-update-obligatory-roles',
					action: 'twofas_light_ajax',
					security: wpNonce.val(),
					obligatory_roles: roles.obligatory
				},
				dataType: 'json'
			} ),
			$.ajax( {
				url: twofas_light.ajax_url,
				type: 'post',
				data: {
					page: twofas_light.twofas_light_admin_settings,
					twofas_light_action: 'twofas-light-update-remember-browser-allowed-roles',
					action: 'twofas_light_ajax',
					security: wpNonce.val(),
					remember_browser_allowed_roles: roles.trusted
				},
				dataType: 'json'
			} )
		).then( function () {
			roleState.update( roles );
			showTwofasToast( 'success', __('Roles has been updated', '2fas-light'));
		}, function () {
			markRoles( roleState.current );
			showTwofasToast( 'error', sprintf(__('Something went wrong.%sTry one more time!', '2fas-light'), '<br />' ));
		});
	}

	function hideConfigWrapper () {
		configWrapper.removeClass( 'twofas-show' );
		configSubheader.addClass( 'twofas-hidden' );
		configuredBox.addClass( 'twofas-show' );
		backupCodesBox.addClass( 'twofas-show' );
		trustedDevicesBox.addClass( 'twofas-show' );
	}

	function showRemoveConfigModal ( e ) {
		e.preventDefault();
		showModal(modalRemoveConfig, '.js-twofas-modal-remove-config');
	}

	function replaceTrustedDevicesTableHtml ( html ) {
		trustedDevicesWrapper.html( html );
		formatTrustedDeviceAddedOnTimestamps();
	}

	function formatLastPairedDeviceTimestamp () {
		formatDateFromTimestampAttribute( configuredBoxDate.filter( '[data-timestamp-to-format]' ) );
	}

	function formatTrustedDeviceAddedOnTimestamps () {
		formatDateFromTimestampAttribute( trustedDevicesWrapper.find( 'table tbody [data-timestamp-to-format]' ) );
	}

	function formatDateFromTimestampAttribute ( jqCollection ) {
		return jqCollection.each( function() {
			var timestampInSeconds = $( this ).attr( 'data-timestamp-to-format' );

			if ( !timestampInSeconds ) {
				return;
			}

			var date = new Date( timestampInSeconds * 1000 );
			$( this ).text( convertDateToString( date ) );
		} );
	}

	function convertDateToString ( date ) {
		var yyyy  = date.getFullYear(),
		    month = padWithZeroIfOneDigit( date.getMonth() + 1 ),
		    dd    = padWithZeroIfOneDigit( date.getDate() ),
		    hh    = padWithZeroIfOneDigit( date.getHours() ),
		    min   = padWithZeroIfOneDigit( date.getMinutes() ),
		    ss    = padWithZeroIfOneDigit( date.getSeconds() );

		return yyyy + '-' + month + '-' + dd + ' ' + hh + ':' + min + ':' + ss;
	}

	function padWithZeroIfOneDigit ( number ) {
		return number < 10 ? '0' + number : number;
	}

	function format_backup_code() {
		var n = 4;
		var t = this.value.replace(/-/g, '').toUpperCase();
		var s = this.selectionStart;
		var b = t.substr(0, n);
		var m = t.substr(4, 4);
		var e = t.substr(8, 4);
		if (m.length) {
			if (e.length) {
				this.value = [b, m, e].join('-');
			} else {
				this.value = [b, m].join('-');
			}
			if (s <= n) this.setSelectionRange(s, s);
			if (s === n+1) this.setSelectionRange(s+1, s+1);
		} else this.value = b;
	}

	function validateInput( e ) {
		var pattern = /\d/;

		return pattern.test(e.key)
	}

	function validateToken() {
		var pattern = /\d{6}/;

		if (pattern.test(totpToken.val())) {
			totpFormSubmitBtn.prop('disabled', false);
		} else {
			totpFormSubmitBtn.prop('disabled', 'disabled');
		}
	}

	function showCorrectStep () {
		if (currentStep > 3) {
			currentStep = 3;
		}

		if (currentStep < 1) {
			currentStep = 1;
		}

		stepCard.each(function() { $(this).addClass('hidden'); });
		$('.js-twofas-step-card[data-step="'+ currentStep +'"]').removeClass('hidden');

		stepBreadcrumb.each(function() { $(this).removeClass('active'); });
		$('.js-twofas-step-breadcrumb[data-step="'+ currentStep +'"]').addClass('active');

		switch (currentStep) {
			case 1: {
				stepBackButton.addClass('hidden');
				stepContinueButton.removeClass('hidden');
				totpFormSubmitBtn.addClass('hidden');

				if (stepCancelButton.length > 0) {
					stepCancelButton.removeClass('hidden');
				}

				break;
			}

			case 2: {
				stepBackButton.removeClass('hidden');
				stepContinueButton.removeClass('hidden');
				totpFormSubmitBtn.addClass('hidden');

				if (stepCancelButton.length > 0) {
					stepCancelButton.addClass('hidden');
				}

				break;
			}

			case 3: {
				stepBackButton.removeClass('hidden');
				stepContinueButton.addClass('hidden');
				totpFormSubmitBtn.removeClass('hidden');
				totpToken.trigger('focus');
				validateToken();

				if (stepCancelButton.length > 0) {
					stepCancelButton.addClass('hidden');
				}

				break;
			}

			default: break;
		}
	}

	function previousStep () {
		currentStep--;
		showCorrectStep();
	}

	function nextStep () {
		currentStep++;
		showCorrectStep();
	}

	function showRegenerateBackupCodesConfirm ( e ) {
		e.preventDefault();
		showModal(modalBackupCodesConfirm, '.js-twofas-modal-backup-codes-confirm');
	}

	function showModal ( modalElement, modalClass ) {
		modalElement.addClass( 'twofas-show' ).animate( {
			opacity: 1
		}, 500, function() {
			modalOpened = true;
			modalOpenedName = modalClass;
		} );
	}

	function disableWPSubmit () {
		wpSubmit.prop( 'disabled', 'disabled' );
	}

	function showDangerZone () {
		dangerZoneBox.addClass('twofas-show');
	}

	function showHowBackupCodesWorksModal ( e ) {
		e.preventDefault();
		showModal(modalHowBackupCodesWorks, '.js-twofas-modal-backup-log-in');
	}

	function unmarkRoles() {
		$( 'input:checkbox[name^="role"]' ).each( function() {
			$( this ).prop( 'checked', false );
		} );
	}

	function markRoles( roles ) {
		unmarkRoles();

		$.each( roles.obligatory, function( index, roleKey ) {
			$( 'input:checkbox[name="role-obligatory"][value="' + roleKey + '"]' ).prop( 'checked', true );
		} );

		$.each( roles.trusted, function( index, roleKey ) {
			$( 'input:checkbox[name="role-trusted"][value="' + roleKey + '"]' ).prop( 'checked', true );
		} );
	}

	function getObligatoryRoles() {
		return $( 'input:checkbox[name="role-obligatory"]:checked' ).map( function() {
			return this.value;
		} ).get();
	}

	function getTrustedBrowsersRoles() {
		return $( 'input:checkbox[name="role-trusted"]:checked' ).map( function() {
			return this.value;
		} ).get();
	}

	function showLoginConfigurationStepModal() {
		if (modalLoginConfigurationStep.length > 0) {
			showModal(modalLoginConfigurationStep, '.js-twofas-modal-login-configuration-step');
		}
	}

	// ------------- PAGE SETUP AFTER LOAD -------------
	formatLastPairedDeviceTimestamp();
	formatTrustedDeviceAddedOnTimestamps();

	if ( !roleState.initialized ) {
		var roles = {};
		roles.obligatory = getObligatoryRoles();
		roles.trusted = getTrustedBrowsersRoles();
		roleState.current = roles;
		roleState.initialized = true;
	}

})( jQuery );
