_satellite.pushAsyncScript(function(event, target, $variables){
  //Comcast_rtg_acq_learn_landing_doubleplay
var _pix = document.getElementById('_pix_id_9368a3fc-b870-4337-9265-686d5fba7ded');
if (!_pix) {
    var protocol = '//';
    var a = Math.random() * 1000000000000000000;
    _pix = document.createElement('iframe');
    _pix.style.display = 'none';
    _pix.setAttribute('src', protocol + 's.amazon-adsystem.com/iu3?d=generic&ex-fargs=%3Fid%3D9368a3fc-b870-4337-9265-686d5fba7ded%26type%3D5%26m%3D1&ex-fch=416613&ex-src=https://www.xfinity.com/learn/xfinity-doubleplay&ex-hargs=v%3D1.0%3Bc%3D8324316060801%3Bp%3D9368A3FC-B870-4337-9265-686D5FBA7DED' + '&cb=' + a);
    _pix.setAttribute('id', '_pix_id_9368a3fc-b870-4337-9265-686d5fba7ded');
    document.body.appendChild(_pix);
}
_satellite.notify('DTM:Amazon - Double Play');
});
