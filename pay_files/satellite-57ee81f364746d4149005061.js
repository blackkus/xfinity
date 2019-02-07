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
s.prop60=_satellite.getVar('DataLayer : language final');
s.eVar21=_satellite.getVar('DataLayer : billPaymentType final');
s.eVar50=_satellite.getVar('DataLayer : visitorID final');
s.prop50=_satellite.getVar('DataLayer : sessionID final');
s.eVar20=_satellite.getVar('AA : Billing Impression');
s.eVar56=_satellite.getVar('DataLayer : Customer Tenure final');
/* Harness Experience Tracking*/
s.eVar30=_satellite.getVar('DataLayer: pageExperience final');
  
/* Impression Tracking */

if(_satellite.getVar('AA : Impression Component')){
s.list3=_satellite.getVar('AA : Impression Component');
s.events = s.apl(s.events, "event126", ",", 2); 
}

if((digitalData.page.attributes.pageLoadEvent) && ((digitalData.page.attributes.pageLoadEvent.indexOf('Payment start')>-1)||(digitalData.page.attributes.pageLoadEvent.indexOf('payment start')>-1))){
 s.events = s.apl(s.events, "event95", ",", 2);
}
if(digitalData.page.attributes.pageLoadEvent=='account authenication'){
 s.events = s.apl(s.events, "event49", ",", 2);
}

if((digitalData.page.attributes.pageLoadEvent=='Payment review')||(digitalData.page.attributes.pageLoadEvent=='payment review')){
 s.events = s.apl(s.events, "event64", ",", 2);
}
if(digitalData.page.attributes.pageLoadEvent=='Single payment today' || _satellite.getVar('DataLayer : selfServiceTransaction array final').indexOf('singlepay:today')>-1){
 s.events = s.apl(s.events, "event7", ",", 2);
}
if(digitalData.page.attributes.pageLoadEvent=='Single payment scheduled' || _satellite.getVar('DataLayer : selfServiceTransaction array final').indexOf('singlepay:scheduled')>-1){
 s.events = s.apl(s.events, "event21", ",", 2);
}

if(_satellite.getVar('DataLayer : billPayAmount final')){
  var billAmount="event94="+_satellite.getVar('DataLayer : billPayAmount final');
 s.events = s.apl(s.events, billAmount, ",", 2);
}

/*Login Tracking*/
if(_satellite.getVar('DataLayer : Login final')===true){
 s.events = s.apl(s.events, "event57", ",", 2);
}

  /*code for equipments
if(_satellite.getVar('DataLayer : equipment final'))
{
s.eVar81=_satellite.getVar('DataLayer : equipment final');
 s.events = s.apl(s.events, "event81", ",", 2);
}
code for equiments end*/


s.t();
_satellite.notify("Analytics Call Fired from Rule AA & AT: My Account Custom Page Load");
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
