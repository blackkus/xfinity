function AnalyticsPageTrack() {
var s=window.s||s;
//_satellite.track('clear-Vars');
//s.manageVars('clearVars');
s.events="";
s.clearVars();
s.prop24=s.prop17="";
s.pageName=_satellite.getVar('DataLayer : pageName final');
s.channel=_satellite.getVar('DataLayer : primaryCategory final');
s.server=_satellite.getVar('DataLayer : server');
s.eVar1=s.prop45=_satellite.getVar('DataLayer : customerType final');
s.eVar10=_satellite.getVar('DataLayer: marketID final');
s.prop35=_satellite.getVar('DataLayer : subCategory1 final');
s.eVar44=s.prop44=_satellite.getVar('DataLayer : siteVersion final');
s.eVar64=_satellite.getVar('DataLayer: authGUID final');
s.eVar69=_satellite.getVar('DataLayer : funnelType final');
s.eVar71=_satellite.getVar('DataLayer : customerGUID final');
s.eVar86=_satellite.getVar('DataLayer : authenticationStatus final');
s.prop60=_satellite.getVar('DataLayer : language final');
s.eVar38=_satellite.getVar('DataLayer : buyflowType final');
s.eVar50=_satellite.getVar('DataLayer : visitorID final');
s.prop50=_satellite.getVar('DataLayer : sessionID final');
s.prop46=_satellite.getVar('DataLayer : buyflowStep final');
s.eVar32=_satellite.getVar('DataLayer : fulfillmentType final');
s.products=_satellite.getVar('DataLayer : productID (omniture) final');
s.prop5=s.eVar80=_satellite.getVar('DataLayer : offerSystem final');
s.prop28=_satellite.getVar('DataLayer : CTPSessionID final');
s.eVar23=_satellite.getVar('DataLayer : installationType final');
s.eVar82=_satellite.getVar('DataLayer : buyflowPaymentMethod final');
s.eVar62=_satellite.getVar('DataLayer: currentMRC final');
s.prop4=_satellite.getVar('DataLayer : zipServiceAddress final');
s.eVar99=_satellite.getVar('AA : affiliateNameChannel');
s.prop55=_satellite.getVar('AA : businessSiteType');
s.eVar14= _satellite.getVar('AA : currentServices');
/*Customer/Order Status tracking for pending customer*/
s.eVar28=_satellite.getVar('AA : pendingOrderStatus');
/* Setting up custom URL for All Digital Code Base*/
s.pageURL=document.location.href;

  /* Performance Tracking event */
  
if(_satellite.getVar('DataLayer : performanceTime final')){
  var pageLoadTime="event125="+Math.round(_satellite.getVar('DataLayer : performanceTime final')/ 100);
 s.events = s.apl(s.events, pageLoadTime, ",", 2);
}

s.t();
_satellite.notify("Analytics Call Fired from Rule AA & AT: Buyflow Custom Page Load");
s.clearVars();
}

(function initAATracking() {

  var s=window.s||s;
  if(s == null || typeof s !== "object") {
      AdobeTeamUtils.checkAnalyticsAgain(arguments);
  } else {
		AnalyticsPageTrack();  
  }

})();
