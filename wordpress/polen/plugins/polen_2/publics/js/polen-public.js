(function( $ ) {
	'use strict';
    $(document).ready(function(){
		$('form.form_search_order').on('submit',function(e) {
			$(this).off(e); 
			e.preventDefault();
			e.stopPropagation();

			var wnonce = $('#_wpnonce').val();
			var order_id = $('#order_number').val();
			var email = $('#fan_email').val();
			$.ajax(
				{
					type: 'POST',
					url: woocommerce_params.ajaxurl,
						data: {
						action: 'search_order_status',
						order: order_id,
						email: email,
						security: wnonce
					},
					success: function( response ) {
						let obj = $.parseJSON( response );
						if( obj.found != 0 ){
							$('form.form_search_order').submit();
						}
					}
				});
		});


		$(document).on('click', '.btn-visualizar-pedido',function(e){
			e.preventDefault();
			var wnonce = $(this).attr('button-nonce');
			var order_id = $(this).attr('order-id');
			$.ajax(
				{
					type: 'POST',
					url: woocommerce_params.ajaxurl + '?action=get_talent_order_data',
					data: {
						// action: 'get_talent_order_data',
						order: order_id,
						security: wnonce
					},
					success: function( response ) {
						let obj = $.parseJSON( response );
						if( obj.success == true ){
							$('#order-value').html(obj['data'][0]['total']);
                            if( obj['data'][0]['from'].length === 0 ) {
                                $('#item-render-video-from').hide();
                            } else {
                                $('#item-render-video-from').show();
                            }
                            $('#video-from').html(obj['data'][0]['from'])
							$('#video-name').html(obj['data'][0]['name']);
							$('#video-email').html(obj['data'][0]['email']);
							$('#video-category').html(obj['data'][0]['category']);
							$('#expiration-time').html(obj['data'][0]['expiration']);
							$('#video-instructions').html(obj['data'][0]['instructions']);
							$('.modal-group-buttons').attr('order-id',obj['data'][0]['order_id'] );
						}
					}
				});
		});

		/**** talento ****/
		$('button.talent-check-order').on('click',function(){
			var wnonce = $(this).parent().attr('button-nonce');
			var order_id = $(this).parent().attr('order-id');
			var type = $(this).attr('action-type');

			if( type == 'reject' ){
				var confirm_reject = confirm("Deseja realmente rejeitar o pedido?");
				if( confirm_reject == true)  {
					$.ajax(
						{
							type: 'POST',
							url: woocommerce_params.ajaxurl,
							data: {
							action: 'get_talent_acceptance',
							order: order_id,
							type: type,
							security: wnonce
							},
							success: function( response ) {
								let obj = $.parseJSON( response );
								if( obj['success'] == true ){
									if( obj['code'] == 1 ){
										$('#OrderActions').modal('toggle');
										location.href='/my-account/send-video/?order_id=' + order_id;
									}
									if( obj['code'] == 2 ){
										location.reload();
									}		
								}
							}
						});
				} 
			}else{
				$.ajax(
					{
						type: 'POST',
						url: woocommerce_params.ajaxurl,
						data: {
						action: 'get_talent_acceptance',
						order: order_id,
						type: type,
						security: wnonce
						},
						success: function( response ) {
							let obj = $.parseJSON( response );
							//console.log(obj);
							if( obj['success'] == true ){
								if( obj['code'] == 1 ){
									$('#OrderActions').modal('toggle');
									//location.reload();'/enviar-video/?order_id=35
									location.href='/my-account/send-video/?order_id=' + order_id;
								}
								if( obj['code'] == 2 ){
									//$('#OrderActions').modal('toggle');
									location.reload();
								}		
							}
						}
					});
			}
		});

	});
})( jQuery );
