var Zuck=function(t){var e={};function n(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){t.exports=function(n){var a=function(t){return document.querySelectorAll(t)[0]},i=function(t,e){return t&&t[e]||""},o=function(t,e){if(t)for(var n=t.length,a=0;a<n;a++)e(a,t[a])},c=function(t,e,n){var a=[e.toLowerCase(),"webkit".concat(e),"MS".concat(e),"o".concat(e)];o(a,(function(e,a){t[a]=n}))},r=function(t,e,n){var a=[n.toLowerCase(),"webkit".concat(n),"MS".concat(n),"o".concat(n)];o(a,(function(n,a){t.addEventListener(a,e,!1)}))},s=function(t,e){r(t,e,"AnimationEnd")},l=function(t,e){t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e)},d=function(t,e){var d=this,u=function(t,n){var a=function(t){return void 0!==t};return n?a(e[t])&&a(e[t][n])?e[t][n]:g[t][n]:a(e[t])?e[t]:g[t]},m=function(t,e){var n="RequestFullScreen";try{e?(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)&&(document.exitFullscreen?document.exitFullscreen().catch((function(){})):(document.mozCancelFullScreen||document.mozCancelFullScreen)&&document.mozCancelFullScreen().catch((function(){}))):t.requestFullScreen?t.requestFullScreen():t["ms".concat(n)]?t["ms".concat(n)]():t["moz".concat(n)]?t["moz".concat(n)]():t["webkit".concat(n)]&&t["webkit".concat(n)]()}catch(t){console.warn("[Zuck.js] Can't access fullscreen")}},v=function(t,e,n,i){var o=e>0?1:-1,r=Math.abs(e)/a("#zuck-modal").offsetWidth*90*o;if(u("cubeEffect")){var s=0===r?"scale(0.95)":"scale(0.930,0.930)";if(c(a("#zuck-modal-content").style,"Transform",s),r<-90||r>90)return!1}var l=u("cubeEffect")?"rotateY(".concat(r,"deg)"):"translate3d(".concat(e,"px, 0, 0)");t&&(c(t.style,"TransitionTimingFunction",i),c(t.style,"TransitionDuration","".concat(n,"ms")),c(t.style,"Transform",l))},f=function(t,e,n,a){var i=0,o=0;if(t){if(t.offsetParent)do{if(i+=t.offsetLeft,o+=t.offsetTop,t===a)break}while(t=t.offsetParent);e&&(o-=e),n&&(i-=n)}return[i,o]};"string"==typeof t&&(t=document.getElementById(t)),t.id||t.setAttribute("id","stories-"+Math.random().toString(36).substr(2,9));var p=function(t){t=1e3*Number(t);var e=new Date(t),n=e.getTime(),a=((new Date).getTime()-n)/1e3,i=u("language","time"),c=[[60," ".concat(i.seconds),1],[120,"1 ".concat(i.minute),""],[3600," ".concat(i.minutes),60],[7200,"1 ".concat(i.hour),""],[86400," ".concat(i.hours),3600],[172800," ".concat(i.yesterday),""],[604800," ".concat(i.days),86400]],r=1;a<0&&(a=Math.abs(a),r=2);var s=!1;if(o(c,(function(t,e){a<e[0]&&!s&&("string"==typeof e[2]?s=e[r]:null!==e&&(s=Math.floor(a/e[2])+e[1]))})),s)return s;var l=e.getDate(),d=e.getMonth(),m=e.getFullYear();return"".concat(l,"/").concat(d+1,"/").concat(m)},y=t.id,g={rtl:!1,skin:"snapgram",avatars:!0,stories:[],backButton:!0,backNative:!1,paginationArrows:!1,previousTap:!0,autoFullScreen:!1,openEffect:!0,cubeEffect:!1,list:!1,localStorage:!0,callbacks:{onOpen:function(t,e){e()},onView:function(t){},onEnd:function(t,e){e()},onClose:function(t,e){e()},onNextItem:function(t,e,n){n()},onNavigateItem:function(t,e,n){n()}},template:{timelineItem:function(t){return'\n            <div class="story '.concat(!0===i(t,"seen")?"seen":"",'">\n              <a class="item-link" href="').concat(i(t,"link"),'">\n                <span class="item-preview">\n                  <img lazy="eager" src="').concat(u("avatars")||!i(t,"currentPreview")?i(t,"photo"):i(t,"currentPreview"),'" />\n                </span>\n                <span class="info" itemProp="author" itemScope itemType="http://schema.org/Person">\n                  <strong class="name" itemProp="name">').concat(i(t,"name"),'</strong>\n                  <span class="time">').concat(i(t,"lastUpdatedAgo"),'</span>\n                </span>\n              </a>\n              \n              <ul class="items"></ul>\n            </div>')},timelineStoryItem:function(t){var e=["id","seen","src","link","linkText","time","type","length","preview"],n='\n            href="'.concat(i(t,"src"),'"\n            data-link="').concat(i(t,"link"),'"\n            data-linkText="').concat(i(t,"linkText"),'"\n            data-time="').concat(i(t,"time"),'"\n            data-type="').concat(i(t,"type"),'"\n            data-length="').concat(i(t,"length"),'"\n          ');for(var a in t)-1===e.indexOf(a)&&(n+=" data-".concat(a,'="').concat(t[a],'"'));return"<a ".concat(n,'>\n                    <img loading="auto" src="').concat(i(t,"preview"),'" />\n                  </a>')},viewerItem:function(t,e){return'<div class="story-viewer">\n                    <div class="head">\n                      <div class="left">\n                        '.concat(u("backButton")?'<a class="back">X</a>':"",'\n\n                        <span class="item-preview">\n                          <img lazy="eager" class="profilePhoto" src="').concat(i(t,"photo"),'" />\n                        </span>\n\n                        <div class="info">\n                          <strong class="name">').concat(i(t,"name"),'</strong>\n                          <span class="time">').concat(i(t,"timeAgo"),'</span>\n                        </div>\n                      </div>\n\n                      <div class="right">\n                        <span class="time">').concat(i(e,"timeAgo"),'</span>\n                        <span class="loading"></span>\n                        <a class="close" tabIndex="2">&times;</a>\n                      </div>\n                    </div>\n\n                    <div class="slides-pointers">\n                      <div class="wrap"></div>\n                    </div>\n\n                    ').concat(u("paginationArrows")?'<div class="slides-pagination">\n                          <span class="previous">&lsaquo;</span>\n                          <span class="next">&rsaquo;</span>\n                        </div>':"","\n                  </div>")},viewerItemPointer:function(t,e,n){return'<span \n                    class="'.concat(e===t?"active":""," ").concat(!0===i(n,"seen")?"seen":"",'"\n                    data-index="').concat(t,'" data-item-id="').concat(i(n,"id"),'">\n                      <b style="animation-duration:').concat(""===i(n,"length")?"3":i(n,"length"),'s"></b>\n                  </span>')},viewerItemBody:function(t,e,n){return'<div \n                    class="item '.concat(!0===i(n,"seen")?"seen":""," ").concat(e===t?"active":"",'"\n                    data-time="').concat(i(n,"time"),'" data-type="').concat(i(n,"type"),'" data-index="').concat(t,'" data-item-id="').concat(i(n,"id"),'">\n                    ').concat("video"===i(n,"type")?'<video class="media" muted webkit-playsinline playsinline preload="auto" src="'.concat(i(n,"src"),'" ').concat(i(n,"type"),'></video>\n                        <b class="tip muted">').concat(u("language","unmute"),"</b>"):'<img loading="auto" class="media" src="'.concat(i(n,"src"),'" ').concat(i(n,"type")," />\n                    "),"\n\n                    ").concat(i(n,"link")?'<a class="tip link" href="'.concat(i(n,"link"),'">\n                            ').concat(i(n,"linkText")&&""!==i(n,"linkText")?i(n,"linkText"):u("language","visitLink"),"\n                          </a>"):"","\n                  </div>")}},language:{unmute:"Touch to unmute",keyboardTip:"Press space to see next",visitLink:"Visit link",time:{ago:"ago",hour:"hour ago",hours:"hours ago",minute:"minute ago",minutes:"minutes ago",fromnow:"from now",seconds:"seconds ago",yesterday:"yesterday",tomorrow:"tomorrow",days:"days ago"}}},h=function(){var t,e,c=a("#zuck-modal");c||d.hasModal||(d.hasModal=!0,(c=document.createElement("div")).id="zuck-modal",u("cubeEffect")&&(c.className="with-cube"),c.innerHTML='<div id="zuck-modal-content"></div>',c.style.display="none",c.setAttribute("tabIndex","1"),c.onkeyup=function(t){var e=t.keyCode;27===e?h.close():13!==e&&32!==e||h.next()},u("openEffect")&&c.classList.add("with-effects"),u("rtl")&&c.classList.add("rtl"),e=function(){c.classList.contains("closed")&&(g.innerHTML="",c.style.display="none",c.classList.remove("closed"),c.classList.remove("animated"))},(t=c).transitionEndEvent||(t.transitionEndEvent=!0,r(t,e,"TransitionEnd")),document.body.appendChild(c));var g=a("#zuck-modal-content"),b=function(t){var e=a("#zuck-modal"),n="",i="",o=0,c=a("#zuck-modal-slider-".concat(y)),r={previous:a("#zuck-modal .story-viewer.previous"),next:a("#zuck-modal .story-viewer.next"),viewing:a("#zuck-modal .story-viewer.viewing")};if((!r.previous&&!t||!r.next&&t)&&!u("rtl"))return!1;t?(n="next",i="previous"):(n="previous",i="next"),u("cubeEffect")?"previous"===n?o=e.slideWidth:"next"===n&&(o=-1*e.slideWidth):o=-1*f(r[n])[0],v(c,o,600,null),setTimeout((function(){if(u("rtl")){var t=n;n=i,i=t}if(""!==n&&r[n]&&""!==i){var e=r[n].getAttribute("data-story-id");d.internalData.currentStory=e;var o=a("#zuck-modal .story-viewer.".concat(i));o&&o.parentNode.removeChild(o),r.viewing&&(r.viewing.classList.add("stopped"),r.viewing.classList.add(i),r.viewing.classList.remove("viewing")),r[n]&&(r[n].classList.remove("stopped"),r[n].classList.remove(n),r[n].classList.add("viewing"));var l=k(n);l&&I(l,n);var m=d.internalData.currentStory,f=a('#zuck-modal [data-story-id="'.concat(m,'"]'));if(f){var p=(f=f.querySelectorAll("[data-index].active"))[0].firstElementChild;d.data[m].currentItem=parseInt(f[0].getAttribute("data-index"),10),f[0].innerHTML='<b style="'.concat(p.style.cssText,'"></b>'),s(f[0].firstElementChild,(function(){d.nextItem(!1)}))}if(v(c,"0",0,null),f){var y=a('#zuck-modal .story-viewer[data-story-id="'.concat(e,'"]'));x(y,[f[0],f[1]],!0)}u("callbacks","onView")(d.internalData.currentStory)}}),650)},I=function(t,e,n){var c=a("#zuck-modal-slider-".concat(y)),r=i(t,"items");t.timeAgo=r&&r[0]?p(i(r[0],"time")):"";var m="",v="",f=i(t,"id"),g=document.createElement("div"),b=i(t,"currentItem")||0;if(a('#zuck-modal .story-viewer[data-story-id="'.concat(f,'"]')))return!1;g.className="slides",o(r,(function(e,n){n.timeAgo=p(i(n,"time")),b>e&&(t.items[e].timeAgo=n.timeAgo,t.items[e].seen=!0,n.seen=!0),v+=u("template","viewerItemPointer")(e,b,n),m+=u("template","viewerItemBody")(e,b,n)})),g.innerHTML=m;var k=g.querySelector("video"),w=function(t){t.muted?S.classList.add("muted"):S.classList.remove("muted")};k&&(k.onwaiting=function(t){k.paused&&(S.classList.add("paused"),S.classList.add("loading"))},k.onplay=function(){w(k),S.classList.remove("stopped"),S.classList.remove("paused"),S.classList.remove("loading")},k.onload=k.onplaying=k.oncanplay=function(){w(k),S.classList.remove("loading")},k.onvolumechange=function(){w(k)});var L=document.createElement("div");L.innerHTML=u("template","viewerItem")(t,b);var S=L.firstElementChild;S.className="story-viewer muted ".concat(e," ").concat(n?"":"stopped"," ").concat(u("backButton")?"with-back-button":""),S.setAttribute("data-story-id",f),S.querySelector(".slides-pointers .wrap").innerHTML=v,o(S.querySelectorAll(".close, .back"),(function(t,e){e.onclick=function(t){t.preventDefault(),h.close()}})),S.appendChild(g),"viewing"===e&&x(S,S.querySelectorAll('[data-index="'.concat(b,'"].active')),!1),o(S.querySelectorAll(".slides-pointers [data-index] > b"),(function(t,e){s(e,(function(){d.nextItem(!1)}))})),"previous"===e?l(c,S):c.appendChild(S)};return{show:function(t,e){var i=a("#zuck-modal");u("callbacks","onOpen")(t,(function(){g.innerHTML='<div id="zuck-modal-slider-'.concat(y,'" class="slider"></div>');var e=d.data[t],o=e.currentItem||0;!function(t){var e=a("#zuck-modal"),i=t,o={},c=null,r=null,s=null,l=null,m=null,p=function(t){var n=a("#zuck-modal .viewing");if("A"!==t.target.nodeName){var d=t.touches?t.touches[0]:t,u=f(a("#zuck-modal .story-viewer.viewing"));e.slideWidth=a("#zuck-modal .story-viewer").offsetWidth,e.slideHeight=a("#zuck-modal .story-viewer").offsetHeight,o={x:u[0],y:u[1]};var v=d.clientX,p=d.clientY;c={x:v,y:p,time:Date.now(),valid:!0},p<80||p>e.slideHeight-80?c.valid=!1:(t.preventDefault(),r=void 0,s={},i.addEventListener("mousemove",y),i.addEventListener("mouseup",g),i.addEventListener("mouseleave",g),i.addEventListener("touchmove",y),i.addEventListener("touchend",g),n&&n.classList.add("paused"),L(),l=setTimeout((function(){n.classList.add("longPress")}),600),m=setTimeout((function(){clearInterval(m),m=!1}),250))}},y=function(t){var e=t.touches?t.touches[0]:t,n=e.clientX,a=e.clientY;c&&c.valid&&(s={x:n-c.x,y:a-c.y},void 0===r&&(r=!!(r||Math.abs(s.x)<Math.abs(s.y))),!r&&c&&(t.preventDefault(),v(i,o.x+s.x,0,null)))},g=function t(f){var p=a("#zuck-modal .viewing"),g=c,h=c?Date.now()-c.time:void 0,k=Number(h)<300&&Math.abs(s.x)>25||Math.abs(s.x)>e.slideWidth/3,w=s.x<0,L=a(w?"#zuck-modal .story-viewer.next":"#zuck-modal .story-viewer.previous"),E=w&&!L||!w&&!L;if(c&&!c.valid);else{s&&(r||(k&&!E?b(w):v(i,o.x,300)),c=void 0,i.removeEventListener("mousemove",y),i.removeEventListener("mouseup",t),i.removeEventListener("mouseleave",t),i.removeEventListener("touchmove",y),i.removeEventListener("touchend",t));var I=d.internalData.currentVideoElement;if(l&&clearInterval(l),p&&(x(p,p.querySelectorAll(".active"),!1),p.classList.remove("longPress"),p.classList.remove("paused")),m){clearInterval(m),m=!1;var A=function(){w||(g.x>n.screen.availWidth/3||!u("previousTap")?u("rtl")?d.navigateItem("previous",f):d.navigateItem("next",f):u("rtl")?d.navigateItem("next",f):d.navigateItem("previous",f))},T=a("#zuck-modal .viewing");if(!T||!I)return A(),!1;T.classList.contains("muted")?S(I,T):A()}}};i.addEventListener("touchstart",p),i.addEventListener("mousedown",p)}(a("#zuck-modal-slider-".concat(y))),d.internalData.currentStory=t,e.currentItem=o,u("backNative")&&(n.location.hash="#!".concat(y));var c=k("previous");c&&I(c,"previous"),I(e,"viewing",!0);var r=k("next");r&&I(r,"next"),u("autoFullScreen")&&i.classList.add("fullscreen");var s=function(){i.classList.contains("fullscreen")&&u("autoFullScreen")&&n.screen.availWidth<=1024&&m(i),i.focus()};if(u("openEffect")){var l=a("#".concat(y,' [data-id="').concat(t,'"] .item-preview')),p=f(l);i.style.marginLeft="".concat(p[0]+l.offsetWidth/2,"px"),i.style.marginTop="".concat(p[1]+l.offsetHeight/2,"px"),i.style.display="block",i.slideWidth=a("#zuck-modal .story-viewer").offsetWidth,setTimeout((function(){i.classList.add("animated")}),10),setTimeout((function(){s()}),300)}else i.style.display="block",i.slideWidth=a("#zuck-modal .story-viewer").offsetWidth,s();u("callbacks","onView")(t)}))},next:function(t){u("callbacks","onEnd")(d.internalData.currentStory,(function(){var t=d.internalData.currentStory,e=a("#".concat(y,' [data-id="').concat(t,'"]'));e&&(e.classList.add("seen"),d.data[t].seen=!0,d.internalData.seenItems[t]=!0,E("seenItems",d.internalData.seenItems),w()),a("#zuck-modal .story-viewer.next")?u("rtl")?b(!1):b(!0):h.close()}))},close:function(){var t=a("#zuck-modal");u("callbacks","onClose")(d.internalData.currentStory,(function(){u("backNative")&&(n.location.hash=""),m(t,!0),u("openEffect")?t.classList.add("closed"):(g.innerHTML="",t.style.display="none")})),location.reload()}}}(),b=function(t,e){var n=t.getAttribute("data-id"),a=!1;d.internalData.seenItems[n]&&(a=!0);try{d.data[n]||(d.data[n]={}),d.data[n].id=n,d.data[n].photo=t.getAttribute("data-photo"),d.data[n].name=t.querySelector(".name").innerText,d.data[n].link=t.querySelector(".item-link").getAttribute("href"),d.data[n].lastUpdated=t.getAttribute("data-last-updated"),d.data[n].seen=a,d.data[n].items||(d.data[n].items=[],d.data[n].noItems=!0)}catch(t){d.data[n]={items:[]}}t.onclick=function(t){t.preventDefault(),h.show(n)};var i=u("callbacks","onDataUpdate");i&&i(d.data,(function(){}))},k=function(t){var e=d.internalData.currentStory,n="".concat(t,"ElementSibling");if(e){var i=a("#".concat(y,' [data-id="').concat(e,'"]'))[n];if(i){var o=i.getAttribute("data-id");return d.data[o]||!1}}return!1},w=function(){o(document.querySelectorAll("#".concat(y," .story.seen")),(function(t,e){var n=d.data[e.getAttribute("data-id")],a=e.parentNode;u("reactive")||a.removeChild(e),d.update(n,!0)}))},x=function(t,e,n){var a=e[1],i=e[0];if(!a||!i)return!1;var o=d.internalData.currentVideoElement;if(o&&o.pause(),"video"===a.getAttribute("data-type")){var r=a.getElementsByTagName("video")[0];if(!r)return d.internalData.currentVideoElement=!1,!1;var s=function(){r.duration&&c(i.getElementsByTagName("b")[0].style,"AnimationDuration","".concat(r.duration,"s"))};s(),r.addEventListener("loadedmetadata",s),d.internalData.currentVideoElement=r,r.play(),n&&n.target&&S(r,t)}else d.internalData.currentVideoElement=!1},L=function(){var t=d.internalData.currentVideoElement;if(t)try{t.pause()}catch(t){}},S=function(t,e){t.muted=!1,t.volume=1,t.removeAttribute("muted"),t.play(),t.paused&&(t.muted=!0,t.play()),e&&e.classList.remove("paused")},E=function(t,e){try{if(u("localStorage")){var a="zuck-".concat(y,"-").concat(t);n.localStorage[a]=JSON.stringify(e)}}catch(t){}},I=function(t){if(u("localStorage")){var e="zuck-".concat(y,"-").concat(t);return!!n.localStorage[e]&&JSON.parse(n.localStorage[e])}return!1};return d.data=u("stories")||{},d.internalData={},d.internalData.seenItems=I("seenItems")||{},d.add=d.update=function(e,n){var c,r=i(e,"id"),s=a("#".concat(y,' [data-id="').concat(r,'"]')),m=i(e,"items"),v=!1;if(m[0]&&(v=m[0].preview||""),!0===d.internalData.seenItems[r]&&(e.seen=!0),e.currentPreview=v,s)c=s;else{var f=document.createElement("div");f.innerHTML=u("template","timelineItem")(e),c=f.firstElementChild}!1===e.seen&&(d.internalData.seenItems[r]=!1,E("seenItems",d.internalData.seenItems)),c.setAttribute("data-id",r),c.setAttribute("data-photo",i(e,"photo")),c.setAttribute("data-last-updated",i(e,"lastUpdated")),b(c),s||u("reactive")||(n?t.appendChild(c):l(t,c)),o(m,(function(t,e){d.addItem(r,e,n)})),n||w()},d.next=function(){h.next()},d.remove=function(t){var e=a("#".concat(y,' > [data-id="').concat(t,'"]'));e.parentNode.removeChild(e)},d.addItem=function(t,e,n){var c=a("#".concat(y,' > [data-id="').concat(t,'"]'));if(!u("reactive")){var r=document.createElement("li"),s=c.querySelectorAll(".items")[0];r.className=i(e,"seen")?"seen":"",r.setAttribute("data-id",i(e,"id")),r.innerHTML=u("template","timelineStoryItem")(e),n?s.appendChild(r):l(s,r)}!function(t,e){var n=t.getAttribute("data-id"),a=document.querySelectorAll("#".concat(y,' [data-id="').concat(n,'"] .items > li')),i=[];if(!u("reactive")){o(a,(function(t,e){for(var n=e.firstElementChild,a=n.firstElementChild,o={id:n.getAttribute("data-id"),src:n.getAttribute("href"),length:n.getAttribute("data-length"),type:n.getAttribute("data-type"),time:n.getAttribute("data-time"),link:n.getAttribute("data-link"),linkText:n.getAttribute("data-linkText"),preview:a.getAttribute("src")},c=n.attributes,r=["data-id","href","data-length","data-type","data-time","data-link","data-linktext"],s=0;s<c.length;s++)-1===r.indexOf(c[s].nodeName)&&(o[c[s].nodeName.replace("data-","")]=c[s].nodeValue);i.push(o)})),d.data[n].items=i;var c=u("callbacks","onDataUpdate");c&&c(d.data,(function(){}))}}(c)},d.removeItem=function(e,n){var i=a("#".concat(y,' > [data-id="').concat(e,'"] [data-id="').concat(n,'"]'));u("reactive")||t.parentNode.removeChild(i)},d.navigateItem=d.nextItem=function(t,e){var n=d.internalData.currentStory,i=d.data[n].currentItem,c=a('#zuck-modal .story-viewer[data-story-id="'.concat(n,'"]')),r="previous"===t?-1:1;if(!c||1===c.touchMove)return!1;var s=c.querySelectorAll('[data-index="'.concat(i,'"]')),l=s[0],m=s[1],v=i+r,f=c.querySelectorAll('[data-index="'.concat(v,'"]')),y=f[0],g=f[1];if(c&&y&&g){var b=u("callbacks","onNavigateItem");(b=u("callbacks",b?"onNavigateItem":"onNextItem"))(n,g.getAttribute("data-story-id"),(function(){"previous"===t?(l.classList.remove("seen"),m.classList.remove("seen")):(l.classList.add("seen"),m.classList.add("seen")),l.classList.remove("active"),m.classList.remove("active"),y.classList.remove("seen"),y.classList.add("active"),g.classList.remove("seen"),g.classList.add("active"),o(c.querySelectorAll(".time"),(function(t,e){e.innerText=p(g.getAttribute("data-time"))})),d.data[n].currentItem=d.data[n].currentItem+r,x(c,f,e)}))}else c&&"previous"!==t&&h.next(e)},function(){if(t&&t.querySelector(".story")&&o(t.querySelectorAll(".story"),(function(t,e){b(e)})),u("backNative")&&(n.location.hash==="#!".concat(y)&&(n.location.hash=""),n.addEventListener("popstate",(function(t){n.location.hash!=="#!".concat(y)&&(n.location.hash="")}),!1)),!u("reactive")){var e=I("seenItems");o(Object.keys(e),(function(t,n){d.data[n]&&(d.data[n].seen=e[n])}))}o(u("stories"),(function(t,e){d.add(e,!0)})),w();var a=u("avatars")?"user-icon":"story-preview",i=u("list")?"list":"carousel",c=u("rtl")?"rtl":"";return t.className+=" stories ".concat(a," ").concat(i," ").concat("".concat(u("skin")).toLowerCase()," ").concat(c),d}()};return d.buildTimelineItem=function(t,e,n,a,i,c){var r={id:t,photo:e,name:n,link:a,lastUpdated:i,items:[]};return o(c,(function(t,e){r.items.push(d.buildStoryItem.apply(d,e))})),r},d.buildItem=d.buildStoryItem=function(t,e,n,a,i,o,c,r,s){return{id:t,type:e,length:n,src:a,preview:i,link:o,linkText:c,seen:r,time:s}},t.exports&&(e=t.exports=d),e.ZuckJS=d,d}(window||{})}]);