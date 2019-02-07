_satellite.pushAsyncScript(function(event, target, $variables){
  var evtInfo = AdobeTeamUtils.getObjVal(event, "detail.data.eventInfo");
if(evtInfo.eventMethod) {
	var eventTrigger = _satellite.getVar("Event Track : " + evtInfo.eventMethod);
  (typeof eventTrigger === "function") && eventTrigger(evtInfo);
}

});
