_satellite.pushAsyncScript(function(event, target, $variables){
  /* AAM Integration with Analytics using list2 variable */

(function() {

	var addJScript = function(url, callback) {  var scr = document.createElement('script'); scr.setAttribute("type", "text/javascript"); /* scr.setAttribute("charset", "ISO-8859-1"); */ scr.setAttribute("src", url); if (callback) { scr.onload = function() { callback() }; scr.onreadystatechange = function() { if (this.readyState == 'complete' || this.readyState == 'loaded') { callback() } }; }; var body = document.getElementsByTagName('body')[0]; if (body.firstChild) body.insertBefore(scr, body.firstChild); else body.appendChild(scr); };

  	aam_analytics_cb = function(aam_data) {
      
    if(typeof s == "undefined" || s == null || typeof s !== "object") {
        AdobeTeamUtils.checkAnalyticsAgain(arguments);
    } else {
      var outList =[];
      if(typeof arguments[0].stuff != "undefined" && arguments[0].stuff != ""){
            for(var i = 0; i < arguments[0].stuff.length; i++){
                if(arguments[0].stuff[i].cn =="aam_tnt"){
                    if(arguments[0].stuff[0].cv.split(";")){
                  var demdex_raw = arguments[0].stuff[i].cv.split(";");
                        for (var j=0; j<demdex_raw.length; j++) {
                          var splitVal = demdex_raw[j].split("=");
                if (splitVal[0].match(/neustar_propensity|aam_segment|offsite_aam/g) && splitVal[1]) {
                  outList.push(splitVal[1]);
                }
                      }  // for
                    } // if
                } // if
            } // for
        } // if
      
				s.clearVars();
        s.linkTrackVars="list2";
        s.list2 = outList.join(",");
        s.tl(this,'o','AAM Data from DTM Rule');
        _satellite.notify("AAM -> Analytics Data Sent!");
    }	
	}

	addJScript("//comcast.demdex.net/event?d_stuff=1&d_dst=1&d_rtbd=json&d_cts=1&d_cb=aam_analytics_cb");
  
})();

});
