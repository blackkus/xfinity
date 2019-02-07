_satellite.notify('Nuance and Adobe Analytics Integration Start')

/* Chat Launched Listener Example */
var chatLaunchedListener = {
onChatLaunched: function(evt){
//Adobe Analytics Code 
s.clearVars();
s.linkTrackVars='eVar37,pageName,events,prop17,prop24';
s.pageName=_satellite.getVar('DataLayer : pageName final');
s.eVar37=_satellite.getVar('DataLayer : pageName final');
s.prop17=_satellite.getVar('Data Layer : eventPage final');
s.linkTrackEvents=s.events='event141';
s.tl(this,'o','Nuance Chat Launched');
_satellite.notify("Nuance Chat Launched: chatID = " + evt.chatID + ", customerID = " +
evt.customerID);
  
  //Google Analytics Chat Launched Event
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-22837032-7', 'auto');
  ga('send', {
    hitType: 'event',
    eventCategory: 'Chat',
    eventAction: 'Chat Launched',
    eventLabel: evt.chatID,
    dimension4: evt.chatID
  });
  _satellite.notify("Nuance Chat Launched: chatID = " + evt.chatID + ", customerID = " +
evt.customerID, 5);
}
};
/* Chat Closed Event Listener Example */
var chatClosedListener = {
onChatClosed: function(evt){
  
s.linkTrackVars='eVar37,pageName,events,prop17,prop24';
s.pageName=_satellite.getVar('DataLayer : pageName final');
s.eVar37=_satellite.getVar('DataLayer : pageName final');
s.prop17=_satellite.getVar('Data Layer : eventPage final');
s.linkTrackEvents=s.events='event142';
s.tl(this,'o','Nuance Chat Closed');
_satellite.notify("Nuance Chat Closed: chatID = " + evt.chatID + ", customerID = " +
evt.customerID + ", agentID = " + evt.agentID);
}
};
var c2cDisplayed = {
onC2CDisplayed: function(evt) {
console.log("Touch Commerce C2C Displayed");
}
};
/* Chat Engaged Listener Example */
var chatEngagedListener = {
onChatEngagedEvent: function(evt) {
  
s.linkTrackVars='eVar37,pageName,events,prop17,prop24';
s.pageName=_satellite.getVar('DataLayer : pageName final');
s.eVar37=_satellite.getVar('DataLayer : pageName final');
s.prop17=_satellite.getVar('Data Layer : eventPage final');
s.linkTrackEvents=s.events='event143';
s.tl(this,'o','Nuance Chat Engaged');
_satellite.notify("Nuance Chat Engaged: chatID=" + evt.chatID + ", chatType=" + evt.chatType +
", evtType=" + evt.evtType);
}
};

/* C2C Displayed Listener Example */
var c2cDisplayed = {
		onC2CDisplayed: function(evt) {
  
s.linkTrackVars='eVar37,pageName,events,prop17,prop24';
s.pageName=_satellite.getVar('DataLayer : pageName final');
s.eVar37=_satellite.getVar('DataLayer : pageName final');
s.prop17=_satellite.getVar('Data Layer : eventPage final');
s.linkTrackEvents=s.events='event145';
s.tl(this,'o','Nuance Chat C2CDisplayed');
_satellite.notify("Nuance Chat C2CDisplayed: chatID=" + evt.chatID + ", chatType=" + evt.chatType +
", evtType=" + evt.evtType);
}
};

/* C2C Clicked Listener Example */
var c2cClickedListener = {
		onC2CClicked: function(evt) {
  
s.linkTrackVars='eVar37,pageName,events,prop17,prop24';
s.pageName=_satellite.getVar('DataLayer : pageName final');
s.eVar37=_satellite.getVar('DataLayer : pageName final');
s.prop17=_satellite.getVar('Data Layer : eventPage final');
s.linkTrackEvents=s.events='event146';
s.tl(this,'o','Nuance Chat C2CClicked');
_satellite.notify("Nuance Chat C2CClicked: chatID=" + evt.chatID + ", chatType=" + evt.chatType +
", evtType=" + evt.evtType);
}
};
/* Sale Qualified Event Listener */
var saleQualifiedListener = {
		onSaleQualifiedEvent: function(evt) {
  
s.linkTrackVars='eVar37,pageName,events,prop17,prop24';
s.pageName=_satellite.getVar('DataLayer : pageName final');
s.eVar37=_satellite.getVar('DataLayer : pageName final');
s.prop17=_satellite.getVar('Data Layer : eventPage final');
s.linkTrackEvents=s.events='event147';
s.tl(this,'o','Nuance Chat Sales Qualified');
_satellite.notify("Nuance Chat Sales Qualified: chatID=" + evt.chatID + ", chatType=" + evt.chatType +
", evtType=" + evt.evtType);
}
};

/* Sold listener example */
var soldListener = {
		onSoldEvent: function(evt) {
  
s.linkTrackVars='eVar37,pageName,events,prop17,prop24';
s.pageName=_satellite.getVar('DataLayer : pageName final');
s.eVar37=_satellite.getVar('DataLayer : pageName final');
s.prop17=_satellite.getVar('Data Layer : eventPage final');
s.linkTrackEvents=s.events='event148';
s.tl(this,'o','Nuance Chat On Sold');
_satellite.notify("Nuance Chat On Sold: chatID=" + evt.chatID + ", chatType=" + evt.chatType +
", evtType=" + evt.evtType);
}
};

/* Group ID Tracking */

var eligibleListener = {
    onEligibleEvent: function(evt){
      
      s.linkTrackVars='eVar37,pageName,events,prop17,prop24,eVar2';
			s.pageName=_satellite.getVar('DataLayer : pageName final');
			s.eVar37=_satellite.getVar('DataLayer : pageName final');
			s.prop17=_satellite.getVar('Data Layer : eventPage final');
      s.eVar2=( evt.group ? evt.group : "" );
			s.tl(this,'o','Chat Group ID');
			_satellite.notify("incGroup set: group="+ evt.group+", pageID="+evt.pageID);
    }
};

/* Last, register all listeners (that are being used) */
var InqRegistry = {
chatListeners: [chatLaunchedListener, chatClosedListener],
listeners: [c2cDisplayed, c2cClickedListener, eligibleListener],
saleListeners: [saleQualifiedListener, soldListener,
chatEngagedListener]
};
