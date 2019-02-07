_satellite.pushAsyncScript(function(event, target, $variables){
  if(typeof ga === 'undefined') {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
}

ga('create', 'UA-22837032-7', 'auto');

if(window.location.hash !=""){
  ga('set', 'page', window.location.pathname + window.location.hash);
}else if (window.location.search !=""){
  ga('set', 'page', window.location.pathname + window.location.search);
}else{
  ga('set', 'page', window.location.pathname);
}

ga('require', 'ec');

var _campaignname   = "";

if (location.search.indexOf("ACQ=") > 0) {
    var _campaignname = "Acquisition";
    var _campaigncode  = location.search.split("ACQ=")[1].split("&")[0];
} else if (location.search.indexOf("CMP=") > 0) {
    var _campaignname = "Competitive";
    var _campaigncode  = location.search.split("CMP=")[1].split("&")[0];
} else if (location.search.indexOf("LOY=") > 0) {
    var _campaignname = "Loyalty";
    var _campaigncode  = location.search.split("LOY=")[1].split("&")[0];
} else if (location.search.indexOf("MA=") > 0) {
    var _campaignname = "My Account";
    var _campaigncode  = location.search.split("MA=")[1].split("&")[0];
} else if (location.search.indexOf("OBW=") > 0) {
    var _campaignname = "Offer Based Awareness";
    var _campaigncode  = location.search.split("OBW=")[1].split("&")[0];
} else if (location.search.indexOf("PD=") > 0) {
    var _campaignname = "Product Differentiation";
    var _campaigncode  = location.search.split("PD=")[1].split("&")[0];
} else if (location.search.indexOf("UPS=") > 0) {
    var _campaignname = "Upsell";
    var _campaigncode  = location.search.split("UPS=")[1].split("&")[0];
} else {
    var _campaignname = "Other";
    var _campaigncode  = "Other";
}

if (_campaignname != "Other"){
    var campaignsource = decodeURI(_campaigncode.split("-")[2]);
    var campaignmedium = decodeURI(_campaigncode.split("-")[0]);

    switch(campaignsource) {
      case "CTA":
        var _campaignsource = "CTAM";
        break;
      case "GMR":
        var _campaignsource = "GMR Marketing";
        break;
      case "INT":
        var _campaignsource = "Comcast Internal";
        break;
      case "QUA":
        var _campaignsource = "Quattro Direct";
        break;
      case "RSP":
        var _campaignsource = "Responsys";
        break;
      case "GOOGLE":
        var _campaignsource = "Google";
        break;
      case "MICROSOFT":
        var _campaignsource = "Bing";
        break;
      case "GEMINI":
        var _campaignsource = "Yahoo";
        break;
      default:
        var _campaignsource = "Other";
    }

    switch(campaignmedium) {
      case "BAC":
        var _campaignmedium = "Banner Ad";
        break;
      case "DMC":
        var _campaignmedium = "Direct Marketing";
        break;
      case "EMC":
        var _campaignmedium = "Email Marketing";
        break;
      case "ILC":
        var _campaignmedium = "Owned Assets";
        break;
      case "KNC":
        var _campaignmedium = "Paid Search";
        break;
      case "MDU":
        var _campaignmedium = "MDU";
        break;
      case "ORG":
        var _campaignmedium = "Organic Search";
        break;
      case "PWS":
        var _campaignmedium = "Partner Website";
        break;
      case "SMS":
        var _campaignmedium = "SMS";
        break;
      case "SMTP":
        var _campaignmedium = "SMTP";
        break;
      case "Social":
        var _campaignmedium = "Social";
        break;
      case "TEL":
        var _campaignmedium = "Television";
        break;
      default:
        var _campaignmedium = "Other";
    }

    ga('set', 'campaignName', _campaignname);
    ga('set', 'campaignSource', _campaignsource);
    ga('set', 'campaignMedium', _campaignmedium);
}

ga(function(tracker) {
  var clientId = tracker.get('clientId');
  var userId = "";
  var houseHoldKey = "";
  
  if(digitalData){
    if(digitalData.users){
		if(digitalData.users.length) {
			userId = digitalData.users[0].profile[0].profileInfo.userGUID;
		}
    }
    if(digitalData.user){
		if(digitalData.user.length) {
    		houseHoldKey = digitalData.user[0].profile[0].profileInfo.houseHoldKey;
		}
    }
  }
  
  ga('send', 'pageview', {
      'dimension1':  _satellite.getVar("DataLayer : authenticationStatus final"),
      'dimension2':  _satellite.getVar("DataLayer : divisionIP final"),
      'dimension3':  _satellite.getVar("DataLayer : customerType final"),
      'dimension4':  _satellite.getVar("DataLayer : buyflowStep"),
      'dimension5':  _satellite.getVar("DataLayer : buyflowType"),
      'dimension6':  _satellite.getVar("DataLayer : flowType final"),
      'dimension7':  houseHoldKey,
      'dimension8':  _satellite.getVar("DataLayer: marketID final"),
      'dimension9':  _satellite.getVar("Random: GA session ID"),
      'dimension10': clientId,
      'dimension11': userId
	});
	

ga('send', 'event', 'Page Name', _satellite.getVar("DataLayer : pageName final"), {
	nonInteraction: true
});
   
_satellite.notify('DTM:Google Analytics - A360 - Sitewide');

});
});
