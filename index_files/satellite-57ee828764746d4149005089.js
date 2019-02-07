
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
  s.eVar16=_satellite.getVar('DataLayer : type final');
  s.prop35=_satellite.getVar('DataLayer : subCategory1 final');
  s.eVar40=_satellite.getVar('DataLayer: preActivationState final');
  s.eVar44=s.prop44=_satellite.getVar('DataLayer : siteVersion final');
  s.eVar64=_satellite.getVar('DataLayer: authGUID final');
  s.eVar69=_satellite.getVar('DataLayer : funnelType final');
  s.eVar71=_satellite.getVar('DataLayer : customerGUID final');
  s.eVar86=_satellite.getVar('DataLayer : authenticationStatus final');
  //s.eVar89=_satellite.getVar('DataLayer : selfServiceTransaction final');
  s.prop60=_satellite.getVar('DataLayer : language final');
  s.eVar38=_satellite.getVar('DataLayer : buyflowType final');
  s.eVar21=_satellite.getVar('DataLayer : billPaymentType final');
  s.eVar50=_satellite.getVar('DataLayer : visitorID final');
  s.prop50=_satellite.getVar('DataLayer : sessionID final');
  s.prop46=_satellite.getVar('DataLayer : buyflowStep final');
  s.eVar32=_satellite.getVar('DataLayer : fulfillmentType final');
  s.transactionID=s.purchaseID=_satellite.getVar('DataLayer : transactionID');
  s.products=_satellite.getVar('DataLayer : productID (omniture) final');
  s.prop5=s.eVar80=_satellite.getVar('DataLayer : offerSystem final');
  s.eVar92=_satellite.getVar('DataLayer : UIDVerificationMethod final');
  s.prop56=_satellite.getVar('DataLayer : userNameType final');
  s.eVar94=_satellite.getVar('DataLayer : imageVerificationAttempts final');
  s.prop52=_satellite.getVar('DataLayer : uidCreationType final');
  s.eVar93=_satellite.getVar('DataLayer : accountNumberVerificationType final');
  s.prop39=_satellite.getVar('DataLayer : recoveryOptions final');
  s.eVar99=_satellite.getVar('AA : affiliateNameChannel');
	s.prop55=_satellite.getVar('AA : businessSiteType');
  s.eVar3=_satellite.getVar('DataLayer : houseHoldKey final');
  
  /* Pages not Found Report Tracking*/
  if(s.pageName.indexOf('resi|sales|shop|learn|404')>-1){
    s.pageName="";
    s.pageType='errorPage';
  }

  
  if(digitalData.page.attributes.pageLoadEvent=='account authenication'){
   s.events = s.apl(s.events, "event49", ",", 2);
  }
  /* Performance Tracking event */
  
if(_satellite.getVar('DataLayer : performanceTime final')){
  var pageLoadTime="event125="+Math.round(_satellite.getVar('DataLayer : performanceTime final')/ 100);
 s.events = s.apl(s.events, pageLoadTime, ",", 2);
}
   //HelpMeDecide - HMD 
 //flow name and flow stage start
if(_satellite.getVar('DataLayer : flowName final'))
{
s.eVar74= (_satellite.getVar('DataLayer : flowName final'))? _satellite.getVar('DataLayer : flowName final') : "n/a";
 if(_satellite.getVar('DataLayer : flowStage final'))
 {
  s.eVar74= s.eVar74 + ">" + ((_satellite.getVar('DataLayer : flowStage final'))? _satellite.getVar('DataLayer : flowStage final') : "n/a");
  }
}
//flow name and flow stage end
//flow order start
if(_satellite.getVar('DataLayer : flowOrder final'))
 {
  s.eVar75= _satellite.getVar('DataLayer : flowOrder final');
}
//flow order end
//event for transaction flow
if(s.eVar75 || s.eVar74)
{
s.events = s.apl(s.events, "event74", ",", 2);
}
  
  /* Impression Tracking */

if(_satellite.getVar('AA : Impression Component')){
s.list3=_satellite.getVar('AA : Impression Component');
s.events = s.apl(s.events, "event126", ",", 2); 
}


  s.t();
  _satellite.notify("Analytics Call Fired from Rule AA & AT: Deals Custom Page Load");
  s.clearVars();

}


(function initAATracking() {

  var s=window.s||s;
  if(typeof s == "undefined" || s == null || typeof s !== "object") {
      AdobeTeamUtils.checkAnalyticsAgain(arguments);
  } else {
		AnalyticsPageTrack();  
  }

})();

