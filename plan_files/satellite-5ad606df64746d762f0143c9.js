_satellite.pushAsyncScript(function(event, target, $variables){
  (function() {
  var qtm = document.createElement('script'); qtm.type = 'text/javascript'; qtm.async = 1;
  qtm.src = 'https://cdn.quantummetric.com/qscripts/quantum-comcast.js';
  var d = document.getElementsByTagName('script')[0]; !window.QuantumMetricAPI && d.parentNode.insertBefore(qtm, d);
})();

_satellite.notify('DTM:Quantum Metric Site Code');
});
