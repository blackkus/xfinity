(function () {
    var s = document.createElement('script'),
        h = document.getElementsByTagName('head')[0],
        u = document.createElement('urscrub');
    s.type = 'text/javascript'; s.async = true; s.defer = true;
    s.src = 'https://cdn.userreplay.net/us2431a946a4b7d17778d9c086a94cdd1dd_v2.js';
    s.onload = loaded;
    s.onreadystatechange = function () {
        if (this.readyState === 'loaded' || this.readyState === 'complete') {
            loaded();
        }
    };
    u.appendChild(s); h.appendChild(u);
    function loaded () {
        if (typeof UrConfig != "undefined" && typeof urCapture != "undefined") {
            // create a configuration object
            var config = new UrConfig('2cd43fcc43075081840a8f32ae93be00','//us2-00000003.userreplay.net');
            // {{dynamic config here}} //
            config.excludeXhr(new RegExp('tealeaf', 'i'))
              .addNodeScrubbingRule('mask', 'div.form-field', new RegExp('\/Checkout\/Installation\.aspx', 'i')) //form-field
              .addNodeScrubbingRule('mask', 'div.form-field.ngbf-form-field, div.tmmServiceAddress, input.input-mask.text.input-4', new RegExp('\/Checkout\/PrepayAccountInformation\.aspx', 'i'))
              .addNodeScrubbingRule('mask', 'div.section-info', new RegExp('\/Checkout\/Review\.aspx', 'i'))
              .addNodeScrubbingRule('mask', 'div.addresscomplete_item, div.addresscomplete_item_highlighted', new RegExp('Corporate\/Learn\/Bundles/bundles\.html', 'i'))
              .addNodeScrubbingRule('mask', 'div.addresscomplete_item, div.addresscomplete_item_highlighted', new RegExp('\/Corporate\/shop\/productoverview\.html', 'i'))
              .addNodeScrubbingRule('mask', 'div.addresscomplete_item, div.addresscomplete_item_highlighted', new RegExp('.*packages\.html', 'i'))
              .addNodeScrubbingRule('mask', 'div.xfinity-section-container, div.payment-confirmation.xfinity-section-container', new RegExp('\/WalledGarden\/', 'i')) //div.customer-info,
              .addNodeScrubbingRule('mask', 'div.localize-address-list-nested, div.addresscomplete', new RegExp('\/Localize.*\.aspx', 'i'))
              .addNodeScrubbingRule('mask', 'div.customerInfo > div > div > div > p.x-body3, p.hg-cart__panel-title.headline4_emph', new RegExp('\/buy\/.*', 'i'))
              .addNodeScrubbingRule('mask', 'ul.x-suggestions__list.open', new RegExp('\/learn\/.*', 'i'))
              .addNodeScrubbingRule('mask', 'p.address, span.greeting-name', new RegExp('\/upgrade.*', 'i'))
              .addNodeScrubbingRule('mask', 'strong', new RegExp('\/buy\/.*', 'i'))
              .addNodeScrubbingRule('mask', '.greeting-name, .email, .summary-info-block.account > p, .summary-info-block.address > p', new RegExp('\/Checkout\/.*', 'i'))
              .addNodeScrubbingRule('mask', '.x-heading5', new RegExp('.*\/active-address\/.*', 'i'))
              .whitelistFieldClasses(['submit'])
              .whitelistXhrJsonKeys(['Key','Value','LinkName','Title','ValidationItems'], 'responseText')
              .whitelistFieldIds(['offerSortMain', 'contractLength'])
              .excludeXhrResponseText(false)
              .addNodeEventTrigger('click', '.x-checkbox-label', 'div.Loader__content', new RegExp('/buy/customize', 'i'), 'style', 500)
              //.addSimpleCaptureRule('\/learn/offers#/')
              .excludeStateChangesToElements('.x-controls-hidden-range.x-controls-hidden-range--seek.x--vh, .range-slider__input.x--vh')
               .set('captureStateChanges', true)
              //.set('autoCaptureDelay', 2000)
              .set('angularRoutesToSteps', false)
              .set('iframes', false)
              .set('captureCookies', true)
              .set('storageDomain', 'https://cdn.userreplay.net')
              .set('storageTarget', '/us2431a946a4b7d17778d9c086a94cdd1dd.html')

              .excludePage(new RegExp('\/includes\/inq\/inqChat\.html','i'))
              .excludePage(new RegExp('\/sso\/oauth\/iframe\/','i'))

              .excludeXhr(new RegExp('\/InviteTriggers', 'i'))
              .excludeXhr(new RegExp('\/Secure\/Preloader\.aspx', 'i'))
              .excludeXhr(new RegExp('\/api\.iperceptions.*', 'i'))
              .excludeXhr(new RegExp('\/touchcommerce\/touchcommercedetails\.aspx', 'i'))
              .excludeXhr(new RegExp('\/Checkout\/ProActiveChat\.cajax', 'i'))
              .excludeXhr(new RegExp('\/Layout\/Secure\/AutoPayAjax\.aspx', 'i'))
              .excludeXhr(new RegExp('\/Checkout\/ProActiveChat\.cajax', 'i'))
              .excludeXhr(new RegExp('\/Layout\/Secure\/AutoPayAjax\.aspx', 'i'))
              .excludeXhr(new RegExp('\/\/elv3-tslogging\.touchcommerce\.com\/tagserver\/logging\/log4js', 'i'))
              .excludeXhr(new RegExp('\:\/\/comcast\.inq\.com\/.*','i'))
              .excludeXhr(new RegExp('\/\/comcastcom\.d1\.sc\.omtrdc\.net\/.*', 'i'))
              .excludeXhr(new RegExp('\/\/comcast\.demdex\.net\/.*','i'))
              .excludeXhr(new RegExp('\/QueryCompletion\.cajax', 'i'))
              .excludeXhr(new RegExp('.*Helper\.cajax','i'))
              .excludeXhr(new RegExp('.*Controller\.cajax','i'))
              .excludeXhr(new RegExp('.*Options\.cajax','i'))
              .excludeXhr(new RegExp('.*userreplay\.net','i'))
              .excludeXhr(new RegExp('.*Localize\.cajax','i'))
              .excludeXhr(new RegExp('.*Address\.cajax','i'))
              .excludeXhr(new RegExp('\/MyServices\/.*','i'))
              .excludeXhr(new RegExp('.*\/api\/.*','i'))
              .excludeXhr(new RegExp('\/Overview\/.*','i'))
              .excludeXhr(new RegExp('\/Secure/Preloading\/','i'))
              .excludeXhr(new RegExp('\/','i'))
        ;
         // initialise
        urCapture.init(config);
        }
    }
}());

_satellite.notify('DTM:User Replay - Sitewide v2 - prod 1.6');
