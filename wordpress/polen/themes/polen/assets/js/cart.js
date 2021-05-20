(function($) {
    $(document).on('click', '.cart-video-to', function(e) {
        if( $(this).val() == 'to_myself' ) {
            $('.video-to-info').hide();
            $('input[name=offered_by]').prop( 'required', false );
        } else {
            $('.video-to-info').show();
            $('input[name=offered_by]').prop( 'required', true );
        }
    });

    $(document).ready(function(){
		$('.polen-cart-item-data').on('blur change paste click',function(){
			var cart_id = $(this).data( 'cart-id' );
			var item_name = $(this).attr('name');

			var allowed_item = [ 'offered_by', 'video_to', 'name_to_video', 'email_to_video', 'video_category', 'instructions_to_video', 'allow_video_on_page' ];
			if( $.inArray( item_name, allowed_item ) !== -1 ){
				$.ajax(
				{
					type: 'POST',
					url: woocommerce_params.ajax_url,
						data: {
						action: 'polen_update_cart_item',
						security: $('#woocommerce-cart-nonce').val(),
						polen_data_name: item_name,
						polen_data_value: $('#cart_'+ item_name + '_' + cart_id).val(),
						cart_id: cart_id
					},
					success: function( response ) {
					//	$('.cart_totals').unblock();
						//$( '.woocommerce-cart-form' ).find( ':input[name="update_cart"]' ).prop( 'disabled', false ).attr( 'aria-disabled', false );
					}
				});
			}
		});

		$('.select-ocasion').on('change',function() {
			var item_value = $(this).val();

			if( item_value ){
				$('.video-instruction-refresh').click();
			}
		});

		function messagesPreloader(active) {
			var loader = document.getElementById("reload");
			loader.classList[active ? "add" : "remove"]("spin");
		}

        $('.video-instruction-refresh').on('click',function(){
			var category_item = $('select[name="video_category"]');
			var category_name = category_item.val();
			var cart_id = category_item.attr('data-cart-id');

			if( category_name ){
				messagesPreloader(true);
				$.ajax(
				{
					type: 'POST',
					url: woocommerce_params.ajax_url,
						data: {
						action: 'get_occasion_description',
						occasion_type: category_name,
						refresh: 1
					},
					success: function( response ) {
						let obj = $.parseJSON( response );
						//console.log(obj['response'][0].description);

						if( obj ){
							if( obj['response'][0].description ){
								$( '#cart_instructions_to_video_' + cart_id ).html(obj['response'][0].description);
							}
						}

					},
					complete: function() {
						messagesPreloader(false);
					}
				});
			}
		});
    });
})(jQuery);
