window.lazyLoadOptions = {
                elements_selector: "img[data-lazy-src],.rocket-lazyload,iframe[data-lazy-src]",
                data_src: "lazy-src",
                data_srcset: "lazy-srcset",
                data_sizes: "lazy-sizes",
                class_loading: "lazyloading",
                class_loaded: "lazyloaded",
                threshold: 300,
                callback_loaded: function(element) {
                    if ( element.tagName === "IFRAME" && element.dataset.rocketLazyload == "fitvidscompatible" ) {
                        if (element.classList.contains("lazyloaded") ) {
                            if (typeof window.jQuery != "undefined") {
                                if (jQuery.fn.fitVids) {
                                    jQuery(element).parent().fitVids();
                                }
                            }
                        }
                    }
                }};
        window.addEventListener('LazyLoad::Initialized', function (e) {
            var lazyLoadInstance = e.detail.instance;

            if (window.MutationObserver) {
                var observer = new MutationObserver(function(mutations) {
                    var image_count = 0;
                    var iframe_count = 0;
                    var rocketlazy_count = 0;

                    mutations.forEach(function(mutation) {
                        for (i = 0; i < mutation.addedNodes.length; i++) {
                            if (typeof mutation.addedNodes[i].getElementsByTagName !== 'function') {
                                return;
                            }

                           if (typeof mutation.addedNodes[i].getElementsByClassName !== 'function') {
                                return;
                            }

                            images = mutation.addedNodes[i].getElementsByTagName('img');
                            is_image = mutation.addedNodes[i].tagName == "IMG";
                            iframes = mutation.addedNodes[i].getElementsByTagName('iframe');
                            is_iframe = mutation.addedNodes[i].tagName == "IFRAME";
                            rocket_lazy = mutation.addedNodes[i].getElementsByClassName('rocket-lazyload');

                            image_count += images.length;
                      iframe_count += iframes.length;
                      rocketlazy_count += rocket_lazy.length;

                            if(is_image){
                                image_count += 1;
                            }

                            if(is_iframe){
                                iframe_count += 1;
                            }
                        }
                    } );

                    if(image_count > 0 || iframe_count > 0 || rocketlazy_count > 0){
                        lazyLoadInstance.update();
                    }
                } );

                var b      = document.getElementsByTagName("body")[0];
                var config = { childList: true, subtree: true };

                observer.observe(b, config);
            }
        }, false);




   // Icon Divider Responsiveness
        jQuery(document).ready(function($){
          var $btn = $('.btnsx-btn');
          var viewSize = $( window ).width();
            $btn.each( function() {
              // Icon
                  var icon = $( this ).find( '.btnsx-icon' );
                  var iconImage = $( this ).find( '.btnsx-icon-img' );
                  var iconDivider = $( this ).find( '.btnsx-divider' );
                  var iconDividerOrigPos = '';
                  if( iconDivider.length > 0 ){
                      iconDividerOrigPos = iconDivider.css( 'left' ).replace('px','');
                  }
                  var iconPadTop = '';
                  if( icon.length > 0 ) {
                      icon.css( 'padding-top' ).replace('px','');
                  }
                  if( iconImage.length > 0 ){
                      var iconImgSrc = iconImage.attr('src');
                      var iconHvrImgSrc = iconImage.data('hover');
                      if( iconHvrImgSrc ){
                          $( this ).on('mouseenter',function(){
                              iconImage.attr('src',iconHvrImgSrc);
                          });
                          $( this ).on('mouseleave',function(){
                              iconImage.attr('src',iconImgSrc);
                          });
                      }
                  }

                  var padLeft = $( this ).css( 'padding-left' ).replace( 'px', '' );
                  var padRight = $( this ).css( 'padding-right' ).replace( 'px', '' );
                  var iconFloat = '';
                  if( icon.length > 0 ) {
                      icon.css( 'float' );
                  }
                  var iconOW = '';
                  if( icon.length > 0 ) {
                      icon.outerWidth();
                  }
                  $( this ).dividerResponsiveness( viewSize, icon, iconDivider, iconDividerOrigPos, iconPadTop, padLeft, padRight, iconFloat, iconOW );
                  $( window ).resize( function(){
                      var viewSize = $( window ).width();
                      $btn.dividerResponsiveness( viewSize, icon, iconDivider, iconDividerOrigPos, iconPadTop, padLeft, padRight, iconFloat, iconOW );
                  });
              });
          });





!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).LazyLoad=n()}(this,(function(){"use strict";function t(){return(t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}var n="undefined"!=typeof window,e=n&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=n&&"IntersectionObserver"in window,a=n&&"classList"in document.createElement("p"),o=n&&window.devicePixelRatio>1,r={elements_selector:"IMG",container:e||n?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!1,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(n){return t({},r,n)},l=function(t,n){var e,i=new t(n);try{e=new CustomEvent("LazyLoad::Initialized",{detail:{instance:i}})}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:i})}window.dispatchEvent(e)},s=function(t,n){return t.getAttribute("data-"+n)},u=function(t,n,e){var i="data-"+n;null!==e?t.setAttribute(i,e):t.removeAttribute(i)},d=function(t){return s(t,"ll-status")},f=function(t,n){return u(t,"ll-status",n)},_=function(t){return f(t,null)},g=function(t){return null===d(t)},v=function(t){return"native"===d(t)},b=function(t,n,e,i){t&&(void 0===i?void 0===e?t(n):t(n,e):t(n,e,i))},p=function(t,n){a?t.classList.add(n):t.className+=(t.className?" ":"")+n},h=function(t,n){a?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\s+)"+n+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},m=function(t){return t.llTempImage},E=function(t,n){if(n){var e=n._observer;e&&e.unobserve(t)}},I=function(t,n){t&&(t.loadingCount+=n)},A=function(t,n){t&&(t.toLoadCount=n)},L=function(t){for(var n,e=[],i=0;n=t.children[i];i+=1)"SOURCE"===n.tagName&&e.push(n);return e},y=function(t,n,e){e&&t.setAttribute(n,e)},w=function(t,n){t.removeAttribute(n)},k=function(t){return!!t.llOriginalAttrs},z=function(t){if(!k(t)){var n={};n.src=t.getAttribute("src"),n.srcset=t.getAttribute("srcset"),n.sizes=t.getAttribute("sizes"),t.llOriginalAttrs=n}},O=function(t){if(k(t)){var n=t.llOriginalAttrs;y(t,"src",n.src),y(t,"srcset",n.srcset),y(t,"sizes",n.sizes)}},C=function(t,n){y(t,"sizes",s(t,n.data_sizes)),y(t,"srcset",s(t,n.data_srcset)),y(t,"src",s(t,n.data_src))},M=function(t){w(t,"src"),w(t,"srcset"),w(t,"sizes")},N=function(t,n){var e=t.parentNode;e&&"PICTURE"===e.tagName&&L(e).forEach(n)},x=function(t,n){L(t).forEach(n)},R={IMG:function(t,n){N(t,(function(t){z(t),C(t,n)})),z(t),C(t,n)},IFRAME:function(t,n){y(t,"src",s(t,n.data_src))},VIDEO:function(t,n){x(t,(function(t){y(t,"src",s(t,n.data_src))})),y(t,"poster",s(t,n.data_poster)),y(t,"src",s(t,n.data_src)),t.load()}},G=function(t,n){var e=R[t.tagName];e&&e(t,n)},T=function(t,n,e){I(e,1),p(t,n.class_loading),f(t,"loading"),b(n.callback_loading,t,e)},D={IMG:function(t,n){u(t,n.data_src,null),u(t,n.data_srcset,null),u(t,n.data_sizes,null),N(t,(function(t){u(t,n.data_srcset,null),u(t,n.data_sizes,null)}))},IFRAME:function(t,n){u(t,n.data_src,null)},VIDEO:function(t,n){u(t,n.data_src,null),u(t,n.data_poster,null),x(t,(function(t){u(t,n.data_src,null)}))}},F=function(t,n){u(t,n.data_bg_multi,null),u(t,n.data_bg_multi_hidpi,null)},V=function(t,n){var e=D[t.tagName];e?e(t,n):function(t,n){u(t,n.data_bg,null),u(t,n.data_bg_hidpi,null)}(t,n)},j=["IMG","IFRAME","VIDEO"],P=function(t,n){!n||function(t){return t.loadingCount>0}(n)||function(t){return t.toLoadCount>0}(n)||b(t.callback_finish,n)},S=function(t,n,e){t.addEventListener(n,e),t.llEvLisnrs[n]=e},U=function(t,n,e){t.removeEventListener(n,e)},$=function(t){return!!t.llEvLisnrs},q=function(t){if($(t)){var n=t.llEvLisnrs;for(var e in n){var i=n[e];U(t,e,i)}delete t.llEvLisnrs}},H=function(t,n,e){!function(t){delete t.llTempImage}(t),I(e,-1),function(t){t&&(t.toLoadCount-=1)}(e),h(t,n.class_loading),n.unobserve_completed&&E(t,e)},B=function(t,n,e){var i=m(t)||t;$(i)||function(t,n,e){$(t)||(t.llEvLisnrs={});var i="VIDEO"===t.tagName?"loadeddata":"load";S(t,i,n),S(t,"error",e)}(i,(function(a){!function(t,n,e,i){var a=v(n);H(n,e,i),p(n,e.class_loaded),f(n,"loaded"),V(n,e),b(e.callback_loaded,n,i),a||P(e,i)}(0,t,n,e),q(i)}),(function(a){!function(t,n,e,i){var a=v(n);H(n,e,i),p(n,e.class_error),f(n,"error"),b(e.callback_error,n,i),a||P(e,i)}(0,t,n,e),q(i)}))},J=function(t,n,e){!function(t){t.llTempImage=document.createElement("IMG")}(t),B(t,n,e),function(t,n,e){var i=s(t,n.data_bg),a=s(t,n.data_bg_hidpi),r=o&&a?a:i;r&&(t.style.backgroundImage='url("'.concat(r,'")'),m(t).setAttribute("src",r),T(t,n,e))}(t,n,e),function(t,n,e){var i=s(t,n.data_bg_multi),a=s(t,n.data_bg_multi_hidpi),r=o&&a?a:i;r&&(t.style.backgroundImage=r,function(t,n,e){p(t,n.class_applied),f(t,"applied"),F(t,n),n.unobserve_completed&&E(t,n),b(n.callback_applied,t,e)}(t,n,e))}(t,n,e)},K=function(t,n,e){!function(t){return j.indexOf(t.tagName)>-1}(t)?J(t,n,e):function(t,n,e){B(t,n,e),G(t,n),T(t,n,e)}(t,n,e)},Q=["IMG","IFRAME"],W=function(t){return t.use_native&&"loading"in HTMLImageElement.prototype},X=function(t,n,e){t.forEach((function(t){return function(t){return t.isIntersecting||t.intersectionRatio>0}(t)?function(t,n,e,i){b(e.callback_enter,t,n,i),function(t,n,e){n.unobserve_entered&&E(t,e)}(t,e,i),function(t){return!g(t)}(t)||K(t,e,i)}(t.target,t,n,e):function(t,n,e,i){g(t)||(function(t,n,e,i){e.cancel_on_exit&&function(t){return"loading"===d(t)}(t)&&"IMG"===t.tagName&&(q(t),function(t){N(t,(function(t){M(t)})),M(t)}(t),function(t){N(t,(function(t){O(t)})),O(t)}(t),h(t,e.class_loading),I(i,-1),_(t),b(e.callback_cancel,t,n,i))}(t,n,e,i),b(e.callback_exit,t,n,i))}(t.target,t,n,e)}))},Y=function(t){return Array.prototype.slice.call(t)},Z=function(t){return t.container.querySelectorAll(t.elements_selector)},tt=function(t){return function(t){return"error"===d(t)}(t)},nt=function(t,n){return function(t){return Y(t).filter(g)}(t||Z(n))},et=function(t,e){var a=c(t);this._settings=a,this.loadingCount=0,function(t,n){i&&!W(t)&&(n._observer=new IntersectionObserver((function(e){X(e,t,n)}),function(t){return{root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}}(t)))}(a,this),function(t,e){n&&window.addEventListener("online",(function(){!function(t,n){var e;(e=Z(t),Y(e).filter(tt)).forEach((function(n){h(n,t.class_error),_(n)})),n.update()}(t,e)}))}(a,this),this.update(e)};return et.prototype={update:function(t){var n,a,o=this._settings,r=nt(t,o);A(this,r.length),!e&&i?W(o)?function(t,n,e){t.forEach((function(t){-1!==Q.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),function(t,n,e){B(t,n,e),G(t,n),V(t,n),f(t,"native")}(t,n,e))})),A(e,0)}(r,o,this):(a=r,function(t){t.disconnect()}(n=this._observer),function(t,n){n.forEach((function(n){t.observe(n)}))}(n,a)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),Z(this._settings).forEach((function(t){delete t.llOriginalAttrs})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){var n=this,e=this._settings;nt(t,e).forEach((function(t){K(t,e,n)}))}},et.load=function(t,n){var e=c(n);K(t,e)},et.resetStatus=function(t){_(t)},n&&function(t,n){if(n)if(n.length)for(var e,i=0;e=n[i];i+=1)l(t,e);else l(t,n)}(et,window.lazyLoadOptions),et}));
