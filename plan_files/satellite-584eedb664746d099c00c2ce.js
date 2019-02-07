window.targetPageParams = function() {
	var targetParams = _satellite.getVar("Adobe Target : Target Page Params Common"); 
  
  targetParams["productIDsInCart"] = _satellite.getVar("DataLayer : productPurchasedIDs") || '';
  targetParams["isLocalized"] = _satellite.getVar("DataLayer : isLocalized final") || '';
  targetParams["lobInCart"] = _satellite.getVar("DataLayer : buyflowLOB") || '';
  if(_satellite.getVar("DataLayer : servicesLOBName final") != "") {
	  targetParams["profile.services_lob_owned"] = _satellite.getVar("DataLayer : servicesLOBName final");
  }

  
  
  return targetParams;
};

document.addEventListener(adobe.target.event.CONTENT_RENDERING_SUCCEEDED, function() {
	 var objCustEvent2 = new CustomEvent("target-data-done");
   document.dispatchEvent(objCustEvent2);
});

document.addEventListener(adobe.target.event.CONTENT_RENDERING_FAILED, function() {
  var objCustEvent1 = new CustomEvent("target-data-fail");
  document.dispatchEvent(objCustEvent1);
  var objCustEvent2 = new CustomEvent("target-data-done");//failed but done!
  document.dispatchEvent(objCustEvent2);
});

if(typeof adobe !== 'undefined' && 'target' in adobe){
	_satellite.notify("Target Call fired from AA & AT: MyPlan Custom Page Load");
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
      var objCustEvent1 = new CustomEvent("target-data-fail");
      document.dispatchEvent(objCustEvent1);
      var objCustEvent2 = new CustomEvent("target-data-done");//failed but done!
    	document.dispatchEvent(objCustEvent2);
		}
	});
}

