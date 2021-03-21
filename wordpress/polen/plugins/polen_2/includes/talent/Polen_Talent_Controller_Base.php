<?php

namespace Polen\Includes\Talent;

class Polen_Talent_Controller_Base
{
    
    public function __construct()
    {
        $this->init();
        //$this->check_permission();
    }

    public function __destroy()
    {
        $this->finish();
    }

    protected function init()
    {

    }

    protected function check_permission()
    {
        require_once ABSPATH . '/wp-includes/pluggable.php';
        $user = wp_get_current_user();
        $roles = $user->roles;
        if( array_search( 'user_talent', $roles ) !== false ) {
            $is_enabled = get_user_meta( $user->ID, 'talent_enabled', true );
            if( $is_enabled ){
                return true;
            }
            return false; 
        }
        return false;
    }

    protected function finish()
    {
        wp_die();
    }

    public function talent_acceptance(){
       if( $this->check_permission() ){
            //var_dump('aqui', ( !isset( $_POST['order'] ) ));
            if( !isset( $_POST['security'] ) || !wp_verify_nonce( $_POST['security'], 'polen-order-accept-nonce' ) ) {
                wp_send_json( array( 'nonce_fail' => 1 ) );
                exit;
            }
        
            if( !isset( $_POST['order'] ) ) {
                wp_send_json( array( 'order_fail' => 1 ) );
                exit;
            }

            if( !isset( $_POST['type'] ) || ( trim( $_POST['type']) != 'accept' && trim( $_POST['type']) != 'reject' ) ){
                wp_send_json( array( 'type_fail' => 1 ) );
                exit;
            }
            
            $response = array();
            global $wpdb;

            require_once ABSPATH . '/wp-includes/pluggable.php';
            $talent_id = get_current_user_id();
            $order_id = trim($_POST['order']); 
            $type = strip_tags( $_POST['type'] );
 
            $sql_product = " SELECT * FROM {$wpdb->prefix}posts WHERE post_type = 'product' and post_author = ".$talent_id;
            $talent_products = $wpdb->get_results( $sql_product );

            
            if( is_countable( $talent_products ) && count( $talent_products ) > 0 ){
                $first_product = reset($talent_products);

                if( is_object( $first_product ) && isset( $first_product->ID ) ){
                    $sql = " SELECT order_items.order_id
                        FROM {$wpdb->prefix}woocommerce_order_items as order_items
                        LEFT JOIN {$wpdb->prefix}woocommerce_order_itemmeta as order_item_meta ON order_items.order_item_id = order_item_meta.order_item_id
                        LEFT JOIN {$wpdb->posts} AS posts ON order_items.order_id = posts.ID
                        WHERE posts.post_type = 'shop_order'
                            AND order_items.order_id = ".$order_id."
                            AND order_items.order_item_type = 'line_item'
                            AND order_item_meta.meta_key = '_product_id'
                            AND order_item_meta.meta_value = '$first_product->ID'";
                    $order_list = $wpdb->get_results( $sql );

                    if( is_countable( $order_list ) && count( $order_list ) == 0 ){
                        $response = array( 'success' => false, 'message' => 'Pedido não é desse talento' );        
                    }else{
                        $order = wc_get_order( $order_id );
                        if($order){
                            if( $type == 'accept' ){
                                $order->update_status( 'processing', '', true );
                                $response = array( 'success' => true, 'message' => 'Vídeo aceito com sucesso' ); 
                            }                            
                            if( $type == 'reject' ){
                                $order->update_status( 'cancelled', '', true );
                                $response = array( 'success' => true, 'message' => 'Vídeo rejeitado' ); 
                            }  
                           
                        }
                    }
                }else{
                    $response = array( 'success' => false, 'message' => 'Talento sem produto' );     
                }
                
            }

            echo wp_json_encode( $response );
            wp_die();
        }

    }
}