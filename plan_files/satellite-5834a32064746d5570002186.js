_satellite.pushAsyncScript(function(event, target, $variables){
  _satellite.getVar('Exec: Non-Omni Tag')(function(){
//<!-- Global site tag (gtag.js) - Google Marketing Platform -->
var GDCFLscriptSrc="https://www.googletagmanager.com/gtag/js?id=DC-4053494";
var GDCFLscript = document.createElement('script');
    GDCFLscript.src = GDCFLscriptSrc;
    document.body.appendChild(GDCFLscript);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'DC-4053494');
_satellite.notify('DTM:Google Doubleclick Floodlight Global Site Tag');

//<!--
//Event snippet for Xfinity.com_RTG_ACQ_4496230_Upgrade on https://www.xfinity.com/upgrade: Please do not remove.
//Place this snippet on pages with events you're tracking. 
//Creation date: 09/06/2018
//-->
  gtag('event', 'conversion', {
    'allow_custom_scripts': true,
    'send_to': 'DC-4053494/comca517/xfini02c+standard'
  });
_satellite.notify('DTM:Doubleclick Floodlight - MV - 4496230 Upgrade EVENT Exec');
});
_satellite.notify('DTM:Doubleclick Floodlight - MV - 4496230 Upgrade EVENT Init');

//<noscript>
//<img src="https://ad.doubleclick.net/ddm/activity/src=4053494;type=comca517;cat=xfini02c;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?" //width="1" height="1" alt=""/>
//</noscript>

//-----------------------

//_satellite.getVar('Exec: Non-Omni Tag')(function(){
//<!--
//Start of DoubleClick Floodlight Tag: Please do not remove
//Activity name of this tag: Xfinity.com_RTG_ACQ_4497712_Upgrade
//URL of the webpage where the tag is expected to be placed: https://www.xfinity.com/upgrade
//This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
//Creation Date: 02/24/2017
//-->

//var axel = Math.random() + "";
//var a = axel * 10000000000000;
//var FLiframeSrc="https://4053494.fls.doubleclick.net/activityi;src=4053494;type=comca517;cat=xfini02c;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord="+a+"?";
//var FLiframe = document.createElement('iframe');
//    FLiframe.style.display = "none";
//    FLiframe.src = FLiframeSrc;
//    FLiframe.width="1";
//    FLiframe.height="1";
//    FLiframe.frameborder="0";
//    document.body.appendChild(FLiframe);

//_satellite.notify('DTM:Doubleclick Floodlight - MV - 4497712 Upgrade Exec');
//});
//_satellite.notify('DTM:Doubleclick Floodlight - MV - 4497712 Upgrade Init');
});
