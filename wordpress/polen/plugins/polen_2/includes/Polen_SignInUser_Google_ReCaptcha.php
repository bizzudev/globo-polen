<?php

namespace Polen\Includes;

use ReCaptcha\ReCaptcha;

class Polen_SignInUser_Google_ReCaptcha
{

    public function __construct( bool $static = false )
    {
        if( $static ) {
            $this->init();
        }
    }

    public function init()
    {
        add_action( 'polen_register_form', array( $this, 'enqueue_scripts' ) );
        add_filter( 'woocommerce_registration_errors', array( $this, 'validate_recaptcha'), 10, 3 );
    }

    public function enqueue_scripts()
    {
        wp_register_script( 'google-recaptcha', 'https://www.google.com/recaptcha/api.js', array("global-js"), '', true );
        wp_enqueue_script ( 'google-recaptcha' );
    }


    /**
     * Handler que Valida o Google Recaptcha no Registro do Usuário
     * @param \WP_Error
     * @param string
     * @param string
     */
    public function validate_recaptcha( $errors, $username, $email )
    {
        $gRecaptchaResponse = filter_input( INPUT_POST, 'g-recaptcha-response' );

        $recaptcha = new ReCaptcha( '6LdDkPMaAAAAAAZZe_Tzja79ei5aREGaFCjnv_Zn' );
        $resp = $recaptcha->setScoreThreshold(0.5)->verify($gRecaptchaResponse, $_SERVER[ 'SERVER_ADDR' ]);
        if (!$resp->isSuccess()) {
            $errors->add('registration-error', 'Você é um robô? Se não tente novamente', 'woocommerce');
        }

        return $errors;
    }
}