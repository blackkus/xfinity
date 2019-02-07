_satellite.pushAsyncScript(function(event, target, $variables){
  (function() {
    //var _ = window._ || window._dl;
    //if (!_) {
    //    return;
    //}
    var eventName = (_satellite.getVar("Data Layer : eventName final")).toLowerCase();
    var consumerType = (_satellite.getVar("DataLayer : consumerType final")).toLowerCase();
    var action = window.location.href;

    if(!consumerType || consumerType == "primary"){
      //if(digitalData.event && eventName == "offer loaded"){
        //for(var i=digitalData.event.length-1; i>=0; i--){
          //if(digitalData.event[i].eventInfo.product.length){
      setTimeout(function(){
        if(typeof ga === 'function') {    
        ga('send', 'event', 'Product View', action, {nonInteraction: true});
            _satellite.notify('DTM:Google Analytics - A360 - Product View');
        }
		},2500);
            //break;
          //}
        //}
      //}
    }
})();
});
