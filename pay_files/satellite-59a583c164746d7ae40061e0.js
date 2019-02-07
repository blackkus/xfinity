_satellite.pushAsyncScript(function(event, target, $variables){
  var primaryCat = _satellite.getVar("DataLayer : primaryCategory final").toLowerCase();
var pageName = _satellite.getVar("DataLayer : pageName final").toLowerCase();
var consumerType = _satellite.getVar("DataLayer : consumerType final").toLowerCase();
var component = _satellite.getVar("AA : Impression Component").toLowerCase();
var codeBase = _satellite.getVar("DataLayer : codebaseName final").toLowerCase();
var flowType = _satellite.getVar("DataLayer : flowType final").toLowerCase();


if (consumerType == "" || consumerType == "primary") {
    if (((primaryCat == "idm" && component.indexOf("orderconfirmation") > -1) || (codeBase == "consent-ui" && pageName.indexOf("buyflow") > -1) || primaryCat == "shop" || primaryCat == "local" || primaryCat == "support" || primaryCat == "help & support" || primaryCat == "hub" || primaryCat == "my account" || pageName.indexOf("myaccount") > -1)) {
        _satellite.track("3P_sitewide");
    }
    if (codeBase == "consent-ui" && pageName.indexOf("buyflow") > -1) {
        _satellite.track("3P_buyflow_consent");
    }
    if (codeBase == "consent-ui" && pageName.indexOf("buyflow") > -1 && flowType == "newcustomer") {
        _satellite.track("3P_buyflow_new_all");
    }
}
});
