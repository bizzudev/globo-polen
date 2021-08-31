<?php

namespace Polen\Includes;

if( ! defined( 'ABSPATH') ) {
    die( 'Silence is golden.' );
}

if ( ! class_exists( 'WC_Email' ) ) {
	return;
}

class Polen_WC_Payment_Approved extends \WC_Email {

	/**
	 * Email do talento
	 * String
	 */
	public $recipient_talent;

	/**
	 * Assunto do Email do talento
	 * String
	 */
	public $subject_talent;

	private $social_template_html;
	private $social_template_plain;

	/**
	 * Assunto do Email do talento
	 * String
	 */
	public $subject_social;

    public function __construct() {
        $this->id          = 'wc_payment_approved';
		$this->title       = __( 'Pagamento Aprovado', 'polen' );
		$this->description = __( 'E-mail que será enviado ao usuário quando o pagamento do pedido é aprovado.', 'polen' );
		$this->customer_email = true;
		$this->heading     = __( 'Pagamento Aprovado', 'polen' );
		$this->heading_ep     = 'Vídeo-autógrafo';
		$this->heading_talent_social = __( 'Doação recebida', 'polen' );

		$this->subject     = sprintf( _x( '[%s] Pagamento Aprovado', 'E-mail que será enviado ao usuário quando o pagamento do pedido é aprovado', 'polen' ), '{blogname}' );
    
		$this->talent_template_html  = 'emails/Polen_WC_Payment_Approved_Talent.php';
		$this->talent_social_template_html  = 'emails/Polen_WC_Payment_Approved_Talent_social.php';
		$this->talent_template_plain = 'emails/plain/Polen_WC_Payment_Approved_Talent.php';
		$this->social_template_html  = 'emails/Polen_WC_Payment_Approved_social.php';
		$this->ep_template_html  = 'emails/video-autografo/Polen_WC_Payment_Approved.php';
		$this->social_template_plain = 'emails/plain/Polen_WC_Payment_Approved_social.php';
		$this->social_template_plain = 'emails/plain/Polen_WC_Payment_Approved_social.php';
		$this->template_html  = 'emails/Polen_WC_Payment_Approved.php';
		$this->template_plain = 'emails/plain/Polen_WC_Payment_Approved.php';
		$this->template_base  = TEMPLATEPATH . 'woocommerce/';

		$this->subject_talent = 'Você está a um passo de receber mais R$!';
		$this->subject_talent_social = 'Recebemos mais uma doação para o Criança Esperança!';
		$this->subject_social = 'Obrigado por ajudar o Criança Esperança.';
		$this->subject_ep = 'Vídeo-autógrafo solicitado.';
    
		add_action( 'woocommerce_order_status_changed', array( $this, 'trigger' ) );

		parent::__construct();
    }

    public function trigger( $order_id ) {
		$this->object = wc_get_order( $order_id );
		if( $this->object->has_status( 'payment-approved') ) {
			if ( version_compare( '3.0.0', WC()->version, '>' ) ) {
				$order_email = $this->object->billing_email;
			} else {
				$order_email = $this->object->get_billing_email();
			}

			$this->recipient = $order_email;

			if ( ! $this->is_enabled() || ! $this->get_recipient() ) {
				return;
			}
			$order_is_social = social_order_is_social( $this->object );
			$order_is_ep = event_promotional_order_is_event_promotional( $this->object );
			if( $order_is_social ) {
				$this->send( $this->get_recipient(), $this->get_subject_social(), $this->get_content_social(), $this->get_headers(), $this->get_attachments() );
			} elseif( $order_is_ep ) {
				$this->send( $this->get_recipient(), $this->get_subject_ep(), $this->get_content_ep(), $this->get_headers(), $this->get_attachments() );
			} else {
				$this->send( $this->get_recipient(), $this->get_subject(), $this->get_content(), $this->get_headers(), $this->get_attachments() );
			}

			/**
			 * Envio de e-mail para o Talento
			 */
			foreach ( $this->object->get_items() as $item_id => $item ) {
				$product_id = $item->get_product_id();
			}
			$Polen_Talent = new Polen_Talent();
			$talent = $Polen_Talent->get_talent_from_product( $product_id );
			$this->recipient_talent = $talent->email;
			
			if( ! $order_is_social ) {
				$this->send( $this->get_recipient_talent(), $this->get_subject_talent(), $this->get_content_talent(), $this->get_headers(), $this->get_attachments() );
			} else {
				$this->send( $this->get_recipient_talent(), $this->get_subject_talent_social(), $this->get_content_talent_social(), $this->get_headers(), $this->get_attachments() );
			}
		}
	}

	public function get_recipient_talent()
	{
		return $this->recipient_talent;
	}

	public function get_subject_talent()
	{
		return $this->subject_talent;
	}

	public function get_subject_talent_social()
	{
		return $this->subject_talent_social;
	}

	public function get_subject_social()
	{
		return $this->subject_social;
	}

	public function get_subject_ep()
	{
		return $this->subject_ep;
	}

	public function get_content_talent() {
		$this->sending = true;

		if ( 'plain' === $this->get_email_type() ) {
			$email_content = wordwrap( preg_replace( $this->plain_search, $this->plain_replace, wp_strip_all_tags( $this->get_content_talent_plain() ) ), 70 );
		} else {
			$email_content = $this->get_content_talent_html();
		}

		return $email_content;
	}

	public function get_content_talent_social() {
		$this->sending = true;

		if ( 'plain' === $this->get_email_type() ) {
			$email_content = wordwrap( preg_replace( $this->plain_search, $this->plain_replace, wp_strip_all_tags( $this->get_content_talent_plain() ) ), 70 );
		} else {
			$email_content = $this->get_content_talent_social_html();
		}

		return $email_content;
	}

	public function get_content_social() {
		$this->sending = true;

		if ( 'plain' === $this->get_email_type() ) {
			$email_content = wordwrap( preg_replace( $this->plain_search, $this->plain_replace, wp_strip_all_tags( $this->get_content_talent_plain() ) ), 70 );
		} else {
			$email_content = $this->get_content_social_html();
		}

		return $email_content;
	}

	public function get_content_ep() {
		$this->sending = true;
		$email_content = $this->get_content_ep_html();
		return $email_content;
	}

    public function get_content_talent_html() {
		return wc_get_template_html( $this->talent_template_html, array(
			'order'         => $this->object,
			'email_heading' => $this->get_heading(),
			'sent_to_admin' => true,
			'plain_text'    => false,
			'email'			=> $this
		), '', $this->template_base );
	}

	public function get_content_talent_social_html() {
		return wc_get_template_html( $this->talent_social_template_html, array(
			'order'         => $this->object,
			'email_heading' => $this->get_heading_social(),
			'sent_to_admin' => true,
			'plain_text'    => false,
			'email'			=> $this
		), '', $this->template_base );
	}

	public function get_content_social_html() {
		return wc_get_template_html( $this->social_template_html, array(
			'order'         => $this->object,
			'email_heading' => $this->get_heading(),
			'sent_to_admin' => true,
			'plain_text'    => false,
			'email'			=> $this
		), '', $this->template_base );
	}

	public function get_content_ep_html() {
		return wc_get_template_html( $this->ep_template_html, array(
			'order'         => $this->object,
			'email_heading' => $this->get_heading(),
			'sent_to_admin' => true,
			'plain_text'    => false,
			'email'			=> $this
		), '', $this->template_base );
	}

	public function get_content_talent_plain() {
		return wc_get_template_html( $this->talent_template_plain, array(
			'order'         => $this->object,
			'email_heading' => $this->get_heading(),
			'sent_to_admin' => true,
			'plain_text'    => true,
			'email'			=> $this
		), '', $this->template_base );
	}

    public function get_content_html() {
		return wc_get_template_html( $this->template_html, array(
			'order'         => $this->object,
			'email_heading' => $this->get_heading(),
			'sent_to_admin' => true,
			'plain_text'    => false,
			'email'			=> $this
		), '', $this->template_base );
	}

	public function get_content_plain() {
		return wc_get_template_html( $this->template_plain, array(
			'order'         => $this->object,
			'email_heading' => $this->get_heading(),
			'sent_to_admin' => true,
			'plain_text'    => true,
			'email'			=> $this
		), '', $this->template_base );
	}

	/**
	 * Get email heading.
	 *
	 * @return string
	 */
	public function get_heading_social() {
		return apply_filters( 'woocommerce_email_heading_' . $this->id, $this->format_string( $this->get_option( 'heading', $this->get_default_heading_social() ) ), $this->object, $this );
	}

	/**
	 * Get email heading.
	 *
	 * @since  3.1.0
	 * @return string
	 */
	public function get_default_heading_social() {
		return $this->heading_talent_social;
	}
    
}
