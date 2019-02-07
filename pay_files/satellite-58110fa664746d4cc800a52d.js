_satellite.pushAsyncScript(function(event, target, $variables){
  
/* Neustar Integration with Analytics and Target using eVar27 */

(function() {

	var qsHash = (function() { var list = location.search.substring(1).split("&"); var q = {}; for (var i=0, pairStr; pairStr=list[i], i<list.length; i++) { var pair = pairStr.split("="); if (pair.length > 1) q[pair[0]] = pair[1]; }; return q; })();
	var addJScript = function(url, callback) {  var scr = document.createElement('script'); scr.setAttribute("type", "text/javascript"); /* scr.setAttribute("charset", "ISO-8859-1"); */ scr.setAttribute("src", url); if (callback) { scr.onload = function() { callback() }; scr.onreadystatechange = function() { if (this.readyState == 'complete' || this.readyState == 'loaded') { callback() } }; }; var body = document.getElementsByTagName('body')[0]; if (body.firstChild) body.insertBefore(scr, body.firstChild); else body.appendChild(scr); };
	var aaParam = qsHash["tntaa"] ? "&aa=" + qsHash["tntaa"] : "";
	var mboxParams = [], guidUpper="";
	
	// Pushes Neustar Data to Analytics using eVar27
	analyticsTargusHandler = function(data) {
		
    if(typeof s == "undefined" || s == null || typeof s !== "object") {
      AdobeTeamUtils.checkAnalyticsAgain(arguments);
    } else {
      //Neustar/Targus Data assigned to evar27
      var vals = new Array();	
      for (var property in data) {
        vals.push(property + "=" + data[property]); 
      }

      // <DEPRECATED>
      // Delete the section of code inside <DEPRECATED> </DEPRECATED> if it is 6 months now from October 6th 2016 and this is still commented.
      // If uncommenting, address the fact that the variables in "prop" need to be added to s.linkTrackVars as well
      /*if (window.tntScVars) {
        for (var prop in window.tntScVars) {
          s[prop] = window.tntScVars[prop];
        }
      }*/
      // </DEPRECATED>
			
      s.clearVars();
      s.linkTrackVars="eVar27";
      s.eVar27 = vals.join(",");
      if(AdobeTeamUtils.mboxTimedOut === true) {
      	s.linkTrackEvents=s.events='event144';
      }
      s.tl(this,'o','Neustar Data and mbox request error events from DTM Rule');  
    }
	}
	
  	tntTargusHandler = function(tdata) {
  		if (typeof adobe == "undefined") return; //Continue only on pages where Adobe Target is available.
		var mboxName = "comcast_targus_flags";
		adobe.target.trackEvent({
			mbox: mboxName,
			params: tdata		    
		});
      
    
    /*
    
    START OF TEMPORARY CUSTOM MBOX FOR MY ACCOUNT TO DO FIRST HIT TARGETING ON NEUSTAR SEGMENT
    
    IF NO CAMPAIGNS USE THIS MBOX, IT IS SAFE TO COMMENT THE CODE IN THIS SECTION
    
    */
      
      if(window.location.href.indexOf("customer.xfinity") > -1 && guidUpper != "") {
        tdata.marketID = _satellite.getVar("DataLayer: marketID final") || '';
        tdata.payment_type = _satellite.getVar("DataLayer : paymentType final") || '';
        tdata.delinquent = _satellite.getVar("DataLayer : billingIsDelinquent final") || '';
        tdata.pageName = _satellite.getVar("DataLayer : pageName final") || '';
        tdata.swimlane = _satellite.getVar("DataLayer : Target SwimLane") || '';
        if(AdobeTeamUtils.neustarMboxPages[AdobeTeamUtils.neustarMboxPages.length-1] !== location.href) {
        	AdobeTeamUtils.fireTargetCustomMbox("neustar_targeted_mbox", tdata);
          AdobeTeamUtils.neustarMboxPages.push(location.href);
        }
      }
      
    /*
    
    END OF TEMPORARY CUSTOM MBOX FOR MY ACCOUNT TO DO FIRST HIT TARGETING ON NEUSTAR SEGMENT
    
    IF NO CAMPAIGNS USE THIS MBOX, IT IS SAFE TO COMMENT THE CODE IN THIS SECTION
    
    */
      
  	}

  	targusResponseHandler = function(tdata) {
    	analyticsTargusHandler(tdata);
    	tntTargusHandler(tdata);
    	_satellite.notify("Neustar -> Target/Analytics Data Sent!");	
	}
	
  var pollTimeOutForAuthGUID = 5, pollCounter = 0;
	AdobeTeamUtils.poll(function() {
    if(_satellite.getVar('DataLayer: authGUID final') != "") {
      guidUpper = "&gd=" + (_satellite.getVar('DataLayer: authGUID final')).toUpperCase();
	    addJScript("//aa.agkn.com/adscores/g.json?sid=9201482388" + guidUpper + aaParam);
      return true;
    }
    else if((pollCounter++) >= (pollTimeOutForAuthGUID - 1)) {
      addJScript("//aa.agkn.com/adscores/g.json?sid=9201482388" + guidUpper + aaParam);
      return true;
    }
    else {
    	return false;
    }
  }, 1000, pollTimeOutForAuthGUID);


})();

});
