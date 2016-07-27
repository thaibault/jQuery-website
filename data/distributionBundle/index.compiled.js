'use strict';
!function(o,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jQuery-lang"),require("jQuery-scrollTo"),require("jQuery-spin"),require("jQuery-tools"),require("jquery")):"function"==typeof define&&define.amd?define("jQuery-website",["jQuery-lang","jQuery-scrollTo","jQuery-spin","jQuery-tools","jquery"],t):"object"==typeof exports?exports["jQuery-website"]=t(require("jQuery-lang"),require("jQuery-scrollTo"),require("jQuery-spin"),require("jQuery-tools"),require("jquery")):o["jQuery-website"]=t(o["jQuery-lang"],o["jQuery-scrollTo"],o["jQuery-spin"],o["jQuery-tools"],o.jquery)}(this,function(o,t,e,n,i){return function(o){function t(n){if(e[n])return e[n].exports;var i=e[n]={exports:{},id:n,loaded:!1};return o[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var e={};return t.m=o,t.c=e,t.p="",t(0)}([function(o,t,e){e(1),o.exports=e(2)},function(o,t,e){(function(o,n){"use strict";function i(o){return o&&o.__esModule?o:{"default":o}}function s(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function r(o,t){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?o:t}function a(o,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(o,t):o.__proto__=t)}t.__esModule=!0;var d=e(8),l=i(d);e(7);var c=e(4);i(c);e(5),e(6);var u=function(){return"undefined"===l["default"].type(window)?"undefined"===l["default"].type(o)?"undefined"===l["default"].type(n)?{}:n:o:window}();!("document"in u)&&"context"in l["default"]&&(u.document=l["default"].context);var p=function(o){function t(){return s(this,t),r(this,o.apply(this,arguments))}return a(t,o),t.prototype.initialize=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments.length<=1||void 0===arguments[1]?{domNodeSelectorPrefix:"body.{1}",onViewportMovesToTop:l["default"].noop(),onViewportMovesAwayFromTop:l["default"].noop(),onChangeToLargeMode:l["default"].noop(),onChangeToMediumMode:l["default"].noop(),onChangeToSmallMode:l["default"].noop(),onChangeToExtraSmallMode:l["default"].noop(),onChangeMediaQueryMode:l["default"].noop(),onSwitchSection:l["default"].noop(),onStartUpAnimationComplete:l["default"].noop(),knownScrollEventNames:"scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove",switchToManualScrollingIndicator:function(o){return o.which>0||"mousedown"===o.type||"mousewheel"===o.type||"touchmove"===o.type},additionalPageLoadingTimeInMilliseconds:0,trackingCode:null,mediaQueryClassNameIndicator:[["extraSmall","xs"],["small","sm"],["medium","md"],["large","lg"]],domNode:{mediaQueryIndicator:'<div class="media-query-indicator">',top:"> div.navbar-wrapper",scrollToTopButton:'a[href="#top"]',startUpAnimationClassPrefix:".website-start-up-animation-number-",windowLoadingCover:"div.website-window-loading-cover",windowLoadingSpinner:"div.website-window-loading-cover > div"},startUpShowAnimation:[{opacity:1},{}],startUpHide:{opacity:0},windowLoadingCoverHideAnimation:[{opacity:0},{}],startUpAnimationElementDelayInMiliseconds:100,windowLoadingSpinner:{lines:9,length:23,width:11,radius:40,corners:1,rotate:75,color:"#000",speed:1.1,trail:58,shadow:!1,hwaccel:!1,className:"spinner",zIndex:2e9,top:"auto",left:"auto"},activateLanguageSupport:!0,language:{},scrollToTop:{inLinearTime:!0,options:{duration:"normal"},button:{slideDistanceInPixel:30,showAnimation:{duration:"normal"},hideAnimation:{duration:"normal"}}},windowLoadedTimeoutAfterDocumentLoadedInMilliseconds:3e3,domain:"auto"}:arguments[1],n=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],i=arguments.length<=3||void 0===arguments[3]?null:arguments[3],s=!(arguments.length<=4||void 0===arguments[4])&&arguments[4],r=arguments.length<=5||void 0===arguments[5]?"":arguments[5],a=this,d=arguments.length<=6||void 0===arguments[6]?null:arguments[6],c=arguments.length<=7||void 0===arguments[7]?{initial:"\n                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new window.Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');window.ga('create', '{1}', '{2}');\n                window.ga('set', 'anonymizeIp', true);\n                window.ga('send', 'pageview', {page: '{3}'});\n            ",sectionSwitch:"window.ga('send', 'pageview', {page: '{1}'});",event:"window.ga(\n                'send', 'event', eventCategory, eventAction, eventLabel,\n                eventValue, eventData);\n            "}:arguments[7];return this._parentOptions=e,this.startUpAnimationIsComplete=n,this.viewportIsOnTop=s,this.currentMediaQueryMode=r,this.languageHandler=d,this._analyticsCode=c,i?this.currentSectionName=i:"location"in u&&u.location.hash?this.currentSectionName=u.location.hash.substring("#".length):this.currenSectionName="home",this._onViewportMovesToTop=this.constructor.debounce(this.getMethod(this._onViewportMovesToTop)),this._onViewportMovesAwayFromTop=this.constructor.debounce(this.getMethod(this._onViewportMovesAwayFromTop)),this._options=l["default"].extend(!0,{},this._parentOptions,this._options),o.prototype.initialize.call(this,t),this.$domNodes=this.grabDomNode(this._options.domNode),this.disableScrolling()._options.windowLoadingCoverHideAnimation[1].always=this.getMethod(this._handleStartUpEffects),this.$domNodes.windowLoadingSpinner.spin(this._options.windowLoadingSpinner),this._bindScrollEvents().$domNodes.parent.show(),"window"in this.$domNodes&&!function(){var o=function(){a.windowLoaded||(a.windowLoaded=!0,a._removeLoadingCover())};(0,l["default"])(function(){return setTimeout(o,a._options.windowLoadedTimeoutAfterDocumentLoadedInMilliseconds)}),a.on(a.$domNodes.window,"load",o)}(),this._addNavigationEvents()._addMediaQueryChangeEvents()._triggerWindowResizeEvents()._handleAnalyticsInitialisation(),this._options.language.logging||(this._options.language.logging=this._options.logging),this._options.activateLanguageSupport&&!this.languageHandler&&(this.languageHandler=l["default"].Lang(this._options.language)),this},t.prototype.disableScrolling=function(){return this.$domNodes.parent.addClass("disable-scrolling").on("touchmove",function(o){return o.preventDefault()}),this},t.prototype.enableScrolling=function(){return this.off(this.$domNodes.parent.removeClass("disable-scrolling","touchmove")),this},t.prototype.triggerAnalyticsEvent=function(){if(this._options.trackingCode&&"__none__"!==this._options.trackingCode&&"location"in u&&"localhost"!==u.location.hostname){this.debug('Run analytics code: "#{this._analyticsCode.event}" with arguments:'),this.debug(arguments);try{new Function("eventCategory","eventAction","eventLabel","eventData","eventValue",this._analyticsCode.event).apply(this,arguments)}catch(o){this.warn("Problem in google analytics event code snippet: {1}",o)}}return this},t.prototype._onViewportMovesToTop=function(){var o=this;return"hidden"===this.$domNodes.scrollToTopButton.css("visibility")?this.$domNodes.scrollToTopButton.css("opacity",0):(this._options.scrollToTop.button.hideAnimation.always=function(){return o.$domNodes.scrollToTopButton.css({bottom:"-="+o._options.scrollToTop.button.slideDistanceInPixel,display:"none"})},this.$domNodes.scrollToTopButton.finish().animate({bottom:"+="+this._options.scrollToTop.button.slideDistanceInPixel,opacity:0},this._options.scrollToTop.button.hideAnimation)),this},t.prototype._onViewportMovesAwayFromTop=function(){return"hidden"===this.$domNodes.scrollToTopButton.css("visibility")?this.$domNodes.scrollToTopButton.css("opacity",1):this.$domNodes.scrollToTopButton.finish().css({bottom:"+="+this._options.scrollToTop.button.slideDistanceInPixel,display:"block",opacity:0}).animate({bottom:"-="+this._options.scrollToTop.button.slideDistanceInPixel,queue:!1,opacity:1},this._options.scrollToTop.button.showAnimation),this},t.prototype._onChangeMediaQueryMode=function(o,t){return this},t.prototype._onChangeToLargeMode=function(o,t){return this},t.prototype._onChangeToMediumMode=function(o,t){return this},t.prototype._onChangeToSmallMode=function(o,t){return this},t.prototype._onChangeToExtraSmallMode=function(o,t){return this},t.prototype._onSwitchSection=function(o){if(this._options.trackingCode&&"__none__"!==this._options.trackingCode&&"location"in u&&"localhost"!==u.location.hostname&&this.currentSectionName!==o){this.currentSectionName=o,this.debug('Run analytics code: "'+this._analyticsCode.sectionSwitch+'"',this.currentSectionName);try{new Function(this.constructor.stringFormat(this._analyticsCode.sectionSwitch,this.currentSectionName))()}catch(t){this.warn("Problem in analytics section switch code snippet: {1}",t)}}return this},t.prototype._onStartUpAnimationComplete=function(){return this.startUpAnimationIsComplete=!0,this},t.prototype._addMediaQueryChangeEvents=function(){return this.on(this.$domNodes.window,"resize",this.getMethod(this._triggerWindowResizeEvents)),this},t.prototype._triggerWindowResizeEvents=function(){var o=this,t=arguments;return l["default"].each(this._options.mediaQueryClassNameIndicator,function(e,n){o.$domNodes.mediaQueryIndicator.prependTo(o.$domNodes.parent).addClass("hidden-"+n[1]),o.$domNodes.mediaQueryIndicator.is(":hidden")&&n[0]!==o.currentMediaQueryMode&&(o.fireEvent.apply(o,["changeMediaQueryMode",!1,o,o.currentMediaQueryMode,n[0]].concat(o.constructor.argumentsObjectToArray(t))),o.fireEvent.apply(o,[o.constructor.stringFormat("changeTo{1}Mode",o.constructor.stringCapitalize(n[0])),!1,o,o.currentMediaQueryMode,n[0]].concat(o.constructor.argumentsObjectToArray(t))),o.currentMediaQueryMode=n[0]),o.$domNodes.mediaQueryIndicator.removeClass("hidden-"+n[1])}),this},t.prototype._bindScrollEvents=function(){var o=this,t=arguments;if(!("window"in this.$domNodes))return this;var e=(0,l["default"])("body, html").add(this.$domNodes.window);return e.on(this._options.knownScrollEventNames,function(t){o._options.switchToManualScrollingIndicator(t)&&e.stop(!0)}),this.on(this.$domNodes.window,"scroll",function(){o.$domNodes.window.scrollTop()?o.viewportIsOnTop&&(o.viewportIsOnTop=!1,o.fireEvent.apply(o,["viewportMovesAwayFromTop",!1,o].concat(o.constructor.argumentsObjectToArray(t)))):o.viewportIsOnTop||(o.viewportIsOnTop=!0,o.fireEvent.apply(o,["viewportMovesToTop",!1,o].concat(o.constructor.argumentsObjectToArray(t))))}),this.$domNodes.window.scrollTop()?(this.viewportIsOnTop=!1,this.fireEvent.apply(this,["viewportMovesAwayFromTop",!1,this].concat(this.constructor.argumentsObjectToArray(arguments)))):(this.viewportIsOnTop=!0,this.fireEvent.apply(this,["viewportMovesToTop",!1,this].concat(this.constructor.argumentsObjectToArray(arguments)))),this},t.prototype._removeLoadingCover=function(){var o=this;return setTimeout(function(){(0,l["default"])(o.constructor.stringFormat('[class^="{1}"], [class*=" {1}"]',o.sliceDomNodeSelectorPrefix(o._options.domNode.startUpAnimationClassPrefix).substr(1))).css(o._options.startUpHide),o.$domNodes.windowLoadingCover.length?o.enableScrolling().$domNodes.windowLoadingCover.animate.apply(o.$domNodes.windowLoadingCover,o._options.windowLoadingCoverHideAnimation):o._options.windowLoadingCoverHideAnimation[1].always()},this._options.additionalPageLoadingTimeInMilliseconds),this},t.prototype._handleStartUpEffects=function(o){var t=this;return this.$domNodes.windowLoadingCover.hide(),this.$domNodes.windowLoadingSpinner.spin(!1),l["default"].isNumeric(o)||(o=1),(0,l["default"])(this.constructor.stringFormat('[class^="{1}"], [class*=" {1}"]',this.sliceDomNodeSelectorPrefix(this._options.domNode.startUpAnimationClassPrefix).substr(1))).length?setTimeout(function(){var e=!1;t._options.startUpShowAnimation[1].always=function(){e&&t.fireEvent("startUpAnimationComplete")};var n=(0,l["default"])(t._options.domNode.startUpAnimationClassPrefix+o);n.animate.apply(n,t._options.startUpShowAnimation),(0,l["default"])(t._options.domNode.startUpAnimationClassPrefix+(o+1)).length?t._handleStartUpEffects(o+1):e=!0},this._options.startUpAnimationElementDelayInMiliseconds):this.fireEvent("startUpAnimationComplete"),this},t.prototype._addNavigationEvents=function(){var o=this;return"addEventListener"in u&&u.addEventListener("hashchange",function(){o.startUpAnimationIsComplete&&o.fireEvent("switchSection",!1,o,location.hash.substring("#".length))},!1),this._handleScrollToTopButton()},t.prototype._handleScrollToTopButton=function(){var o=this;return this.on(this.$domNodes.scrollToTopButton,"click",function(t){t.preventDefault(),o._scrollToTop()}),this},t.prototype._scrollToTop=function(){var o=arguments.length<=0||void 0===arguments[0]?l["default"].noop():arguments[0];if(!("document"in u))return this;if(this._options.scrollToTop.options.onAfter=o,Object.defineProperty(u.document,"body",{value:(0,l["default"])("body")[0]}),this._options.scrollToTop.inLinearTime){var t=this.$domNodes.window.scrollTop();this._options.scrollToTop.options.duration=t/4,this.$domNodes.window.scrollTo({top:"-="+t,left:"+=0"},this._options.scrollToTop.options)}else(0,l["default"])(window).scrollTo({top:0,left:0},this._options.scrollToTop.options);return this},t.prototype._handleAnalyticsInitialisation=function(){var o=this;if(this._options.trackingCode&&"__none__"!==this._options.trackingCode&&"location"in u&&"localhost"!==u.location.hostname){this.debug('Run analytics code: "'+this._analyticsCode.initial+'"',this._options.trackingCode,this._options.domain,this.currentSectionName);try{new Function(this.constructor.stringFormat(this._analyticsCode.initial,this._options.trackingCode,this._options.domain,this.currentSectionName))()}catch(t){this.warn("Problem in analytics initial code snippet: {1}",t)}this.on(this.$domNodes.parent.find("a, button"),"click",function(t){var e=(0,l["default"])(t.target);o.triggerAnalyticsEvent(o.currentSectionName,"click",e.text(),t.data||{},e.attr("website-analytics-value")||1)})}return this},t}(l["default"].Tools["class"]);p._name="Website",l["default"].Website=function(){return l["default"].Tools().controller(p,arguments)},l["default"].Website["class"]=p,t["default"]=p}).call(t,function(){return this}(),e(3)(o))},function(o,t){},function(o,t){o.exports=function(o){return o.webpackPolyfill||(o.deprecate=function(){},o.paths=[],o.children=[],o.webpackPolyfill=1),o}},function(t,e){t.exports=o},function(o,e){o.exports=t},function(o,t){o.exports=e},function(o,t){o.exports=n},function(o,t){o.exports=i}])});