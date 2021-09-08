var Zuck=function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){e.exports=function(n){var a=function(e){return document.querySelectorAll(e)[0]},i=function(e,t){return e&&e[t]||""},o=function(e,t){if(e)for(var n=e.length,a=0;a<n;a++)t(a,e[a])},c=function(e,t,n){var a=[t.toLowerCase(),"webkit".concat(t),"MS".concat(t),"o".concat(t)];o(a,(function(t,a){e[a]=n}))},r=function(e,t,n){var a=[n.toLowerCase(),"webkit".concat(n),"MS".concat(n),"o".concat(n)];o(a,(function(n,a){e.addEventListener(a,t,!1)}))},s=function(e,t){r(e,t,"AnimationEnd")},l=function(e,t){e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)},d=function(e,t){var d=this,u=function(e,n){var a=function(e){return void 0!==e};return n?a(t[e])&&a(t[e][n])?t[e][n]:g[e][n]:a(t[e])?t[e]:g[e]},m=function(e,t){var n="RequestFullScreen";try{t?(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)&&(document.exitFullscreen?document.exitFullscreen().catch((function(){})):(document.mozCancelFullScreen||document.mozCancelFullScreen)&&document.mozCancelFullScreen().catch((function(){}))):e.requestFullScreen?e.requestFullScreen():e["ms".concat(n)]?e["ms".concat(n)]():e["moz".concat(n)]?e["moz".concat(n)]():e["webkit".concat(n)]&&e["webkit".concat(n)]()}catch(e){console.warn("[Zuck.js] Can't access fullscreen")}},v=function(e,t,n,i){var o=t>0?1:-1,r=Math.abs(t)/a("#zuck-modal").offsetWidth*90*o;if(u("cubeEffect")){var s=0===r?"scale(0.95)":"scale(0.930,0.930)";if(c(a("#zuck-modal-content").style,"Transform",s),r<-90||r>90)return!1}var l=u("cubeEffect")?"rotateY(".concat(r,"deg)"):"translate3d(".concat(t,"px, 0, 0)");e&&(c(e.style,"TransitionTimingFunction",i),c(e.style,"TransitionDuration","".concat(n,"ms")),c(e.style,"Transform",l))},f=function(e,t,n,a){var i=0,o=0;if(e){if(e.offsetParent)do{if(i+=e.offsetLeft,o+=e.offsetTop,e===a)break}while(e=e.offsetParent);t&&(o-=t),n&&(i-=n)}return[i,o]};"string"==typeof e&&(e=document.getElementById(e)),e.id||e.setAttribute("id","stories-"+Math.random().toString(36).substr(2,9));var p=function(e){e=1e3*Number(e);var t=new Date(e),n=t.getTime(),a=((new Date).getTime()-n)/1e3,i=u("language","time"),c=[[60," ".concat(i.seconds),1],[120,"1 ".concat(i.minute),""],[3600," ".concat(i.minutes),60],[7200,"1 ".concat(i.hour),""],[86400," ".concat(i.hours),3600],[172800," ".concat(i.yesterday),""],[604800," ".concat(i.days),86400]],r=1;a<0&&(a=Math.abs(a),r=2);var s=!1;if(o(c,(function(e,t){a<t[0]&&!s&&("string"==typeof t[2]?s=t[r]:null!==t&&(s=Math.floor(a/t[2])+t[1]))})),s)return s;var l=t.getDate(),d=t.getMonth(),m=t.getFullYear();return"".concat(l,"/").concat(d+1,"/").concat(m)},y=e.id,g={rtl:!1,skin:"snapgram",avatars:!0,stories:[],backButton:!0,backNative:!1,paginationArrows:!1,previousTap:!0,autoFullScreen:!1,openEffect:!0,cubeEffect:!1,list:!1,localStorage:!0,callbacks:{onOpen:function(e,t){t()},onView:function(e){},onEnd:function(e,t){t()},onClose:function(e,t){t()},onNextItem:function(e,t,n){n()},onNavigateItem:function(e,t,n){n()}},template:{timelineItem:function(e){return'\n            <div class="story '.concat(!0===i(e,"seen")?"seen":"",'">\n              <a class="item-link" href="').concat(i(e,"link"),'">\n                <span class="item-preview">\n                  <img lazy="eager" src="').concat(u("avatars")||!i(e,"currentPreview")?i(e,"photo"):i(e,"currentPreview"),'" />\n                </span>\n                <span class="info" itemProp="author" itemScope itemType="http://schema.org/Person">\n                  <strong class="name" itemProp="name">').concat(i(e,"name"),'</strong>\n                  <span class="time">').concat(i(e,"lastUpdatedAgo"),'</span>\n                </span>\n              </a>\n              \n              <ul class="items"></ul>\n            </div>')},timelineStoryItem:function(e){var t=["id","seen","src","link","linkText","time","type","length","preview"],n='\n            href="'.concat(i(e,"src"),'"\n            data-link="').concat(i(e,"link"),'"\n            data-linkText="').concat(i(e,"linkText"),'"\n            data-time="').concat(i(e,"time"),'"\n            data-type="').concat(i(e,"type"),'"\n            data-length="').concat(i(e,"length"),'"\n          ');for(var a in e)-1===t.indexOf(a)&&(n+=" data-".concat(a,'="').concat(e[a],'"'));return"<a ".concat(n,'>\n                    <img loading="auto" src="').concat(i(e,"preview"),'" />\n                  </a>')},viewerItem:function(e,t){return'<div class="story-viewer">\n                    <div class="head">\n                      <div class="left">\n                        '.concat(u("backButton")?'<a class="back"><i class="bi bi-x"></i></a>':"",'\n\n                        <span class="item-preview">\n                          <img lazy="eager" class="profilePhoto" src="').concat(i(e,"photo"),'" />\n                        </span>\n\n                        <div class="info">\n                          <strong class="name">').concat(i(e,"name"),'</strong>\n                          <span class="time">').concat(i(e,"timeAgo"),'</span>\n                        </div>\n                      </div>\n\n                      <div class="right">\n                        <span class="time">').concat(i(t,"timeAgo"),'</span>\n                        <span class="loading"></span>\n                        <a class="close"><i class="bi bi-x"></i></a>\n                      </div>\n                    </div>\n\n                    <div class="slides-pointers">\n                      <div class="wrap"></div>\n                    </div>\n\n                    ').concat(u("paginationArrows")?'<div class="slides-pagination">\n                          <span class="previous">&lsaquo;</span>\n                          <span class="next">&rsaquo;</span>\n                        </div>':"","\n                  </div>")},viewerItemPointer:function(e,t,n){return'<span \n                    class="'.concat(t===e?"active":""," ").concat(!0===i(n,"seen")?"seen":"",'"\n                    data-index="').concat(e,'" data-item-id="').concat(i(n,"id"),'">\n                      <b style="animation-duration:').concat(""===i(n,"length")?"3":i(n,"length"),'s"></b>\n                  </span>')},viewerItemBody:function(e,t,n){let a=n.hash;return'<div \n                    class="item '.concat(!0===i(n,"seen")?"seen":""," ").concat(t===e?"active":"",'"\n                    data-time="').concat(i(n,"time"),'" data-type="').concat(i(n,"type"),'" data-index="').concat(e,'" data-item-id="').concat(i(n,"id"),'">\n                    ').concat('<a class="share-storie" href="javascript:shareVideo(`Olha só que legal esse vídeo Polen!`,`'+polenObj.base_url+"/v/"+a+'`)"><i class="bi bi-share"></i></a>').concat("video"===i(n,"type")?'<video class="media" muted webkit-playsinline playsinline preload="auto" src="'.concat(i(n,"src"),'" ').concat(i(n,"type"),'></video>\n                        <b class="tip muted">').concat(u("language","unmute"),"</b>"):'<img loading="auto" class="media" src="'.concat(i(n,"src"),'" ').concat(i(n,"type")," />\n                    "),"\n\n                    ").concat('<div class="mark-water"><img class="img-responsive polen-mw" src="'+polenObj.base_url+'/polen/themes/polen/assets/img/logo.png" style="margin-left: auto;" /></div>').concat(i(n,"link")?'<a class="tip link" href="'.concat(i(n,"link"),'">\n                            ').concat(i(n,"linkText")&&""!==i(n,"linkText")?i(n,"linkText"):u("language","visitLink"),"\n                          </a>"):"","\n                  </div>")}},language:{unmute:"Touch to unmute",keyboardTip:"Press space to see next",visitLink:"Visit link",time:{ago:"ago",hour:"hour ago",hours:"hours ago",minute:"minute ago",minutes:"minutes ago",fromnow:"from now",seconds:"seconds ago",yesterday:"yesterday",tomorrow:"tomorrow",days:"days ago"}}},h=function(){var e,t,c=a("#zuck-modal");c||d.hasModal||(d.hasModal=!0,(c=document.createElement("div")).id="zuck-modal",u("cubeEffect")&&(c.className="with-cube"),c.innerHTML='<div id="zuck-modal-content"></div>',c.style.display="none",c.setAttribute("tabIndex","1"),c.onkeyup=function(e){var t=e.keyCode;27===t?h.close():13!==t&&32!==t||h.next()},u("openEffect")&&c.classList.add("with-effects"),u("rtl")&&c.classList.add("rtl"),t=function(){c.classList.contains("closed")&&(g.innerHTML="",c.style.display="none",c.classList.remove("closed"),c.classList.remove("animated"))},(e=c).transitionEndEvent||(e.transitionEndEvent=!0,r(e,t,"TransitionEnd")),document.body.appendChild(c));var g=a("#zuck-modal-content"),b=function(e){var t=a("#zuck-modal"),n="",i="",o=0,c=a("#zuck-modal-slider-".concat(y)),r={previous:a("#zuck-modal .story-viewer.previous"),next:a("#zuck-modal .story-viewer.next"),viewing:a("#zuck-modal .story-viewer.viewing")};if((!r.previous&&!e||!r.next&&e)&&!u("rtl"))return!1;e?(n="next",i="previous"):(n="previous",i="next"),u("cubeEffect")?"previous"===n?o=t.slideWidth:"next"===n&&(o=-1*t.slideWidth):o=-1*f(r[n])[0],v(c,o,600,null),setTimeout((function(){if(u("rtl")){var e=n;n=i,i=e}if(""!==n&&r[n]&&""!==i){var t=r[n].getAttribute("data-story-id");d.internalData.currentStory=t;var o=a("#zuck-modal .story-viewer.".concat(i));o&&o.parentNode.removeChild(o),r.viewing&&(r.viewing.classList.add("stopped"),r.viewing.classList.add(i),r.viewing.classList.remove("viewing")),r[n]&&(r[n].classList.remove("stopped"),r[n].classList.remove(n),r[n].classList.add("viewing"));var l=k(n);l&&I(l,n);var m=d.internalData.currentStory,f=a('#zuck-modal [data-story-id="'.concat(m,'"]'));if(f){var p=(f=f.querySelectorAll("[data-index].active"))[0].firstElementChild;d.data[m].currentItem=parseInt(f[0].getAttribute("data-index"),10),f[0].innerHTML='<b style="'.concat(p.style.cssText,'"></b>'),s(f[0].firstElementChild,(function(){d.nextItem(!1)}))}if(v(c,"0",0,null),f){var y=a('#zuck-modal .story-viewer[data-story-id="'.concat(t,'"]'));x(y,[f[0],f[1]],!0)}u("callbacks","onView")(d.internalData.currentStory)}}),650)},I=function(e,t,n){var c=a("#zuck-modal-slider-".concat(y)),r=i(e,"items");e.timeAgo=r&&r[0]?p(i(r[0],"time")):"";var m="",v="",f=i(e,"id"),g=document.createElement("div"),b=i(e,"currentItem")||0;if(a('#zuck-modal .story-viewer[data-story-id="'.concat(f,'"]')))return!1;g.className="slides",o(r,(function(t,n){n.timeAgo=p(i(n,"time")),b>t&&(e.items[t].timeAgo=n.timeAgo,e.items[t].seen=!0,n.seen=!0),v+=u("template","viewerItemPointer")(t,b,n),m+=u("template","viewerItemBody")(t,b,n)})),g.innerHTML=m;var k=g.querySelector("video"),w=function(e){e.muted?S.classList.add("muted"):S.classList.remove("muted")};k&&(k.onwaiting=function(e){k.paused&&(S.classList.add("paused"),S.classList.add("loading"))},k.onplay=function(){w(k),S.classList.remove("stopped"),S.classList.remove("paused"),S.classList.remove("loading")},k.onload=k.onplaying=k.oncanplay=function(){w(k),S.classList.remove("loading")},k.onvolumechange=function(){w(k)});var L=document.createElement("div");L.innerHTML=u("template","viewerItem")(e,b);var S=L.firstElementChild;S.className="story-viewer muted ".concat(t," ").concat(n?"":"stopped"," ").concat(u("backButton")?"with-back-button":""),S.setAttribute("data-story-id",f),S.querySelector(".slides-pointers .wrap").innerHTML=v,o(S.querySelectorAll(".close, .back"),(function(e,t){t.onclick=function(e){e.preventDefault(),h.close()}})),S.appendChild(g),"viewing"===t&&x(S,S.querySelectorAll('[data-index="'.concat(b,'"].active')),!1),o(S.querySelectorAll(".slides-pointers [data-index] > b"),(function(e,t){s(t,(function(){d.nextItem(!1)}))})),"previous"===t?l(c,S):c.appendChild(S)};return{show:function(e,t){var i=a("#zuck-modal");u("callbacks","onOpen")(e,(function(){g.innerHTML='<div id="zuck-modal-slider-'.concat(y,'" class="slider"></div>');var t=d.data[e],o=t.currentItem||0;!function(e){var t=a("#zuck-modal"),i=e,o={},c=null,r=null,s=null,l=null,m=null,p=function(e){var n=a("#zuck-modal .viewing");if("A"!==e.target.nodeName){var d=e.touches?e.touches[0]:e,u=f(a("#zuck-modal .story-viewer.viewing"));t.slideWidth=a("#zuck-modal .story-viewer").offsetWidth,t.slideHeight=a("#zuck-modal .story-viewer").offsetHeight,o={x:u[0],y:u[1]};var v=d.clientX,p=d.clientY;c={x:v,y:p,time:Date.now(),valid:!0},p<80||p>t.slideHeight-80?c.valid=!1:(e.preventDefault(),r=void 0,s={},i.addEventListener("mousemove",y),i.addEventListener("mouseup",g),i.addEventListener("mouseleave",g),i.addEventListener("touchmove",y),i.addEventListener("touchend",g),n&&n.classList.add("paused"),L(),l=setTimeout((function(){n.classList.add("longPress")}),600),m=setTimeout((function(){clearInterval(m),m=!1}),250))}},y=function(e){var t=e.touches?e.touches[0]:e,n=t.clientX,a=t.clientY;c&&c.valid&&(s={x:n-c.x,y:a-c.y},void 0===r&&(r=!!(r||Math.abs(s.x)<Math.abs(s.y))),!r&&c&&(e.preventDefault(),v(i,o.x+s.x,0,null)))},g=function e(f){var p=a("#zuck-modal .viewing"),g=c,h=c?Date.now()-c.time:void 0,k=Number(h)<300&&Math.abs(s.x)>25||Math.abs(s.x)>t.slideWidth/3,w=s.x<0,L=a(w?"#zuck-modal .story-viewer.next":"#zuck-modal .story-viewer.previous"),E=w&&!L||!w&&!L;if(c&&!c.valid);else{s&&(r||(k&&!E?b(w):v(i,o.x,300)),c=void 0,i.removeEventListener("mousemove",y),i.removeEventListener("mouseup",e),i.removeEventListener("mouseleave",e),i.removeEventListener("touchmove",y),i.removeEventListener("touchend",e));var I=d.internalData.currentVideoElement;if(l&&clearInterval(l),p&&(x(p,p.querySelectorAll(".active"),!1),p.classList.remove("longPress"),p.classList.remove("paused")),m){clearInterval(m),m=!1;var A=function(){w||(g.x>n.screen.availWidth/3||!u("previousTap")?u("rtl")?d.navigateItem("previous",f):d.navigateItem("next",f):u("rtl")?d.navigateItem("next",f):d.navigateItem("previous",f))},T=a("#zuck-modal .viewing");if(!T||!I)return A(),!1;T.classList.contains("muted")?S(I,T):A()}}};i.addEventListener("touchstart",p),i.addEventListener("mousedown",p)}(a("#zuck-modal-slider-".concat(y))),d.internalData.currentStory=e,t.currentItem=o,u("backNative")&&(n.location.hash="#!".concat(y));var c=k("previous");c&&I(c,"previous"),I(t,"viewing",!0);var r=k("next");r&&I(r,"next"),u("autoFullScreen")&&i.classList.add("fullscreen");var s=function(){i.classList.contains("fullscreen")&&u("autoFullScreen")&&n.screen.availWidth<=1024&&m(i),i.focus()};if(u("openEffect")){var l=a("#".concat(y,' [data-id="').concat(e,'"] .item-preview')),p=f(l);l&&(i.style.marginLeft="".concat(p[0]+l.offsetWidth/2,"px"),i.style.marginTop="".concat(p[1]+l.offsetHeight/2,"px"),i.style.display="block",i.slideWidth=a("#zuck-modal .story-viewer").offsetWidth,setTimeout((function(){i.classList.add("animated")}),10),setTimeout((function(){s()}),300))}else i.style.display="block",i.slideWidth=a("#zuck-modal .story-viewer").offsetWidth,s();u("callbacks","onView")(e)}))},next:function(e){u("callbacks","onEnd")(d.internalData.currentStory,(function(){var e=d.internalData.currentStory,t=a("#".concat(y,' [data-id="').concat(e,'"]'));t&&(t.classList.add("seen"),d.data[e].seen=!0,d.internalData.seenItems[e]=!0,E("seenItems",d.internalData.seenItems),w()),a("#zuck-modal .story-viewer.next")?u("rtl")?b(!1):b(!0):h.close()}))},close:function(){var e=a("#zuck-modal");u("callbacks","onClose")(d.internalData.currentStory,(function(){u("backNative")&&(n.location.hash=""),m(e,!0),u("openEffect")?e.classList.add("closed"):(g.innerHTML="",e.style.display="none")})),location.reload()}}}(),b=function(e,t){var n=e.getAttribute("data-id"),a=!1;d.internalData.seenItems[n]&&(a=!0);try{d.data[n]||(d.data[n]={}),d.data[n].id=n,d.data[n].photo=e.getAttribute("data-photo"),d.data[n].name=e.querySelector(".name").innerText,d.data[n].link=e.querySelector(".item-link").getAttribute("href"),d.data[n].lastUpdated=e.getAttribute("data-last-updated"),d.data[n].seen=a,d.data[n].items||(d.data[n].items=[],d.data[n].noItems=!0)}catch(e){d.data[n]={items:[]}}e.onclick=function(e){e.preventDefault(),h.show(n)};var i=u("callbacks","onDataUpdate");i&&i(d.data,(function(){}))},k=function(e){var t=d.internalData.currentStory,n="".concat(e,"ElementSibling");if(t){var i=a("#".concat(y,' [data-id="').concat(t,'"]'))[n];if(i){var o=i.getAttribute("data-id");return d.data[o]||!1}}return!1},w=function(){o(document.querySelectorAll("#".concat(y," .story.seen")),(function(e,t){var n=d.data[t.getAttribute("data-id")],a=t.parentNode;u("reactive")||a.removeChild(t),d.update(n,!0)}))},x=function(e,t,n){var a=t[1],i=t[0];if(!a||!i)return!1;var o=d.internalData.currentVideoElement;if(o&&o.pause(),"video"===a.getAttribute("data-type")){var r=a.getElementsByTagName("video")[0];if(!r)return d.internalData.currentVideoElement=!1,!1;var s=function(){r.duration&&c(i.getElementsByTagName("b")[0].style,"AnimationDuration","".concat(r.duration,"s"))};s(),r.addEventListener("loadedmetadata",s),d.internalData.currentVideoElement=r,r.play(),n&&n.target&&S(r,e)}else d.internalData.currentVideoElement=!1},L=function(){var e=d.internalData.currentVideoElement;if(e)try{e.pause()}catch(e){}},S=function(e,t){e.muted=!1,e.volume=1,e.removeAttribute("muted"),e.play(),e.paused&&(e.muted=!0,e.play()),t&&t.classList.remove("paused")},E=function(e,t){try{if(u("localStorage")){var a="zuck-".concat(y,"-").concat(e);n.localStorage[a]=JSON.stringify(t)}}catch(e){}},I=function(e){if(u("localStorage")){var t="zuck-".concat(y,"-").concat(e);return!!n.localStorage[t]&&JSON.parse(n.localStorage[t])}return!1};return d.data=u("stories")||{},d.internalData={},d.internalData.seenItems=I("seenItems")||{},d.add=d.update=function(t,n){var c,r=i(t,"id"),s=a("#".concat(y,' [data-id="').concat(r,'"]')),m=i(t,"items"),v=!1;if(m[0]&&(v=m[0].preview||""),!0===d.internalData.seenItems[r]&&(t.seen=!0),t.currentPreview=v,s)c=s;else{var f=document.createElement("div");f.innerHTML=u("template","timelineItem")(t),c=f.firstElementChild}!1===t.seen&&(d.internalData.seenItems[r]=!1,E("seenItems",d.internalData.seenItems)),c.setAttribute("data-id",r),c.setAttribute("data-photo",i(t,"photo")),c.setAttribute("data-last-updated",i(t,"lastUpdated")),b(c),s||u("reactive")||(n?e.appendChild(c):l(e,c)),o(m,(function(e,t){d.addItem(r,t,n)})),n||w()},d.next=function(){h.next()},d.remove=function(e){var t=a("#".concat(y,' > [data-id="').concat(e,'"]'));t.parentNode.removeChild(t)},d.addItem=function(e,t,n){var c=a("#".concat(y,' > [data-id="').concat(e,'"]'));if(!u("reactive")){var r=document.createElement("li"),s=c.querySelectorAll(".items")[0];r.className=i(t,"seen")?"seen":"",r.setAttribute("data-id",i(t,"id")),r.innerHTML=u("template","timelineStoryItem")(t),n?s.appendChild(r):l(s,r)}!function(e,t){var n=e.getAttribute("data-id"),a=document.querySelectorAll("#".concat(y,' [data-id="').concat(n,'"] .items > li')),i=[];if(!u("reactive")){o(a,(function(e,t){for(var n=t.firstElementChild,a=n.firstElementChild,o={id:n.getAttribute("data-id"),src:n.getAttribute("href"),length:n.getAttribute("data-length"),type:n.getAttribute("data-type"),time:n.getAttribute("data-time"),link:n.getAttribute("data-link"),linkText:n.getAttribute("data-linkText"),preview:a.getAttribute("src")},c=n.attributes,r=["data-id","href","data-length","data-type","data-time","data-link","data-linktext"],s=0;s<c.length;s++)-1===r.indexOf(c[s].nodeName)&&(o[c[s].nodeName.replace("data-","")]=c[s].nodeValue);i.push(o)})),d.data[n].items=i;var c=u("callbacks","onDataUpdate");c&&c(d.data,(function(){}))}}(c)},d.removeItem=function(t,n){var i=a("#".concat(y,' > [data-id="').concat(t,'"] [data-id="').concat(n,'"]'));u("reactive")||e.parentNode.removeChild(i)},d.navigateItem=d.nextItem=function(e,t){var n=d.internalData.currentStory,i=d.data[n].currentItem,c=a('#zuck-modal .story-viewer[data-story-id="'.concat(n,'"]')),r="previous"===e?-1:1;if(!c||1===c.touchMove)return!1;var s=c.querySelectorAll('[data-index="'.concat(i,'"]')),l=s[0],m=s[1],v=i+r,f=c.querySelectorAll('[data-index="'.concat(v,'"]')),y=f[0],g=f[1];if(c&&y&&g){var b=u("callbacks","onNavigateItem");(b=u("callbacks",b?"onNavigateItem":"onNextItem"))(n,g.getAttribute("data-story-id"),(function(){"previous"===e?(l.classList.remove("seen"),m.classList.remove("seen")):(l.classList.add("seen"),m.classList.add("seen")),l.classList.remove("active"),m.classList.remove("active"),y.classList.remove("seen"),y.classList.add("active"),g.classList.remove("seen"),g.classList.add("active"),o(c.querySelectorAll(".time"),(function(e,t){t.innerText=p(g.getAttribute("data-time"))})),d.data[n].currentItem=d.data[n].currentItem+r,x(c,f,t)}))}else c&&"previous"!==e&&h.next(t)},function(){if(e&&e.querySelector(".story")&&o(e.querySelectorAll(".story"),(function(e,t){b(t)})),u("backNative")&&(n.location.hash==="#!".concat(y)&&(n.location.hash=""),n.addEventListener("popstate",(function(e){n.location.hash!=="#!".concat(y)&&(n.location.hash="")}),!1)),!u("reactive")){var t=I("seenItems");o(Object.keys(t),(function(e,n){d.data[n]&&(d.data[n].seen=t[n])}))}o(u("stories"),(function(e,t){d.add(t,!0)})),w();var a=u("avatars")?"user-icon":"story-preview",i=u("list")?"list":"carousel",c=u("rtl")?"rtl":"";return e.className+=" stories ".concat(a," ").concat(i," ").concat("".concat(u("skin")).toLowerCase()," ").concat(c),d}()};return d.buildTimelineItem=function(e,t,n,a,i,c){var r={id:e,photo:t,name:n,link:a,lastUpdated:i,items:[]};return o(c,(function(e,t){r.items.push(d.buildStoryItem.apply(d,t))})),r},d.buildItem=d.buildStoryItem=function(e,t,n,a,i,o,c,r,s){return{id:e,type:t,length:n,src:a,preview:i,link:o,linkText:c,seen:r,time:s,hash:e}},e.exports&&(t=e.exports=d),t.ZuckJS=d,d}(window||{})}]);