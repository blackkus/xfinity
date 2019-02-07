//customizable: config.enabledDomains, config.blockedUrls, config.harvestAll, config.volumnPercent

'use strict';
var SEAC = (function () {
    var config = {
        domain: "",
        sessionId: "",
        tracking: "",
        frameId: "iPerceptionsFrame",
        iFrameUrl: "//universal.iperceptions.com",
        trackingUrl: "//post.iperceptions.com/ip.gif?",
        enabledDomains: [],
        blockedUrls: [],
        harvestAll: false,
        volumePercent: 100 // from 0 to 100, 100 means we handle whole traffic
    };

    var diceroll = Math.random() * 100;

    function RC(e) {
        if (typeof iPerceptions.Wrapper != 'undefined') {
            var cookie = iPerceptions.Wrapper.getCookie(e);
            return cookie === "" ? null : cookie;
        }
        return null;
    };

    function CC(e, t, n) {
        if (typeof iPerceptions.Wrapper != 'undefined') {
            var s = "";
            if (n) { var i = new Date(); i.setTime(i.getTime() + n * 24 * 60 * 60 * 1e3); s = i.toUTCString(); }
            iPerceptions.Wrapper.setCookie(e, t, s);
        }
    };

    function seed() { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); }
    function guid() { return seed() + seed() + '-' + seed() + '-' + seed() + '-' + seed() + '-' + seed() + seed() + seed(); }

    var getHarvest = function (session) {
        try {
            getIframeTrackingStorage(session);
        } catch (ex) { }
    };

    var getIframeSessionId = function () {
        getIframeSessionIdStorage("ipe_s");
    }

    var saveTrackingFlag = function (sessionId, flag) {
        try {
            setIframeSessionStorage(sessionId, flag);
        } catch (ex) { }
    };


    var setIframeSessionStorage = function (e, t) {
        try {
            var n = document.getElementById(config.frameId).contentWindow;
            n.postMessage(JSON.stringify({
                key: e,
                method: "setsession",
                data: t
            }), "*");
        } catch (ex) { }
    };

    var getFeedbackSessionEventObj = {
        handleEvent: function (e) {
            if (-1 !== e.origin.indexOf(SEAC.config.iFrameUrl)) {
                var result = JSON.parse(e.data);
                if (result.source == "feedback") {
                    SEAC.config.sessionId = result.value;
                    if (SEAC.config.sessionId === null || SEAC.config.sessionId === 'undefined') {
                        SEAC.config.sessionId = SEAC.getSessionCookie();
                        SEAC.setIframeSessionStorage("ipe_s", SEAC.config.sessionId);
                    }
                    else {
                        SEAC.CC("ipe_s", SEAC.config.sessionId);
                    }
                    SEAC.getHarvest(SEAC.config.sessionId);
                    window.removeEventListener("message", SEAC.getFeedbackSessionEventObj);
                }
            }
        }
    };
    var getIframeSessionIdStorage = function (e, t) {

        try {

            var n = document.getElementById(config.frameId).contentWindow;
            n.postMessage(JSON.stringify({
                key: e, method: "getfeedbacksession"
            }), "*");
            addEvent("message", SEAC.getFeedbackSessionEventObj);
        }
        catch (ex) { }
    };

    var getHarvestFlagEventObj = {
        session: null,
        handleEvent: function (e) {
            if (-1 !== e.origin.indexOf(SEAC.config.iFrameUrl)) {
                var result = JSON.parse(e.data);
                if (result.source == "feedbackgetharvestflag") {
                    SEAC.config.tracking = result.value;
                    if (SEAC.config.tracking === null || SEAC.config.tracking === 'undefined') {
                        if (SEAC.diceroll < SEAC.config.volumePercent) {
                            SEAC.saveTrackingFlag(this.session, "true");
                            SEAC.trackPage(this.session);
                        } else {
                            SEAC.saveTrackingFlag(this.session, "false");
                        }
                    } else if (SEAC.config.tracking === "true") {
                        SEAC.trackPage(this.session);
                    }
                    window.removeEventListener("message", SEAC.getHarvestFlagEventObj);
                }
            }
        }
    };
    var getIframeTrackingStorage = function (session, t) {
        try {
            var n = document.getElementById(config.frameId).contentWindow;
            n.postMessage(JSON.stringify({
                key: session, method: "getharvestflag"
            }), "*");
            SEAC.getHarvestFlagEventObj.session = session;
            addEvent("message", getHarvestFlagEventObj);
        }
        catch (ex) { }
    };

    function addEvent(eventName, callback) {
        if (window.addEventListener) {
            window.addEventListener(eventName, callback);
        } else {
            window.attachEvent('on' + eventName, callback);
        }
    };


    function getVisitorId() {
        var e = RC("ipe_v");
        return e === null ? null : e;
    };

    var createVisitorId = function () {
        CC("ipe_v", guid(), 9999, config.domain);
    };

    function getSessionCookie() {
        var e = RC("ipe_s");
        return e === null ? null : e;
    };

    function trackPage(sessionId, data, events, scroll, vs, va) {
        try {
            if (typeof sessionId == 'undefined' || !sessionId) {
                sessionId = getSessionCookie();
                if (!sessionId && typeof iPerceptions.Wrapper != 'undefined' && typeof iPerceptions.Wrapper.setAndGetCookie === "function") {
                    sessionId = iPerceptions.Wrapper.setAndGetCookie("ipe_s");
                }
            }

            var track = "sid=" + sessionId + "&vid=" + getVisitorId() + "&tkid=" + window.iperceptionskey + "&url=" + encodeURIComponent(location.href) + "&title=" + encodeURIComponent(document.title);

            if (typeof vs !== 'undefined' && vs) {
                track += "&vs=1";
            }
            if (typeof va !== 'undefined' && va) {
                track += "&va=1";
            }
            if (data) {
                track += "&data=" + encodeURIComponent(data);
            }
            if (config.harvestAll) {
                track += "&ha=1";
            }
            if (events) {
                track += "&events=" + events;
            }
            if (scroll) {
                track += "&scroll=" + scroll;
            }

            if (window.XDomainRequest) {
                var xdr = new XDomainRequest();
                xdr.open('GET', config.trackingUrl + track);
                xdr.send();
            }
            else {
                var oRequest =
                new XMLHttpRequest();
                oRequest.open('GET', config.trackingUrl + track, true);
                oRequest.send();
            }
        } catch (ex) { }

    }

    var isInBlockedUrls = function () {
        for (var i = 0; i < config.blockedUrls.length; i++) {
            if (location.href.search(config.blockedUrls[i]) > -1) {
                return true;
            }
        }
        return false;
    };

    var isInEnabledDomains = function () {
        if (config.enabledDomains.length == 0)
            return true;

        for (var i = 0; i < config.enabledDomains.length; i++) {
            if (location.href.search(config.enabledDomains[i]) > -1) {
                return true;
            }
        }
        return false;
    };

    var init = function () {
        setDomain(window.location.hostname);
        if (!isInBlockedUrls() && isInEnabledDomains()) { launch(); }
    };


    var setDomain = function (e) { config.domain = e; };

    var launch = function (url) {
        try {
            if (typeof iPerceptions.Wrapper != 'undefined' && iPerceptions.Wrapper.device === "desktop") {
                var visitor = getVisitorId();
                if (visitor === null) { createVisitorId(); }
                getIframeSessionId();
            }
            else { return; }
        } catch (ex) { }
    };

    var getSessionId = function () {
        return config.sessionId;
    }

    return {
        init: init,
        launch: launch,
        setDomain: setDomain,
        trackPage: trackPage,
        getSessionId: getSessionId,
        getFeedbackSessionEventObj: getFeedbackSessionEventObj,
        config: config,
        getSessionCookie: getSessionCookie,
        setIframeSessionStorage: setIframeSessionStorage,
        getHarvest: getHarvest,
        CC: CC,
        diceroll: diceroll,
        saveTrackingFlag: saveTrackingFlag,
        getHarvestFlagEventObj: getHarvestFlagEventObj
    }

})();
