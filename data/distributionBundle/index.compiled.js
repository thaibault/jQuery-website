'use strict';
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("clientnode"), require("internationalisation"), require('jQuery-scrollTo'), require('jQuery-spin'));
	else if(typeof define === 'function' && define.amd)
		define("website-utilities", ["clientnode", "internationalisation", 'jQuery-scrollTo', 'jQuery-spin'], factory);
	else if(typeof exports === 'object')
		exports["website-utilities"] = factory(require("clientnode"), require("internationalisation"), require('jQuery-scrollTo'), require('jQuery-spin'));
	else
		root['websiteUtilities'] = factory(root["clientnode"], root["internationalisation"], root["$.fn.scrollTo"], root["$.fn.spin"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// #!/usr/bin/env node
// -*- coding: utf-8 -*-
/** @module website-utilities *//* !
    region header
    [Project page](http://torben.website/websiteUtilities)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons
    naming 3.0 unported license.
    See http://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/// region imports
exports.__esModule=true;exports.$=undefined;var _clientnode=__webpack_require__(3);var _internationalisation=__webpack_require__(4);var _internationalisation2=_interopRequireDefault(_internationalisation);__webpack_require__(5);__webpack_require__(6);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{return Promise.resolve(value).then(function(value){step('next',value)},function(err){step('throw',err)})}}return step('next')})}}const $=exports.$=_clientnode.$;// endregion
// region types
// endregion
// region plugins/classes
/**
 * This plugin holds all needed methods to extend a whole website.###
 * @property static:_name - Defines this class name to allow retrieving them
 * after name mangling.
 *
 * @property $domNodes - Saves a set of references to all needed dom nodes.
 * @property currentMediaQueryMode - Saves current media query status depending
 * on available space in current browser window.
 * @property currentSectionName - Saves current section hash name.
 * @property languageHandler - Reference to the language switcher instance.
 * @property startUpAnimationIsComplete - Indicates whether start up animations
 * has finished.
 * @property viewportIsOnTop - Indicates whether current viewport is on top.
 *
 * @property _analyticsCode - Saves analytics code snippets to use for
 * referenced situations.
 * @property _analyticsCode.initial {string} - Initial string to use for
 * analyses on.
 * @property _analyticsCode.sectionSwitch {string} - Code to execute on each
 * section switch. Current page is available via "{1}" string formatting.
 * @property _analyticsCod.event {string} - Code to execute on each fired
 * event.
 * @property _options - Options extended by the options given to the
 * initializer method.
 * @property _parentOptions - Saves default options to extend by options given
 * to the initializer method.
 * @property _parentOptions.domNodeSelectorPrefix {string} - Selector prefix
 * for all nodes to take into account.
 * @property _parantOptions.onViewportMovesToTop {Function} - Callback to
 * trigger when viewport arrives at top.
 * @property _parantOptions.onViewportMovesAwayFromTop {Function} - Callback to
 * trigger when viewport moves away from top.
 * @property _parentOptions.onChangeToLargeMode {Function} - Callback to
 * trigger if media query mode changes to large mode.
 * @property _parentOptions.onChangeToMediumMode {Function} - Callback to
 * trigger if media query mode changes to medium mode.
 * @property _parentOptions.onChangeToSmallMode {Function} - Callback to
 * trigger if media query mode changes to small mode.
 * @property _parentOptions.onChangeToExtraSmallMode {Function} - Callback to
 * trigger if media query mode changes to extra small mode.
 * @property _parentOptions.onChangeMediaQueryMode {Function} - Callback to
 * trigger if media query mode changes.
 * @property _parentOptions.onSwitchSection {Function} - Callback to trigger if
 * current section switches.
 * @property _parentOptions.onStartUpAnimationComplete {Function} - Callback to
 * trigger if all start up animations has finished.
 * @property _parentOptions.knownScrollEventNames {string} - Saves all known
 * scroll events in a space separated string.
 * @property _parentOption.switchToManualScrollingIndicator {Function} -
 * Indicator function to stop currently running scroll animations to let the
 * user get control of current scrolling behavior. Given callback gets an event
 * object. If the function returns "true" current animated scrolls will be
 * stopped.
 * @property _parentOptions.additionalPageLoadingTimeInMilliseconds {Number} -
 * Additional time to wait until page will be indicated as loaded.
 * @property _parentOptions.trackingCode - Analytic tracking code to collect
 * user behavior data.
 * @property _parentOptions.mediaQueryClassNameIndicator
 * {Array.Array.<string>} - Mapping of media query class indicator names to
 * internal event names.
 * @property _parentOptions.domNode {Object.<string, string>} - Mapping of
 * dom node descriptions to their corresponding selectors.
 * @property _parentOptions.domNode.mediaQueryIndicator {string} - Selector
 * for indicator dom node to use to trigger current media query mode.
 * @property _parentOptions.domNode.top {string} - Selector to indicate that
 * viewport is currently on top.
 * @property _parentOptions.domNode.scrollToTopButton {string} - Selector for
 * starting an animated scroll to top.
 * @property _parentOption.domNode.startUpAnimationClassPrefix {string} -
 * Class name selector prefix for all dom nodes to appear during start up
 * animations.
 * @property _parentOptions.domNode.windowLoadingCover {string} - Selector
 * to the full window loading cover dom node.
 * @property _parentOptions.domNode.windowLoadingSpinner {string} - Selector
 * to the window loading spinner (on top of the window loading cover).
 * @property _parentOption.startUpShowAnimation {Object} - Options for startup
 * show in animation.
 * @property _parentOption.startUpHide {Object} - Options for initially hiding
 * dom nodes showing on startup later.
 * @property _parentOptions.windowLoadingCoverHideAnimation {Object} - Options
 * for startup loading cover hide animation.
 * @property _parentOptions.startUpAnimationElementDelayInMiliseconds {number}
 * - Delay between two startup animated dom nodes in order.
 * @property _parentOptions.windowLoadingSpinner {Object} - Options for the
 * window loading cover spinner.
 * @property _parentOptions.activateLanguageSupport {boolean} - Indicates
 * whether language support should be used or not.
 * @property _parentOptions.language {Object} - Options for client side
 * internationalisation handler.
 * @property _parentOptions.scrollTop {Object} - Options for automated scroll
 * top animation.
 * @property _parentOptions.domain {string} - Sets current domain name. If
 * "auto" is given it will be determined automatically.
 */class Website extends $.Tools.class{// region public methods
// / region special
/**
     * Initializes the interactive web application.
     * @param options - An options object.
     * @param parentOptions - A default options object.
     * @param startUpAnimationIsComplete - If set to "true", no start up
     * animation will be performed.
     * @param currentSectionName - Initial section name to use.
     * @param viewportIsOnTop - Indicates whether viewport is on top initially.
     * @param currentMediaQueryMode - Initial media query mode to use (until
     * first window resize event could trigger a change).
     * @param languageHandler - Language handler instance to use.
     * @param analyticsCode - Analytic code snippet to use.
     * @returns Returns the current instance.
     */initialize(options={},parentOptions={activateLanguageSupport:true,additionalPageLoadingTimeInMilliseconds:0,domain:'auto',domNode:{mediaQueryIndicator:'<div class="media-query-indicator">',top:'header',scrollToTopButton:'a[href="#top"]',startUpAnimationClassPrefix:'.website-start-up-animation-number-',windowLoadingCover:'.website-window-loading-cover',windowLoadingSpinner:'.website-window-loading-cover > div'},domNodeSelectorPrefix:'body.{1}',knownScrollEventNames:'scroll mousedown wheel DOMMouseScroll mousewheel keyup '+'touchmove',language:{},mediaQueryClassNameIndicator:[['extraSmall','xs'],['small','sm'],['medium','md'],['large','lg']],onViewportMovesToTop:Website.noop,onViewportMovesAwayFromTop:Website.noop,onChangeToLargeMode:Website.noop,onChangeToMediumMode:Website.noop,onChangeToSmallMode:Website.noop,onChangeToExtraSmallMode:Website.noop,onChangeMediaQueryMode:Website.noop,onSwitchSection:Website.noop,onStartUpAnimationComplete:Website.noop,startUpAnimationElementDelayInMiliseconds:100,startUpShowAnimation:[{opacity:1},{}],startUpHide:{opacity:0},switchToManualScrollingIndicator:function switchToManualScrollingIndicator(event){return event.which>0||event.type==='mousedown'||event.type==='mousewheel'||event.type==='touchmove'},scrollToTop:{inLinearTime:false,options:{duration:'normal'},button:{slideDistanceInPixel:30,showAnimation:{duration:'normal'},hideAnimation:{duration:'normal'}}},trackingCode:null,windowLoadingCoverHideAnimation:[{opacity:0},{}],windowLoadingSpinner:{lines:9,// The number of lines to draw
length:23,// The length of each line
width:11,// The line thickness
radius:40,// The radius of the inner circle
corners:1,// Corner roundness (0..1)
rotate:75,// The rotation offset
color:'#000',// #rgb or #rrggbb
speed:1.1,// Rounds per second
trail:58,// Afterglow percentage
shadow:false,// Whether to render a shadow
hwaccel:false,// Whether to use hardware acceleration
className:'spinner',// CSS class to assign to the spinner
zIndex:2e9,// The z-index (defaults to 2000000000)
top:'auto',// Top position relative to parent in px
left:'auto'// Left position relative to parent in px
},windowLoadedTimeoutAfterDocumentLoadedInMilliseconds:2000},startUpAnimationIsComplete=false,currentSectionName=null,viewportIsOnTop=false,currentMediaQueryMode='',languageHandler=null,analyticsCode={initial:`
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=`+'i[r]||function(){'+'(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*'+'new window.Date();'+'a=s.createElement(o),m=s.getElementsByTagName(o)[0];'+'a.async=1;a.src=g;'+'m.parentNode.insertBefore(a,m)})('+`window,document,'script','//www.google-analytics.com/`+`analytics.js','ga');`+`window.ga('create', '{1}', '{2}');
                window.ga('set', 'anonymizeIp', true);
                window.ga('send', 'pageview', {page: '{3}'});
            `,sectionSwitch:`window.ga('send', 'pageview', {page: '{1}'});`,event:`window.ga(
                'send', 'event', eventCategory, eventAction, eventLabel,
                eventValue, eventData);
            `}){var _this=this;this._parentOptions=parentOptions;this.startUpAnimationIsComplete=startUpAnimationIsComplete;this.viewportIsOnTop=viewportIsOnTop;this.currentMediaQueryMode=currentMediaQueryMode;this.languageHandler=languageHandler;this._analyticsCode=analyticsCode;if(currentSectionName)this.currentSectionName=currentSectionName;else if('location'in $.global&&$.global.location.hash)this.currentSectionName=$.global.location.hash.substring('#'.length);else this.currenSectionName='home';// Wrap event methods with debounceing handler.
// IgnoreTypeCheck
this._onViewportMovesToTop=this.constructor.debounce(this._onViewportMovesToTop.bind(this));// IgnoreTypeCheck
this._onViewportMovesAwayFromTop=this.constructor.debounce(this._onViewportMovesAwayFromTop.bind(this));this._options=this.constructor.extendObject(true,{},this._parentOptions,this._options);super.initialize(options);this.$domNodes=this.grabDomNode(this._options.domNode);this.disableScrolling();return new Promise(function(resolve){_this._options.windowLoadingCoverHideAnimation[1].always=function(){_this._handleStartUpEffects();resolve(_this)};if(_this.$domNodes.windowLoadingSpinner.length)_this.$domNodes.windowLoadingSpinner.spin(_this._options.windowLoadingSpinner);_this._bindScrollEvents().$domNodes.parent.show();if('window'in _this.$domNodes){const onLoaded=function onLoaded(){if(!_this.windowLoaded){_this.windowLoaded=true;_this._removeLoadingCover()}};$(function(){return _this.constructor.timeout(onLoaded,_this._options.windowLoadedTimeoutAfterDocumentLoadedInMilliseconds)});_this.on(_this.$domNodes.window,'load',onLoaded)}_this._addNavigationEvents()._addMediaQueryChangeEvents()._triggerWindowResizeEvents()._handleAnalyticsInitialisation();if(!_this._options.language.logging)_this._options.language.logging=_this._options.logging;if(_this._options.activateLanguageSupport&&!_this.languageHandler)$.Language(_this._options.language).then(function(languageHandler){_this.languageHandler=languageHandler})})}// endregion
/**
     * Scrolls to top of page. Runs the given function after viewport arrives.
     * @param onAfter - Callback to call after effect has finished.
     * @returns Returns the current instance.
     */scrollToTop(onAfter=Website.noop){if(!('document'in $.global))return this;this._options.scrollToTop.options.onAfter=onAfter;/*
            NOTE: This is a workaround to avoid a bug in "jQuery.scrollTo()"
            expecting this property exists.
        */Object.defineProperty($.global.document,'body',{value:$('body')[0]});if(this._options.scrollToTop.inLinearTime){const distanceToTopInPixel=this.$domNodes.window.scrollTop();// Scroll four times faster as we have distance to top.
this._options.scrollToTop.options.duration=distanceToTopInPixel/4;this.$domNodes.window.scrollTo({top:`-=${distanceToTopInPixel}`,left:'+=0'},this._options.scrollToTop.options)}else this.$domNodes.window.scrollTo({top:0,left:0},this._options.scrollToTop.options);return this}/**
     * This method disables scrolling on the given web view.
     * @returns Returns the current instance.
     */disableScrolling(){this.$domNodes.parent.addClass('disable-scrolling').on('touchmove',function(event){return event.preventDefault()});return this}/**
     * This method disables scrolling on the given web view.
     * @returns Returns the current instance.
     */enableScrolling(){this.off(this.$domNodes.parent.removeClass('disable-scrolling','touchmove'));return this}/**
     * Triggers an analytics event. All given arguments are forwarded to
     * configured analytics event code to defined their environment variables.
     * @param parameter - All parameter will be forwarded to the analytics
     * code.
     * @returns Returns the current instance.
     */triggerAnalyticsEvent(...parameter){if(this._options.trackingCode&&'location'in $.global&&$.global.location.hostname!=='localhost'){this.debug('Run analytics code: "#{this._analyticsCode.event}" with '+'arguments:');this.debug(parameter);try{new Function('eventCategory','eventAction','eventLabel','eventData','eventValue',this._analyticsCode.event).call(this,...parameter)}catch(exception){this.warn('Problem in google analytics event code snippet: {1}',exception)}}return this}// endregion
// region protected methods
// / region event
/**
     * This method triggers if the viewport moves to top.
     * @returns Returns the current instance.
     */_onViewportMovesToTop(){var _this2=this;if(this.$domNodes.scrollToTopButton.css('visibility')==='hidden')this.$domNodes.scrollToTopButton.css('opacity',0);else{this._options.scrollToTop.button.hideAnimation.always=function(){return _this2.$domNodes.scrollToTopButton.css({bottom:`-=${_this2._options.scrollToTop.button.slideDistanceInPixel}`,display:'none'})};this.$domNodes.scrollToTopButton.finish().animate({bottom:'+='+this._options.scrollToTop.button.slideDistanceInPixel,opacity:0},this._options.scrollToTop.button.hideAnimation)}return this}/**
     * This method triggers if the viewport moves away from top.
     * @returns Returns the current instance.
     */_onViewportMovesAwayFromTop(){if(this.$domNodes.scrollToTopButton.css('visibility')==='hidden')this.$domNodes.scrollToTopButton.css('opacity',1);else this.$domNodes.scrollToTopButton.finish().css({bottom:'+='+this._options.scrollToTop.button.slideDistanceInPixel,display:'block',opacity:0}).animate({bottom:'-='+this._options.scrollToTop.button.slideDistanceInPixel,queue:false,opacity:1},this._options.scrollToTop.button.showAnimation);return this}/* eslint-disable no-unused-vars *//**
     * This method triggers if the responsive design switches to another mode.
     * @param oldMode - Saves the previous mode.
     * @param newMode - Saves the new mode.
     * @returns Returns the current instance.
     */_onChangeMediaQueryMode(oldMode,newMode){return this}/**
     * This method triggers if the responsive design switches to large mode.
     * @param oldMode - Saves the previous mode.
     * @param newMode - Saves the new mode.
     * @returns Returns the current instance.
     */_onChangeToLargeMode(oldMode,newMode){return this}/**
     * This method triggers if the responsive design switches to medium mode.
     * @param oldMode - Saves the previous mode.
     * @param newMode - Saves the new mode.
     * @returns Returns the current instance.
     */_onChangeToMediumMode(oldMode,newMode){return this}/**
     * This method triggers if the responsive design switches to small mode.
     * @param oldMode - Saves the previous mode.
     * @param newMode - Saves the new mode.
     * @returns Returns the current instance.
     */_onChangeToSmallMode(oldMode,newMode){return this}/**
     * This method triggers if the responsive design switches to extra small
     * mode.
     * @param oldMode - Saves the previous mode.
     * @param newMode - Saves the new mode.
     * @returns Returns the current instance.
     */_onChangeToExtraSmallMode(oldMode,newMode){return this}/* eslint-enable no-unused-vars *//**
     * This method triggers if we change the current section.
     * @param sectionName - Contains the new section name.
     * @returns Returns the current instance.
     */_onSwitchSection(sectionName){if(this._options.trackingCode&&this._options.trackingCode!=='__none__'&&'location'in $.global&&$.global.location.hostname!=='localhost'&&this.currentSectionName!==sectionName){this.currentSectionName=sectionName;this.debug(`Run analytics code: "${this._analyticsCode.sectionSwitch}"`,this.currentSectionName);try{new Function(this.constructor.stringFormat(this._analyticsCode.sectionSwitch,this.currentSectionName))()}catch(exception){this.warn('Problem in analytics section switch code snippet: {1}',exception)}}return this}/**
     * This method is complete if last startup animation was initialized.
     * @returns Returns the current instance.
     */_onStartUpAnimationComplete(){this.startUpAnimationIsComplete=true;return this}// endregion
// / region helper
/**
     * This method adds triggers for responsive design switches.
     * @returns Returns the current instance.
     */_addMediaQueryChangeEvents(){this.on(this.$domNodes.window,'resize',this._triggerWindowResizeEvents.bind(this));return this}/**
     * This method triggers if the responsive design switches its mode.
     * @param parameter - All arguments will be appended to the event handler
     * callbacks.
     * @returns Returns the current instance.
     */_triggerWindowResizeEvents(...parameter){for(const classNameMapping of this._options.mediaQueryClassNameIndicator){this.$domNodes.mediaQueryIndicator.prependTo(this.$domNodes.parent).addClass(`hidden-${classNameMapping[1]}`);if(this.$domNodes.mediaQueryIndicator.is(':hidden')&&classNameMapping[0]!==this.currentMediaQueryMode){this.fireEvent('changeMediaQueryMode',false,this,this.currentMediaQueryMode,classNameMapping[0],...parameter);this.fireEvent(this.constructor.stringFormat(`changeTo{1}Mode`,this.constructor.stringCapitalize(classNameMapping[0])),false,this,this.currentMediaQueryMode,classNameMapping[0],...parameter);this.currentMediaQueryMode=classNameMapping[0]}this.$domNodes.mediaQueryIndicator.removeClass(`hidden-${classNameMapping[1]}`)}return this}/**
     * This method triggers if view port arrives at special areas.
     * @param parameter - All arguments will be appended to the event handler
     * callbacks.
     * @returns Returns the current instance.
     */_bindScrollEvents(...parameter){var _this3=this;// Stop automatic scrolling if the user wants to scroll manually.
if(!('window'in this.$domNodes))return this;const $scrollTarget=$('body, html').add(this.$domNodes.window);$scrollTarget.on(this._options.knownScrollEventNames,function(event){if(_this3._options.switchToManualScrollingIndicator(event))$scrollTarget.stop(true)});this.on(this.$domNodes.window,'scroll',function(){if(_this3.$domNodes.window.scrollTop()){if(_this3.viewportIsOnTop){_this3.viewportIsOnTop=false;_this3.fireEvent('viewportMovesAwayFromTop',false,_this3,...parameter)}}else if(!_this3.viewportIsOnTop){_this3.viewportIsOnTop=true;_this3.fireEvent('viewportMovesToTop',false,_this3,...parameter)}});if(this.$domNodes.window.scrollTop()){this.viewportIsOnTop=false;this.fireEvent('viewportMovesAwayFromTop',false,this,...parameter)}else{this.viewportIsOnTop=true;this.fireEvent('viewportMovesToTop',false,this,...parameter)}return this}/**
     * This method triggers after window is loaded.
     * @returns Returns the current instance.
     */_removeLoadingCover(){var _this4=this;return _asyncToGenerator(function*(){yield _this4.constructor.timeout(_this4._options.additionalPageLoadingTimeInMilliseconds);// Hide startup animation dom nodes to show them step by step.
$(_this4.constructor.stringFormat('[class^="{1}"], [class*=" {1}"]',_this4.sliceDomNodeSelectorPrefix(_this4._options.domNode.startUpAnimationClassPrefix).substr(1))).css(_this4._options.startUpHide);if(_this4.$domNodes.windowLoadingCover.length)_this4.enableScrolling().$domNodes.windowLoadingCover.animate(..._this4._options.windowLoadingCoverHideAnimation);else _this4._options.windowLoadingCoverHideAnimation[1].always();return _this4})()}/**
     * This method handles the given start up effect step.
     * @param elementNumber - The current start up step.
     * @returns Returns the current instance.
     */_handleStartUpEffects(elementNumber=1){var _this5=this;return _asyncToGenerator(function*(){// Stop and delete spinner instance.
_this5.$domNodes.windowLoadingCover.hide();if(_this5.$domNodes.windowLoadingSpinner.length)_this5.$domNodes.windowLoadingSpinner.spin(false);if($(_this5.constructor.stringFormat('[class^="{1}"], [class*=" {1}"]',_this5.sliceDomNodeSelectorPrefix(_this5._options.domNode.startUpAnimationClassPrefix).substr(1))).length){yield _this5.constructor.timeout(_this5._options.startUpAnimationElementDelayInMiliseconds);let lastElementTriggered=false;_this5._options.startUpShowAnimation[1].always=function(){if(lastElementTriggered)_this5.fireEvent('startUpAnimationComplete')};const $domNode=$(_this5._options.domNode.startUpAnimationClassPrefix+elementNumber);$domNode.animate(..._this5._options.startUpShowAnimation);if($(_this5._options.domNode.startUpAnimationClassPrefix+(elementNumber+1)).length)yield _this5._handleStartUpEffects(elementNumber+1);else lastElementTriggered=true}else _this5.fireEvent('startUpAnimationComplete');return _this5})()}/**
     * This method adds triggers to switch section.
     * @returns Returns the current instance.
     */_addNavigationEvents(){var _this6=this;if('addEventListener'in $.global)$.global.addEventListener('hashchange',function(){if(_this6.startUpAnimationIsComplete)_this6.fireEvent('switchSection',false,_this6,location.hash.substring('#'.length))},false);return this._handleScrollToTopButton()}/**
     * Adds trigger to scroll top buttons.
     * @returns Returns the current instance.
     */_handleScrollToTopButton(){var _this7=this;this.on(this.$domNodes.scrollToTopButton,'click',function(event){event.preventDefault();_this7.scrollToTop()});return this}/**
     * Executes the page tracking code.
     * @returns Returns the current instance.
     */_handleAnalyticsInitialisation(){var _this8=this;if(this._options.trackingCode&&this._options.trackingCode!=='__none__'&&'location'in $.global&&$.global.location.hostname!=='localhost'){this.debug(`Run analytics code: "${this._analyticsCode.initial}"`,this._options.trackingCode,this._options.domain,this.currentSectionName);try{new Function(this.constructor.stringFormat(this._analyticsCode.initial,this._options.trackingCode,this._options.domain,this.currentSectionName))()}catch(exception){this.warn('Problem in analytics initial code snippet: {1}',exception)}this.on(this.$domNodes.parent.find('a, button'),'click',function(event){const $domNode=$(event.target);_this8.triggerAnalyticsEvent(_this8.currentSectionName,'click',$domNode.text(),event.data||{},$domNode.attr('website-analytics-value')||1)})}return this}// / endregion
// endregion
}exports.default=Website;// endregion
Website._name='Website';$.Website=function(...parameter){return $.Tools().controller(Website,parameter)};$.Website.class=Website;// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ })
/******/ ]);
});