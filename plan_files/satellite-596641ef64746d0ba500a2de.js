_satellite.pushAsyncScript(function(event, target, $variables){
  _satellite.getVar('Exec: Non-Omni Tag')(function(){
//<!-- Code for Action: Xfinity.com_RTG_ACQ_Upgrade - RF 20773620 -->
//<!-- Begin Rocket Fuel Conversion Action Tracking Code Version 9 -->

(function() {
 var w = window, d = document;
 var s = d.createElement('script');
 s.setAttribute('async', 'true');
 s.setAttribute('type', 'text/javascript');
 s.setAttribute('src', '//c1.rfihub.net/js/tc.min.js');
 var f = d.getElementsByTagName('script')[0];
 f.parentNode.insertBefore(s, f);
 if (typeof w['_rfi'] !== 'function') {
  w['_rfi']=function() {
   w['_rfi'].commands = w['_rfi'].commands || [];
   w['_rfi'].commands.push(arguments);
  };
 }
 _rfi('setArgs', 'ver', '9');
 _rfi('setArgs', 'rb', '28490');
 _rfi('setArgs', 'ca', '20773620');
 _rfi('setArgs', '_o', '28490');
 _rfi('setArgs', '_t', '20773620');
 _rfi('track');
})();

_satellite.notify('DTM:Rocket Fuel - Upgrade Exec');
});
_satellite.notify('DTM:Rocket Fuel - Upgrade Init');
});
