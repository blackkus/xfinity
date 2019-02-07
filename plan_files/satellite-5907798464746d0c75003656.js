_satellite.pushAsyncScript(function(event, target, $variables){
  var pageName = (_satellite.getVar("DataLayer : pageName final")).toLowerCase();
var buyflowType = (_satellite.getVar("DataLayer : buyflowType final")).toLowerCase();

// Fire on any MyPlan pages.
if(pageName.includes("resi|sales|shop|my plan")) {
	 _satellite.track("3P_myplan_all");
}

// Fire on MyPlan Contact Us page.
//if(pageName.includes("resi|sales|shop|my plan|contact us")) {
//	 _satellite.track("3P_myplan_contact");
//}

// Fire on MyPlan XITV Cancel Confirmation page.
if(pageName.includes("resi|sales|shop|my plan|confirmation") && buyflowType == "cancelstreamingvideo") {
	 _satellite.track("3P_myplan_xitv_cancel_conf");
}

// Fire on select MyPlan pags for Pulse Insights
if(pageName == "resi|sales|shop|my plan|contact us" || pageName == "resi|sales|shop|my plan|my plan" || pageName == "resi|sales|shop|my plan|offers filter") {
	 _satellite.track("3P_myplan_pulse");
}
});
