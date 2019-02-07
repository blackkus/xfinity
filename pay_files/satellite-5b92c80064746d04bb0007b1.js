_satellite.pushAsyncScript(function(event, target, $variables){
  var eventPage = _satellite.getVar("Data Layer : eventPage final").toLowerCase();
var eventAction = _satellite.getVar("Data Layer : eventAction final").toLowerCase();

if (eventPage.indexOf("buyflow") > -1 && eventAction == "close footer") {
	_satellite.track("3P_buyflow_close_footer");
}
});
