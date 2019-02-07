window.targetPageParams = function() {
	var targetParams = _satellite.getVar("Adobe Target : Target Page Params Common"); 
  
  targetParams["swimlane"] = _satellite.getVar("DataLayer : Target SwimLane") || '';
  targetParams["component"] = _satellite.getVar("AA : Impression Component") || '';
  targetParams["lob_owned"] = _satellite.getVar("DataLayer : MyAccount servicesLOBName final") || '';
    
  targetParams["equipments_owned"] = _satellite.getVar("DataLayer : MyAccount servicesLOBEquipment final")  || '';
  
  return targetParams;
};

// Visitor ID integration
	if (window.Visitor && typeof window.Visitor.getInstance === 'function') {
		//Instantiate VisitorID service
		var visitor = Visitor.getInstance ("DA11332E5321D0550A490D45@AdobeOrg", {
		  // Visitor options
		});
		// Older Visitor versions don't support resetState
		if (typeof visitor.resetState === 'function') {
			visitor.resetState();
		} else {
			console.warn('Upgrade VisitorAPI library >= 2.3 for SPA support.')
		}
	}

if(typeof adobe !== 'undefined' && 'target' in adobe && _satellite.getVar("DataLayer : Adobe Target Library Switch") == "true"){
	_satellite.notify("Target Call fired from AA & AT: My Account Custom Page Load");
	adobe.target.getOffer({
		mbox: "target-global-mbox",
		params: window.targetPageParams(),
		success: function(offer) {
		  adobe.target.applyOffer({
		    "mbox": "target-global-mbox",
		    "offer": offer
		  });
		},
		error: function(status, error) {
      _satellite.notify("Adobe Target request did not succeed :: ", status, error);
		}
	});
}
else {
 console.log("Adobe Target Library is disabled for this visitor or page");
}


