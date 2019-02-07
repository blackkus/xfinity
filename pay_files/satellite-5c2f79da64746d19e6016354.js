_satellite.pushAsyncScript(function(event, target, $variables){
  var targetProfileParams = {};
if(_satellite.getVar("DataLayer : MyAccount servicesLOBName final") != "") {
	  targetProfileParams["profile.services_lob_owned"] = _satellite.getVar("DataLayer : MyAccount servicesLOBName final");
}

if(typeof adobe != "undefined" && typeof adobe.target != "undefined") {
  adobe.target.trackEvent({
      "mbox": "profileUpdateMbox",
      "params": targetProfileParams
  });
}

});
