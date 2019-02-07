_satellite.pushAsyncScript(function(event, target, $variables){
  var pageName = (_satellite.getVar("DataLayer : pageName final")).toLowerCase();

// Fire Pulse Tag Rule only on Bill Payment Confirmation or Bill Settings Pages.
if ((pageName.indexOf("myaccount|billing|payment|confirm") > -1) || (pageName.indexOf("myaccount|settings|billing") > -1)) {
	 _satellite.track("3P_myaccount_pulse");
}
});
