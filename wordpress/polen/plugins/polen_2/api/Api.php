<?php
namespace Polen\Api;

use Polen\Api\Api_B2B;
use Polen\Api\b2b\Account\Api_Recover_Password;
use Polen\Api\Orders\Api_Orders;
use Polen\Api\Talent\{Api_Talent_Dashboard, Api_Talent_My_Account, Api_Talent_Order, Api_Talent_Payment};
use Polen\Api\b2b\Checkout\Api_Checkout;

class Api {

    public function __construct( bool $static = false )
    {
        if( $static ) {
            new Api_Routers( true );
            add_action( 'rest_api_init', array( $this, 'rest_api_includes' ) ); // add to construct class
        }
    }

    // create this method
    public function rest_api_includes() {
        if ( empty( WC()->cart ) ) {
            WC()->frontend_includes();
            wc_load_cart();

            #Área do Talento Logado
            $talent_dashboard = new Api_Talent_Dashboard();
            $talent_dashboard->register_routes();

            $talent_myaccount = new Api_Talent_My_Account();
            $talent_myaccount->register_routes();

            // #Área de pedidos
            $talent_dashboard = new Api_Orders();
            $talent_dashboard->register_routes();

            $talent_order = new Api_Talent_Order();
            $talent_order->register_routes();

            $talent_payment = new Api_Talent_Payment();
            $talent_payment->register_routes();

            $contact = new Api_Contact();
            $contact->register_routes();

            #b2b
            $b2b = new Api_B2B();
            $b2b->register_routes();

            $b2b_checkout = new Api_Checkout();
            $b2b_checkout->register_routes();

            $b2b_account = new Api_Recover_Password();
            $b2b_account->register_routes();
        }
    }

}