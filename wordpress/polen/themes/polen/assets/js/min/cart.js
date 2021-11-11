const cartAdvanced=new Vue({el:"#cart-advanced",data:{activeItem:1,offered_by:cart_items.offered_by||"",email_to_video:cart_items.email_to_video||"",video_to:cart_items.video_to||"",instructions_to_video:cart_items.instructions_to_video||"",phone:cart_items.phone||"",occasion:""},methods:{nextStep:function(e){this.activeItem=e},handlePhoneChange:function(e){this.phone=mtel(e.target.value)},step1Disabled:function(){return!this.offered_by||!polMailValidate(this.email_to_video)},video_toHandle:function(e){this.video_to=e.detail},occasionHandle:function(e){this.occasion=e.detail},isComplete:function(){return""!=this.offered_by&&""!=this.email_to_video&&""!=this.video_to&&""!=this.instructions_to_video&&2==this.activeItem&&this.occasion},isForOther:function(){return"other_one"==this.video_to},isInstructionsOk:function(){return checkWordsInInstructions(this.instructions_to_video)},onSubmit:function(e){console.log(jQuery("#cart-advanced").serialize())}}});function checkWordsInInstructions(e){return!["música","musica","canta","cantar","toca","tocar","palinha","palhinha",'"'].some(t=>e.toLowerCase().includes(t))}function verify_checkbox_selected_to_hidde_or_show_fields(){}!function(e){e(document).ready((function(){verify_checkbox_selected_to_hidde_or_show_fields(),e("input, textarea").on("blur change paste click",(function(){var t=e("input[name=cart-item-key]").val(),o=e(this).attr("name");if(-1!==e.inArray(o,["offered_by","video_to","name_to_video","email_to_video","video_category","instructions_to_video","allow_video_on_page","phone"])){let i;i="allow_video_on_page"==o?e("#cart_"+o+"_"+t).is(":checked")?"on":"off":e(this).val(),e.ajax({type:"POST",url:polenObj.ajax_url,data:{action:"polen_update_cart_item",security:e("#woocommerce-cart-nonce").val(),polen_data_name:o,polen_data_value:i,cart_id:t},success:function(e){}})}}))}))}(jQuery);