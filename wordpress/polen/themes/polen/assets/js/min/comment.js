Vue.component("pol-stars",{template:'\n\t<div class="col-md-12 d-flex justify-content-center box-stars">\n\t\t<span class="icon-star-item" v-for="star in stars" v-bind:class="{active: star.key <= rate}" v-on:click="handle(star.key)">\n\t\t\t<i class="icon icon-star"></i>\n\t\t\t<i class="icon icon-star-fill" style="color: #FFCF34;"></i>\n\t\t</span>\n\t\t<input type="hidden" name="rate" id="rate" v-model="rate" />\n\t</div>\n\t',props:["rate","handle"],data:function(){return{stars:[{id:"star-1",key:1},{id:"star-2",key:2},{id:"star-3",key:3},{id:"star-4",key:4},{id:"star-5",key:5}]}}});const commentbox=new Vue({el:"#comment-box",data:{rate:5,comment:""},methods:{changeRate:function(t){this.rate=t},sendComment:function(t){t.preventDefault(),polSpinner(),jQuery.post(woocommerce_params.ajax_url,jQuery("#form-comment").serialize(),(function(t){t.success?(setMessage(SUCCESS,"Vídeo avaliado com sucesso!","Seu comentário poderá aparecer na página do Talento"),window.location.href="/my-account/orders"):(polSpinner("hidden"),polError(t.data))})).fail((function(t){polSpinner("hidden"),polError(t.statusText)}))}}});