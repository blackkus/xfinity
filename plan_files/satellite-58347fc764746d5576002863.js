_satellite.pushAsyncScript(function(event, target, $variables){
  _satellite.getVar('Exec: Non-Omni Tag')(function(){
    var TCpixelimgSrc="https://comcast.inq.com/chatskins/launch/inqChatLaunch312.js";
    var TCpixelimg = document.createElement('script');
    TCpixelimg.src = TCpixelimgSrc;
    document.body.appendChild(TCpixelimg);

_satellite.notify('DTM:Touch Commerce JS Tag Exec');
          
});
_satellite.notify('DTM:Touch Commerce JS Tag Init');            

});
