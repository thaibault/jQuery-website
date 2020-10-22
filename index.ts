// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module website-utilities */
'use strict'
/* !
    region header
    [Project page](https://torben.website/websiteUtilities)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import Tools, {$, globalContext} from 'clientnode'
import {$DomNode, TimeoutPromise} from 'clientnode/type'
import Internationalisation from 'internationalisation'
import 'jQuery-scrollTo'
import {Spinner} from 'spin.js'

import {$DomNodes, Options} from './type'
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
 * @property windowLoadingSpinner - The window loading spinner instance.
 *
 * @property _options - Options extended by the options given to the
 * initializer method.
 * @property _options.activateLanguageSupport - Indicates whether language
 * support should be used or not.
 * @property _options.additionalPageLoadingTimeInMilliseconds - Additional time
 * to wait until page will be indicated as loaded.
 * @property _options.domNodes - Mapping of dom node descriptions to their
 * corresponding selectors.
 * @property _options.domNodes.mediaQueryIndicator - Selector for indicator dom
 * node to use to trigger current media query mode.
 * @property _options.domNodes.top - Selector to indicate that viewport is
 * currently on top.
 * @property _options.domNodes.scrollToTopButton - Selector for starting an
 * animated scroll to top.
 * @property _options.domNodes.startUpAnimationClassPrefix - Class name
 * selector prefix for all dom nodes to appear during start up animations.
 * @property _options.domNodes.windowLoadingCover - Selector to the full window
 * loading cover dom node.
 * @property _options.domNodes.windowLoadingSpinner - Selector to the window
 * loading spinner (on top of the window loading cover).
 * @property _options.domNodeSelectorPrefix - Selector prefix for all nodes to
 * take into account.
 * @property _options.initialSectionName - Pre-selected section name.
 * @property _options.knownScrollEventNames - Saves all known scroll events in
 * a space separated string.
 * @property _optionsnpm i @types/spin.js.language - Options for client side internationalisation
 * handler.
 * @property _options.mediaQueryClassNameIndicator - Mapping of media query
 * class indicator names to internal event names.
 * @property _options.onChangeMediaQueryMode - Callback to trigger if media
 * query mode changes.
 * @property _options.onChangeToExtraSmallMode - Callback to trigger if media
 * query mode changes to extra small mode.
 * @property _options.onChangeToLargeMode - Callback to trigger if media query
 * mode changes to large mode.
 * @property _options.onChangeToMediumMode - Callback to trigger if media query
 * mode changes to medium mode.
 * @property _options.onChangeToSmallMode - Callback to trigger if media query
 * mode changes to small mode.
 * @property _options.onStartUpAnimationComplete - Callback to trigger if all
 * start up animations has finished.
 * @property _options.onSwitchSection - Callback to trigger if current section
 * switches.
 * @property _options.onViewportMovesAwayFromTop - Callback to trigger when
 * viewport moves away from top.
 * @property _options.onViewportMovesToTop - Callback to trigger when viewport
 * arrives at top.
 * @property _options.scrollToTop - Options for automated scroll top animation.
 * @property _options.startUpAnimationElementDelayInMiliseconds - Delay between
 * two startup animated dom nodes in order.
 * @property _options.startUpHide - Options for initially hiding dom nodes
 * showing on startup later.
 * @property _options.startUpShowAnimation - Options for startup show in
 * animation.
 * @property _options.switchToManualScrollingIndicator - Indicator function to
 * stop currently running scroll animations to let the user get control of
 * current scrolling behavior. Given callback gets an event object. If the
 * function returns "true" current animated scrolls will be stopped.
 * @property _options.tracking - Tracking configuration to collect user's
 * behavior data.
 * @property _options.tracking.event - Function to call an events.
 * @property _options.tracking.initial - Function to initialize tracker.
 * @property _options.tracking.key - Key to identify tracking account.
 * @property _options.tracking.sectionSwitch - Function to call on section
 * switches.
 * @property _options.windowLoadingCoverHideAnimation - Options for startup
 * loading cover hide animation.
 * @property _options.windowLoadingSpinner - Options for the window loading
 * cover spinner.
 * @property _options.windowLoadingTimeoutAfterDocumentLoadedInMilliseconds -
 * Duration after loading cover should be removed.
 */
export class WebsiteUtilities extends Tools {
    static readonly _name:'WebsiteUtilities' = 'WebsiteUtilities'

    $domNodes:$DomNodes = null as unknown as $DomNodes
    currentMediaQueryMode:string = ''
    currentSectionName:string = 'home'
    languageHandler:Internationalisation|null = null
    readonly self:typeof WebsiteUtilities = WebsiteUtilities
    startUpAnimationIsComplete:boolean = false
    viewportIsOnTop:boolean = false
    windowLoadingSpinner:null|Spinner = null

    _options:Options = {
        activateLanguageSupport: true,
        additionalPageLoadingTimeInMilliseconds: 0,
        domain: 'auto',
        domNode: {
            mediaQueryIndicator: '<div class="media-query-indicator">',
            top: 'header',
            scrollToTopButton: 'a[href="#top"]',
            startUpAnimationClassPrefix: '.website-start-up-animation-number-',
            windowLoadingCover: '.website-utilities-window-loading-cover',
            windowLoadingSpinner:
                '.website-utilities-window-loading-cover > div'
        },
        domNodeSelectorPrefix: 'body.{1}',
        initialSectionName: 'home',
        knownScrollEventNames: [
            'DOMMouseScroll',
            'keyup',
            'mousedown',
            'mousewheel',
            'scroll',
            'touchmove',
            'wheel'
        ],
        language: {},
        mediaQueryClassNameIndicator: [
            ['extraSmall', 'xs'],
            ['small', 'sm'],
            ['medium', 'md'],
            ['large', 'lg']
        ],
        onChangeMediaQueryMode: Tools.noop,
        onChangeToExtraSmallMode: Tools.noop,
        onChangeToLargeMode: Tools.noop,
        onChangeToMediumMode: Tools.noop,
        onChangeToSmallMode: Tools.noop,
        onViewportMovesAwayFromTop: Tools.noop,
        onViewportMovesToTop: Tools.noop,
        onSwitchSection: Tools.noop,
        onStartUpAnimationComplete: Tools.noop,
        scrollToTop: {
            button: {
                slideDistanceInPixel: 30,
                showAnimation: {duration: 'normal'},
                hideAnimation: {duration: 'normal'}
            },
            inLinearTime: false,
            options: {duration: 'normal'}
        },
        startUpAnimationElementDelayInMiliseconds: 100,
        startUpHide: {opacity: 0},
        startUpShowAnimation: [{opacity: 1}, {}],
        switchToManualScrollingIndicator: (event:Object):boolean => (
            event.which > 0 ||
            event.type === 'mousedown' ||
            event.type === 'mousewheel' ||
            event.type === 'touchmove'
        ),
        tracking: {
            event: (
                category:string,
                action:string,
                label:string,
                value:any,
                data:any
            ):void => {
                if (!globalContext.dataLayer)
                    globalContext.dataLayer = []
                globalContext.dataLayer.push({
                    category, action, label, value, data
                })
            },
            sectionSwitch: function(sectionName:string):void {
                this._options.tracking.event(
                    'sectionSwitch', 'sectionSwitch', sectionName
                )
            }
        },
        windowLoadingCoverHideAnimation: [{opacity: 0}, {}],
        windowLoadingSpinner: {
            animation: 'spinner-line-fade-quick',
            className: 'spinner',
            color: '#000',
            // Corner roundness (0..1)
            corners: 1,
            // 1: clockwise, -1: counterclockwise
            direction: 1,
            // CSS color or array of colors
            fadeColor: 'transparent',
            // Left position relative to parent in px
            left: 'auto',
            // The length of each line
            length: 23,
            // The number of lines to draw
            lines: 9,
            position: 'absolute',
            // The radius of the inner circle
            radius: 40,
            // The rotation offset
            rotate: 0,
            // Scales overall size of the spinner
            scale: 1,
            shadow: false,
            // Rounds per second
            speed: 1.1,
            // Top position relative to parent in px
            top: 'auto',
            // The line thickness
            width: 11,
            // The z-index (defaults to 2000000000)
            zIndex: 2e9
        },
        windowLoadedTimeoutAfterDocumentLoadedInMilliseconds: 2000
    }
    // region public methods
    // / region special
    /**
     * Initializes the interactive web application.
     * @param options - An options object.
     * @returns Returns the current instance.
     */
    initialize(options:Partial<Options> = {}):Promise<WebsiteUtilities> {
        super.initialize(options)
        if (this._options.initialSectionName)
            this.currentSectionName = this._options.initialSectionName
        else if (
            globalContext.window &&
            globalContext.window.location &&
            globalContext.window.location.hash
        )
            this.currentSectionName = globalContext.location.hash.substring(
                '#'.length
            )
        // Wrap event methods with debounce handler.
        this._onViewportMovesAwayFromTop = Tools.debounce(
            this._onViewportMovesAwayFromTop.bind(this)
        )
        this._onViewportMovesToTop = Tools.debounce(
            this._onViewportMovesToTop.bind(this)
        )
        this.$domNodes = this.grabDomNode(this._options.domNodes)
        this.disableScrolling()
        return new Promise(async (resolve:Function):Promise<void> => {
            this._options.windowLoadingCoverHideAnimation[1].always =
                ():void => {
                    this._handleStartUpEffects()
                    resolve(this)
                }
            if (this.$domNodes.windowLoadingSpinner.length) {
                this.windowLoadingSpinner =
                    new Spinner(this._options.windowLoadingSpinner)
                this.windowLoadingSpinner.spin(
                    this.$domNodes.windowLoadingSpinner[0]
                )
            }
            this._bindScrollEvents()
            this.$domNodes.parent.show()
            if (this.$domNodes.window) {
                const onLoaded:Function = ():void => {
                    if (!this.windowLoaded) {
                        this.windowLoaded = true
                        this._removeLoadingCover()
                    }
                }
                $(():TimeoutPromise => Tools.timeout(
                    onLoaded,
                    this._options
                        .windowLoadedTimeoutAfterDocumentLoadedInMilliseconds
                ))
                this.on(this.$domNodes.window, 'load', onLoaded)
            }
            this._initializeTracking()
            if (!this._options.language.logging)
                this._options.language.logging = this._options.logging
            if (this._options.activateLanguageSupport && !this.languageHandler)
                this.languageHandler = (await $(this.$domNodes.parent)
                    .Internationalisation(this._options.internationalisation)
                ).data(Internationalisation._name)
            this._addNavigationEvents()
            this._addMediaQueryChangeEvents()
            this._triggerWindowResizeEvents()
        })
    }
    // endregion
    /**
     * Scrolls to top of page. Runs the given function after viewport arrives.
     * @param onAfter - Callback to call after effect has finished.
     * @returns Returns the current instance.
     */
    scrollToTop(onAfter:Function = Tools.noop):WebsiteUtilities {
        if (!(globalContext.window && globalContext.document))
            return this
        this._options.scrollToTop.options.onAfter = onAfter
        /*
            NOTE: This is a workaround to avoid a bug in "jQuery.scrollTo()"
            expecting this property exists.
        */
        Object.defineProperty(
            globalContext.window.document, 'body', {value: $('body')[0]}
        )
        if (this._options.scrollToTop.inLinearTime) {
            const distanceToTopInPixel:number =
                this.$domNodes.window.scrollTop()
            // Scroll four times faster as we have distance to top.
            this._options.scrollToTop.options.duration =
                distanceToTopInPixel / 4
            this.$domNodes.window.scrollTo(
                {left: '+=0', top: `-=${distanceToTopInPixel}`},
                this._options.scrollToTop.options
            )
        } else
            this.$domNodes.window.scrollTo(
                {left: 0, top: 0}, this._options.scrollToTop.options
            )
        return this
    }
    /**
     * This method disables scrolling on the given web view.
     * @returns Returns the current instance.
     */
    disableScrolling():WebsiteUtilities {
        this.$domNodes.parent
            .addClass('disable-scrolling')
            .on('touchmove', (event:Event):void => event.preventDefault())
        return this
    }
    /**
     * This method disables scrolling on the given web view.
     * @returns Returns the current instance.
     */
    enableScrolling():WebsiteUtilities {
        this.off(
            this.$domNodes.parent.removeClass('disable-scrolling', 'touchmove')
        )
        return this
    }
    /**
     * Triggers an analytics event. All given arguments are forwarded to
     * configured analytics event code to defined their environment variables.
     * @param parameter - All parameter will be forwarded to the tracker.
     * @returns Returns the current instance.
     */
    trackEvent(
        category:string = 'event',
        action:string = 'event',
        label?:string,
        value?:any,
        data?:any
    ):WebsiteUtilities {
        if (
            this._options.tracking.key &&
            globalContext.window &&
            globalContext.window.location &&
            globalContext.window.location.hostname !== 'localhost'
        ) {
            if (!label)
                label = this.currentSectionName
            this.debug('Run tracking code: "event" with arguments:')
            this.debug(parameter)
            try {
                this._options.tracking.event.call(
                    this, category, action, label, value, data
                )
            } catch (error) {
                this.warn(
                    `Problem in tracking event: ${Tools.represent(error)}`
                )
            }
        }
        return this
    }
    // endregion
    // region protected methods
    // / region event
    /**
     * This method triggers if the viewport moves to top.
     * @returns Nothing.
     */
    _onViewportMovesToTop():void {
        if (this.$domNodes.scrollToTopButton.css('visibility') === 'hidden')
            this.$domNodes.scrollToTopButton.css('opacity', 0)
        else {
            this._options.scrollToTop.button.hideAnimation.always = (
            ):$DomNode => this.$domNodes.scrollToTopButton.css({
                bottom:
                `-=${this._options.scrollToTop.button.slideDistanceInPixel}`,
                display: 'none'
            })
            this.$domNodes.scrollToTopButton.finish().animate(
                {
                    bottom: '+=' +
                        this._options.scrollToTop.button.slideDistanceInPixel,
                    opacity: 0
                },
                this._options.scrollToTop.button.hideAnimation
            )
        }
    }
    /**
     * This method triggers if the viewport moves away from top.
     * @returns Nothing.
     */
    _onViewportMovesAwayFromTop():void {
        if (this.$domNodes.scrollToTopButton.css('visibility') === 'hidden')
            this.$domNodes.scrollToTopButton.css('opacity', 1)
        else
            this.$domNodes.scrollToTopButton.finish()
                .css({
                    bottom: '+=' +
                        this._options.scrollToTop.button.slideDistanceInPixel,
                    display: 'block',
                    opacity: 0
                })
                .animate(
                    {
                        bottom: '-=' +
                            this._options.scrollToTop.button
                                .slideDistanceInPixel,
                        queue: false,
                        opacity: 1
                    },
                    this._options.scrollToTop.button.showAnimation
                )
    }
    /* eslint-disable no-unused-vars */
    /**
     * This method triggers if the responsive design switches to another mode.
     * @param oldMode - Saves the previous mode.
     * @param newMode - Saves the new mode.
     * @returns Nothing.
     */
    _onChangeMediaQueryMode(oldMode:string, newMode:string):void {}
    /**
     * This method triggers if the responsive design switches to large mode.
     * @param oldMode - Saves the previous mode.
     * @param newMode - Saves the new mode.
     * @returns Nothing.
     */
    _onChangeToLargeMode(oldMode:string, newMode:string):void {}
    /**
     * This method triggers if the responsive design switches to medium mode.
     * @param oldMode - Saves the previous mode.
     * @param newMode - Saves the new mode.
     * @returns Nothing.
     */
    _onChangeToMediumMode(oldMode:string, newMode:string):void {}
    /**
     * This method triggers if the responsive design switches to small mode.
     * @param oldMode - Saves the previous mode.
     * @param newMode - Saves the new mode.
     * @returns Nothing.
     */
    _onChangeToSmallMode(oldMode:string, newMode:string):void {}
    /**
     * This method triggers if the responsive design switches to extra small
     * mode.
     * @param oldMode - Saves the previous mode.
     * @param newMode - Saves the new mode.
     * @returns Nothing.
     */
    _onChangeToExtraSmallMode(oldMode:string, newMode:string):void {}
    /* eslint-enable no-unused-vars */
    /**
     * This method triggers if we change the current section.
     * @param sectionName - Contains the new section name.
     * @returns Nothing.
     */
    _onSwitchSection(sectionName:string):void {
        if (
            this._options.tracking.key &&
            globalContext.window &&
            globalContext.window.location &&
            globalContext.window.location.hostname !== 'localhost' &&
            this.currentSectionName !== sectionName
        ) {
            this.currentSectionName = sectionName
            this.debug(
                'Run section switch tracking on section "' +
                `${this.currentSectionName}".`
            )
            try {
                this._options.tracking.sectionSwitch.call(
                    this, this.currentSectionName
                )
            } catch (error) {
                this.warn(
                    'Problem due to track section switch to "' +
                    `${this.currentSectionName}": ${Tools.represent(error)}`
                )
            }
        }
    }
    /**
     * This method is complete if last startup animation was initialized.
     * @returns Nothing.
     */
    _onStartUpAnimationComplete():void {
        this.startUpAnimationIsComplete = true
    }
    // endregion
    // / region helper
    /**
     * This method adds triggers for responsive design switches.
     * @returns Nothing.
     */
    _addMediaQueryChangeEvents():void {
        this.on(
            this.$domNodes.window,
            'resize',
            this._triggerWindowResizeEvents.bind(this)
        )
    }
    /**
     * This method triggers if the responsive design switches its mode.
     * @param parameter - All arguments will be appended to the event handler
     * callbacks.
     * @returns Nothing.
     */
    _triggerWindowResizeEvents(...parameter:Array<any>):void {
        for (
            const classNameMapping of
                this._options.mediaQueryClassNameIndicator
        ) {
            this.$domNodes
                .mediaQueryIndicator
                .prependTo(this.$domNodes.parent)
                .addClass(`hidden-${classNameMapping[1]}`)
            if (
                this.$domNodes.mediaQueryIndicator.is(':hidden') &&
                classNameMapping[0] !== this.currentMediaQueryMode
            ) {
                this.fireEvent(
                    'changeMediaQueryMode',
                    false,
                    this,
                    this.currentMediaQueryMode,
                    classNameMapping[0],
                    ...parameter
                )
                this.fireEvent(
                    this.constructor.stringFormat(
                        `changeTo{1}Mode`,
                        this.constructor.stringCapitalize(classNameMapping[0])
                    ),
                    false,
                    this,
                    this.currentMediaQueryMode,
                    classNameMapping[0],
                    ...parameter
                )
                this.currentMediaQueryMode = classNameMapping[0]
            }
            this.$domNodes.mediaQueryIndicator.removeClass(
                `hidden-${classNameMapping[1]}`
            )
        }
    }
    /**
     * This method triggers if view port arrives at special areas.
     * @param parameter - All arguments will be appended to the event handler
     * callbacks.
     * @returns Nothing.
     */
    _bindScrollEvents(...parameter:Array<any>):void {
        // Stop automatic scrolling if the user wants to scroll manually.
        if (!this.$domNodes.window)
            return this
        const $scrollTarget:$DomNode =
            $('body, html').add(this.$domNodes.window)
        $scrollTarget.on(
            this._options.knownScrollEventNames.join(' '),
            (event:Event):void => {
                if (this._options.switchToManualScrollingIndicator(event))
                    $scrollTarget.stop(true)
            }
        )
        this.on(
            this.$domNodes.window,
            'scroll',
            ():void => {
                if (this.$domNodes.window.scrollTop()) {
                    if (this.viewportIsOnTop) {
                        this.viewportIsOnTop = false
                        this.fireEvent(
                            'viewportMovesAwayFromTop',
                            false,
                            this,
                            ...parameter
                        )
                    }
                } else if (!this.viewportIsOnTop) {
                    this.viewportIsOnTop = true
                    this.fireEvent(
                        'viewportMovesToTop', false, this, ...parameter
                    )
                }
            }
        )
        if (this.$domNodes.window.scrollTop()) {
            this.viewportIsOnTop = false
            this.fireEvent(
                'viewportMovesAwayFromTop', false, this, ...parameter
            )
        } else {
            this.viewportIsOnTop = true
            this.fireEvent('viewportMovesToTop', false, this, ...parameter)
        }
    }
    /**
     * This method triggers after window is loaded.
     * @returns Promise resolving to nothing when loading cover has been
     * removed.
     */
    async _removeLoadingCover():Promise<void> {
        await this.constructor.timeout(
            this._options.additionalPageLoadingTimeInMilliseconds
        )
        // Hide startup animation dom nodes to show them step by step.
        $(Tools.stringFormat(
            '[class^="{1}"], [class*=" {1}"]',
            this.sliceDomNodeSelectorPrefix(
                this._options.domNodes.startUpAnimationClassPrefix
            ).substr(1)
        )).css(this._options.startUpHide)
        if (this.$domNodes.windowLoadingCover.length) {
            this.enableScrolling()
            this.$domNodes.windowLoadingCover.animate(
                ...this._options.windowLoadingCoverHideAnimation
            )
        } else
            this._options.windowLoadingCoverHideAnimation[1].always()
    }
    /**
     * This method handles the given start up effect step.
     * @param elementNumber - The current start up step.
     * @returns Promise resolving to nothing when start up effects have been
     * finished.
     */
    async _handleStartUpEffects(elementNumber:number = 1):Promise<void> {
        // Stop and delete spinner instance.
        this.$domNodes.windowLoadingCover.hide()
        if (this.windowLoadingSpinner)
            this.windowLoadingSpinner.stop()
        if ($(this.constructor.stringFormat(
            '[class^="{1}"], [class*=" {1}"]',
            this.sliceDomNodeSelectorPrefix(
                this._options.domNodes.startUpAnimationClassPrefix
            ).substr(1)
        )).length) {
            await this.constructor.timeout(
                this._options.startUpAnimationElementDelayInMiliseconds
            )
            let lastElementTriggered:boolean = false
            this._options.startUpShowAnimation[1].always = ():void => {
                if (lastElementTriggered)
                    this.fireEvent('startUpAnimationComplete')
            }
            const $domNode:$DomNode = $(
                this._options.domNodes.startUpAnimationClassPrefix +
                elementNumber
            )
            $domNode.animate(...this._options.startUpShowAnimation)
            if ($(
                this._options.domNodes.startUpAnimationClassPrefix +
                elementNumber +
                1
            ).length)
                await this._handleStartUpEffects(elementNumber + 1)
            else
                lastElementTriggered = true
        } else
            this.fireEvent('startUpAnimationComplete')
    }
    /**
     * This method adds triggers to switch section.
     * @returns Nothing.
     */
    _addNavigationEvents():void {
        if (globalContext.window && globalContext.window.addEventListener)
            globalContext.window.addEventListener(
                'hashchange',
                ():void => {
                    if (this.startUpAnimationIsComplete)
                        this.fireEvent(
                            'switchSection',
                            false,
                            this,
                            location.hash.substring('#'.length)
                        )
                },
                false
            )
        this._handleScrollToTopButton()
    }
    /**
     * Adds trigger to scroll top buttons.
     * @returns Nothing.
     */
    _handleScrollToTopButton():void {
        this.on(
            this.$domNodes.scrollToTopButton,
            'click',
            (event:Event):void => {
                event.preventDefault()
                this.scrollToTop()
            }
        )
    }
    /**
     * Executes the page tracking code.
     * @returns Nothing.
     */
    _initializeTracking():void {
        if (
            this._options.tracking.initial &&
            this._options.tracking.key &&
            globalContext.window &&
            globalContext.window.location &&
            globalContext.window.location.hostname !== 'localhost'
        ) {
            this.debug(
                'Initialize tracking with key: "' + 
                `${this._options.tracking.key}" on section "` +
                `${this.currentSectioName}".`
            )
            try {
                this._options.tracking.initial.call(
                    this, this._options.tracking.key, this.currentSectionName
                )
            } catch (error) {
                this.warn(
                    'Problem due to initialize track: ' +
                    Tools.represent(error)
                )
            }
            this.on(
                this.$domNodes.parent.find('a, button'),
                'click',
                (event:Event):void => {
                    const $domNode:$DomNode = $(event.target)
                    this.triggerAnalyticsEvent(
                        this.currentSectionName,
                        'click',
                        $domNode.text(),
                        event.data || {},
                        $domNode.attr('website-analytics-value') || 1
                    )
                }
            )
        }
    }
    // / endregion
    // endregion
}
export default WebsiteUtilities
// endregion
$.WebsiteUtilities = (...parameter:Array<any>):any =>
    $.Tools().controller(WebsiteUtilities, parameter)
$.WebsiteUtilities.class = WebsiteUtilities
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
