<?php

/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */

defined('ABSPATH') || exit;

global $product;

/**
 * Hook: woocommerce_before_single_product.
 *
 * @hooked woocommerce_output_all_notices - 10
 */
do_action('woocommerce_before_single_product');

if (post_password_required()) {
	echo get_the_password_form(); // WPCS: XSS ok.
	return;
}

use Polen\Includes\Polen_Update_Fields;

global $post;
$Talent_Fields = new Polen_Update_Fields();
$Talent_Fields = $Talent_Fields->get_vendor_data($post->post_author);
$terms = wp_get_object_terms(get_the_ID(), 'product_tag');

$bg_image = wp_get_attachment_image_src($Talent_Fields->cover_image_id, "large")[0];
?>

<?php if($bg_image) : ?>
	<figure class="image-bg">
		<img src="<?php echo $bg_image; ?>" alt="<?php echo $Talent_Fields->nome; ?>">
	</figure>
<?php endif; ?>

<div id="product-<?php the_ID(); ?>" <?php wc_product_class('', $product); ?>>

	<!-- Vídeos -->
	<?php polen_front_get_talent_videos($Talent_Fields); ?>

	<!-- Tags -->
	<div class="row">
		<div class="col-md-12">
			<h1 class="talent-name text-truncate mb-1" title="<?= get_the_title(); ?>"><?= get_the_title(); ?></h1>
			<div class="row">
				<div class="col-md-12">
					<?php if (count($terms) > 0) : ?>
						<?php foreach ($terms as $k => $term) : ?>
							<a href="<?= get_tag_link($term); ?>" class="tag-link mb-2"><?= $term->name; ?></a>
						<?php endforeach; ?>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>

	<div class="row mt-3 mb-1 talent-page-footer">
		<div class="col-12 col-md-6 m-md-auto">
			<?php echo woocommerce_template_single_add_to_cart(); ?>
			<!--button class="btn btn-primary btn-lg btn-block btn-get-video">Pedir vídeo R$ 200</button-->
		</div>
		<!-- Card dos Reviews -->
		<?php polen_card_talent_reviews_order( $post, $Talent_Fields ); ?>
	</div>

	<!-- Como funciona? -->
	<?php polen_front_get_tutorial(); ?>

	<!-- Produtos Relacionados -->
	<?php polen_box_related_product_by_product_id( get_The_ID() ); ?>

</div>

<?php do_action('woocommerce_after_single_product'); ?>
