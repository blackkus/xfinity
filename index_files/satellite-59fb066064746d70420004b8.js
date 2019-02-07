_satellite.pushAsyncScript(function(event, target, $variables){
  /*(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,"script","https://www.google-analytics.com/analytics.js","ga");

ga('create', 'UA-22837032-7', 'auto');*/
setTimeout(function() {
    if (typeof ga === 'function') {
        ga("ec:addProduct", {
            "name": _satellite.getVar('DataLayer : productID array (omniture) final')
        });

        ga("send", {
            hitType: "event",
            eventCategory: "checkout",
            eventAction: "",
            eventLabel: "",
            'dimension1': _satellite.getVar("DataLayer : authenticationStatus final"),
            'dimension2': _satellite.getVar("DataLayer : divisionIP final"),
            'dimension3': _satellite.getVar("DataLayer : customerType final"),
            'dimension4': _satellite.getVar("DataLayer : buyflowStep"),
            'dimension5': _satellite.getVar("DataLayer : buyflowType"),
            'dimension6': _satellite.getVar("DataLayer : flowType final"),
            'dimension7': _satellite.getVar("DataLayer : offerSystem")
        });
        _satellite.notify('DTM:Google Analytics - A360 - addProduct and Checkout Event');
    }
}, 2500);
});
