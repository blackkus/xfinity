for(var useRootDomainList=["bankofamerica.com","ml.com","merrilledge.com","bankcardservices.co.uk","tcsandbox.com"],useRootDomain,urdIndex=0;urdIndex<useRootDomainList.length;urdIndex++)if(-1!==window.location.href.indexOf(useRootDomainList[urdIndex])){useRootDomain=useRootDomainList[urdIndex];break}
var PersistentStorage=function(){function a(){if("undefined"==typeof g){var a=(new Date((new Date).getTime()+316224E5)).toUTCString();document.cookie="inqPc=1; path=/; expires="+a+";"+(-1!=window.location.href.indexOf(useRootDomain)?"domain="+useRootDomain+";":"");g=-1!=document.cookie.indexOf("inqPc")?!0:!1;document.cookie="inqPc=1; path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT"}return g}function b(a,b){a&&window.console&&console.log&&(b?console.log(a,b):console.log(a))}function c(){var a={setValue:function(a,
b,c){localStorage.setItem("LSCACHE-"+a,c);localStorage.setItem(a,b)}};return{getAllCookies:function(){var a="",b,c,d;for(d in localStorage)0!==d.indexOf("LSCACHE-")&&(b=localStorage.getItem(d),0===d.indexOf("inqCA")&&(c=sessionStorage.getItem("sinqCA"),!isNaN(c)&&0<c&&(b=0)),a+=""+d+"="+b+";");return a},get:function(){var a={},b;for(b in localStorage)0!==b.indexOf("LSCACHE-")&&(a[b]=localStorage.getItem(b));return a},getItem:function(a){var b=new Date,c=localStorage.getItem("LSCACHE-"+a);return null!==
c&&"session"!==c&&(c=parseInt(c,10),!isNaN(c)&&c<b.getTime())?(this.removeItem(a),null):localStorage.getItem(a)},setItem:function(c,d,e,f){if("undefined"!==typeof e&&""!==e){f=new Date;var g=parseInt(e,10);isNaN(g)?(e=Date.parse(e),isNaN(e)?b("ERROR: PersistentStorage.cookieInstance: lifetime has to be a number or a date string"):e>f.getTime()?a.setValue(c,d,e):this.removeItem(c)):0<e?a.setValue(c,d,f.getTime()+e):this.removeItem(c)}else a.setValue(c,d,"session")},removeItem:function(a){localStorage.removeItem("LSCACHE-"+
a);localStorage.removeItem(a)},clear:function(){localStorage.clear()},onUnload:function(){var a=(new Date).getTime()+3E5,b;for(b in localStorage)0===b.indexOf("LSCACHE-")&&"session"===localStorage.getItem(b)&&localStorage.setItem(b,a)},version:"localStorage.0.0.3"}}function d(){return{getAllCookies:function(){return document.cookie},get:function(){for(var a=document.cookie.split(";"),b="",c="",d=null,e=null,f=0;f<a.length;f++)b=a[f].split("="),c=b[0].replace(/^\s+|\s+$/g,""),1<b.length&&(d=decodeURIComponent(b[1].replace(/^\s+|\s+$/g,
""))),null==e&&(e={}),e[c]=d;return e},getItem:function(a){a+="=";for(var b=document.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null},setItem:function(a,c,d,e){var f="";if("undefined"===typeof d||""===d)f="";else if(f=parseInt(d,10),isNaN(f)){f=Date.parse(d);if(isNaN(f)){b("ERROR: PersistentStorage.cookieInstance: days has to be a number or a date string");return}f=";expires="+d}else 0<
f?(d=new Date,d.setTime(d.getTime()+f),f=";expires="+d.toUTCString()):f=";expires=Thu, 01 Jan 1970 00:00:01 GMT";e=e&&("boolean"===typeof e||"string"===typeof e&&"true"===e.toLowerCase())?" secure;":"";document.cookie=a+"="+c+f+"; "+e+" path=/"+(-1!=window.location.href.indexOf(useRootDomain)?";domain="+useRootDomain:"")},removeItem:function(a){this.setItem(a,"",-1)},clear:function(){},onUnload:function(){},version:"cookie.0.0.3"}}var f,e=null,g,h=null;return{getInstance:function(){if(!f){if(a())e=
"cookie";else{var g=!1;if(/firefox/i.test(window.navigator.userAgent))try{window.localStorage&&!/(iPad|iPhone).*OS 7/i.test(navigator.userAgent)&&(localStorage.setItem("inqPc",2),g=!0)}catch(k){b("WARNING window.localStorage is not supported and chat may not be offered.",k)}g?e="localStorage":(null==h&&(h=a()||""===document.cookie?!1:!0),h&&(e="cookie"))}f="cookie"===e?d():"localStorage"===e?c():null}return f},isLocalStorageUsed:function(){return f&&"localStorage"===e},_testHook:{getCookieInstance:d,
getLocalStorageInstance:c}}}();var ptStorage=PersistentStorage.getInstance(),bPostMessage=null!=window.postMessage,hasStringSupport=!1,previousCommand="",xHRsInProgress={},xhrTimeoutController={},caUnloadController,beaconUnloadController,targetOrigin;function simpleChatPost(a){var b=a.indexOf("?");if(-1!=b){var c=a.substring(0,b);a=a.substring(b+1);b=getXMLHttpRequest();b.open("POST",c,!0);b.setRequestHeader("Content-type","application/x-www-form-urlencoded");b.send(a)}}
function doCommandsInClientDomain(a,b,c){var d=[];"string"==typeof a?(d[0]=c,d[1]=a):d=a;if(bPostMessage)hasStringSupport?parent.postMessage(convertArrToString(d),targetOrigin):parent.postMessage(d,targetOrigin);else{a=window.document.createElement("DIV");b+="?PRXY";var f="iframe_proxy_"+c;a.innerHTML='<IFRAME ID="'+f+'" STYLE="overflow: hidden; display: block; border: none; top:0px;left:0px;width: 1px; height: 1px;" NAME="'+c+"||LoadMgr.handleIESuccess('"+convertArrToString(d)+'\');" SRC="'+b+'">\n</IFRAME>';
document.body.appendChild(a);d=document.getElementById(f);a=function(){setTimeout('removeIframeProxyNode("iframe_proxy_'+c+'")',5E3)};d.addEventListener?d.addEventListener("load",a,!1):d.attachEvent?d.attachEvent("onload",a):d.onload=a}}function convertArrToString(a){for(var b=0;b<a.length;b++)a[b]=encodeURIComponent(a[b]);return a.join("||")}
function removeIframeProxyNode(a){try{var b=document.getElementById(a);if(b){var c=b.parentNode;c.removeChild(b);if(b=c)c=b.parentNode,c.removeChild(b)}}catch(d){window.console&&window.console.error(d.message)}}
function _executeCommandFromItems(a){if(a&&0<a.length)if("ONLOAD"===a[0])doCommandsInClientDomain([location.protocol+"//"+location.host]);else try{if(checkDataForSimplePost(a))simpleChatPost(a[0]);else try{doCommands(a)}catch(f){var b=a[3],c=a[1],d='if (inqFrame.Inq["proxyError"]!=null)inqFrame.Inq.proxyError("'+catchJsFormatter(f,a[0])+'");';doCommandsInClientDomain(d,b,c)}}catch(f){window.console&&window.console.error(f.message)}}
function checkDataForSimplePost(a){return/(^HTTP[s]?:).*/ig.test(a)}function whenLoaded(){if(bPostMessage){try{targetOrigin=parseUrl(document.referrer).origin,window.addEventListener?window.addEventListener("message",whenPosted,!1):window.attachEvent?window.attachEvent("onmessage",whenPosted):window.onmessage=whenPosted}catch(a){window.console&&window.console.log(a.message)}parseCommand()}else window.pIntervalCnt=0,window.pIntervalId=setInterval(function(){parseCommand()},50)}
function whenPosted(a){bPostMessage=!0;a=a?a:event;if(a.source===window)window.console&&window.console.error("Source window is equal to current window, command won't be executed.");else return(a=a.data)&&0<a.length&&("string"===typeof a?(hasStringSupport=!0,_executeCommandFromItems(a.split("||"))):(hasStringSupport=!1,_executeCommandFromItems(a))),!1}
function parseCommand(){var a=window.name;window.pIntervalId&&("undefined"!==typeof window.pIntervalCnt&&10<window.pIntervalCnt++||a&&0<a.length)&&clearInterval(window.pIntervalId);if(a&&0<a.length&&"_none"!=a&&(a=a.replace(previousCommand,""),0<a.length)){previousCommand=a;for(var a=a.split("&&"),b=0;b<a.length;b++)a[b]&&0<a[b].length&&_executeCommandFromItems(a[b].split("||"))}}
function setChatActiveFlag(a,b,c,d){caUnloadController&&caUnloadController.set(b);ptStorage.setItem(a,b,c,d);setSessionChatActiveFlagPS(b)}function getChatActiveFlag(a){try{var b=parseInt(ptStorage.getItem(a));return isNaN(b)?0:b}catch(c){return 0}}
function setSessionChatActiveFlagPS(a){if("undefined"===typeof a||isNaN(a))log("In setSessionChatActiveFlagPS(); requires one argument as a number");else try{PersistentStorage.isLocalStorageUsed()&&sessionStorage.setItem("sinqCA",a)}catch(b){log("Error while set sinqCA",b)}}function checkSameProtocolOrigin(a){return-1===a.indexOf(window.location.protocol)?a.replace(/^http:/i,window.location.protocol):a}
function pepareResponseData(a,b){var c=[];"unknown"!=typeof b.status?(c[0]=a,c[1]=b.responseText,c[2]=b.status,c[3]=b.getResponseHeader("Cache-Control")||"",c[4]=b.getResponseHeader("Content-Type")||""):c=[a,"","","",""];return c}function doAbortCommand(a){a=a[1];xHRsInProgress&&xHRsInProgress[a]&&xHRsInProgress[a].abort()}
function doPostChatCommand(a){var b="",c=a[0],d=a[1],f=a[3],e=a[4],g=a[5];a=parseInt(a[6])||0;try{var h=getXMLHttpRequest();xHRsInProgress[d]=h;h.open(g?"POST":"GET",e,!0);void 0!=h.timeout?h.timeout=a:xhrTimeoutController[d]=setTimeoutXHR(a,d,xHRsInProgress);h.onreadystatechange=function(){4==h.readyState&&(xhrTimeoutController[d]&&(clearTimeout(xhrTimeoutController[d]),delete xhrTimeoutController[d]),delete xHRsInProgress[d],doCommandsInClientDomain(pepareResponseData(d,h),f,d))};g?(h.setRequestHeader("Content-type",
"application/x-www-form-urlencoded"),h.send(decodeURIComponent(g))):h.send()}catch(m){b='if (inqFrame.Inq["proxyError"]!=null)inqFrame.Inq.proxyError("'+catchJsFormatter(m,c)+'");'+b,doCommandsInClientDomain(b,f,d)}}
function doSCBR3PMCommand(a){var b="",b=a[0],c=a[1],d=a[2],f=a[3];try{ptStorage.setItem(a[4]+"_"+d,a[5],a[7],a[8]),doCommandsInClientDomain("inqFrame.Inq.FlashPeer.set3rdPartyCookieFromQueue();\n",f,c)}catch(e){b='if (inqFrame.Inq["proxyError"]!=null)inqFrame.Inq.proxyError("'+catchJsFormatter(e,b)+'");inqFrame.Inq.FlashPeer.set3rdPartyCookieFromQueue();\n',doCommandsInClientDomain(b,f,c)}}
function doGCBR3Command(a){var b="",c=a[0],d=a[1],f=a[2];a=a[3];if(ptStorage)try{if(f)var e=ptStorage.getItem(f),b=f+"="+e;else{var g=ptStorage.getAllCookies();""===g&&(g="inqPc=1");b=g}doCommandsInClientDomain(b,a,d)}catch(h){b='if (inqFrame.Inq["proxyError"]!=null)inqFrame.Inq.proxyError("'+catchJsFormatter(h,c)+'");'+b,doCommandsInClientDomain(b,a,d)}else doCommandsInClientDomain("no-cookie",a,d)}
function doCommitPointCommand(a){var b="",c=a[0],d=a[1],f=a[2];a=a[3];try{var e=unescape(ptStorage.getItem("inqVital_"+f)),g=/\bvcnt:([0-9]+)/.exec(e),b="inqFrame.Inq.FlashPeer.when3rdPartyCookieCommitted("+(2==g.length?g[1]:0)+");";doCommandsInClientDomain(b,a,d)}catch(h){b='if (inqFrame.Inq["proxyError"]!=null)inqFrame.Inq.proxyError("'+catchJsFormatter(h,c)+'");'+b,doCommandsInClientDomain(b,a,d)}}
function doDumpCommand(a){var b="",c=a[0],d=a[1],f=a[3];try{var e=decodeURIComponent(a[4]),g="_rand="+Math.round(0xe8d4a51001*Math.random()).toString(36)+"&level=info&line=document.cookie: "+encodeURIComponent(""+document.cookie),h=getXMLHttpRequest();xHRsInProgress[d]=h;h.open("POST",e,!0);h.onreadystatechange=function(){4==h.readyState&&(delete xHRsInProgress[d],doCommandsInClientDomain("",f,d))};h.setRequestHeader("Content-type","application/x-www-form-urlencoded");h.send(g)}catch(m){b='if (inqFrame.Inq["proxyError"]!=null)inqFrame.Inq.proxyError("'+
catchJsFormatter(m,c)+'");'+b,doCommandsInClientDomain(b,f,d)}}
function doPOSTBR30Command(a){var b="",c=a[0],d=a[1],f=a[3];try{var e=decodeURIComponent(a[4]),g=e.indexOf("?"),h=e.substring(0,g),h=checkSameProtocolOrigin(h),m=e.substring(g+1),k=getXMLHttpRequest();xHRsInProgress[d]=k;k.open("POST",h,!0);k.onreadystatechange=function(){4==k.readyState&&(delete xHRsInProgress[d],doCommandsInClientDomain(pepareResponseData(d,k),f,d))};var l;try{l=JSON.parse(a[5])}catch(p){}if(l&&"object"===typeof l)for(var n in l)k.setRequestHeader(n,l[n]);k.setRequestHeader("Content-type",
"application/x-www-form-urlencoded");k.send(m)}catch(p){b='if (inqFrame.Inq["proxyError"]!=null)inqFrame.Inq.proxyError("'+catchJsFormatter(p,c)+'");'+b,console&&console.error&&console.error("Error on post operation: "+b,p),doCommandsInClientDomain(b,f,d)}}
function doPOSTJSONCommand(a){var b="",c=a[0],d=a[1],f=a[3];try{var e=decodeURIComponent(a[4]),g=e.indexOf("?"),h=e.substring(0,g),h=checkSameProtocolOrigin(h),m=e.substring(g+1),k=getXMLHttpRequest();xHRsInProgress[d]=k;k.open("POST",h,!0);k.onreadystatechange=function(){4==k.readyState&&(delete xHRsInProgress[d],doCommandsInClientDomain(pepareResponseData(d,k),f,d))};k.setRequestHeader("Content-type","application/json;charset=UTF-8");k.send(m)}catch(l){b='if (inqFrame.Inq["proxyError"]!=null)inqFrame.Inq.proxyError("'+
catchJsFormatter(l,c)+'");'+b,console&&console.error&&console.error("Error on post operation: "+b,l),doCommandsInClientDomain(b,f,d)}}
function doCobrowseCommand(a){var b="",b=a[0],c=a[1],d=a[3],f=a[4];6<a.length?(a.splice(0,5),a=a.join("||")):a=a[5];try{var e=getXMLHttpRequest();xHRsInProgress[c]=e;e.open("POST",f,!0);e.onreadystatechange=function(){if(4==e.readyState){delete xHRsInProgress[c];var a="(window.Inq.CBC).ackReceived('"+encodeURIComponent(toJsString(e.responseText))+"',\""+c+'");\n';doCommandsInClientDomain(a,d,c)}};e.setRequestHeader("Content-type","application/octet-stream");e.send(a)}catch(g){b='(window.Inq.CBC).callBackProxyError("'+
b+'","'+c+'","'+catchJsFormatter(g,b)+'");',doCommandsInClientDomain(b,d,c)}}function doCBAUTHCommand(a){var b="",c=a[0],d=a[1],f=a[2],e=a[3];try{var g=a[4],h=a[5];ptStorage.setItem(g+"_"+f,h,a[7],a[8]);h=ptStorage.getItem(g+"_"+f);b="(window.Inq.CBC).callBackAuthorized("+toJsString(h,'"')+',"'+d+'");\n';doCommandsInClientDomain(b,e,d)}catch(m){b='(window.Inq.CBC).callBackProxyError("'+c+'","'+d+'","'+catchJsFormatter(m,c)+'");',doCommandsInClientDomain(b,e,d)}}
function doCBCheckCommand(a){var b="",c=a[0],d=a[1],f=a[2];a=a[3];try{var e=ptStorage.getItem("cobrowse_"+f),b="(window.Inq.CBC).callBackAuthorized("+toJsString(e,'"')+',"'+d+'");\n';doCommandsInClientDomain(b,a,d)}catch(g){b='(window.Inq.CBC).callBackProxyError("'+c+'","'+d+'","'+catchJsFormatter(g,c)+'");',doCommandsInClientDomain(b,a,d)}}
function doChatActiveCommand(a){try{var b=a[2],c=parseStringToBoolean(a[3]),d=1E3*parseInt(a[4]),f=a[5],e="inqCA_"+b;a=c?2:1;setChatActiveFlag(e,a,"",f);caUnloadController||(caUnloadController=new UnloadController(function(a){a=caUnloadController.get();var c=getChatActiveFlag(e);0!=a&&c==a&&(setChatActiveFlag(e,0,"",f),ptStorage.setItem("inqLT_"+b,""+(new Date).getTime(),d,f),ptStorage.onUnload())},null,a));caUnloadController.activate()}catch(g){}}
function chatDeactivate(a){var b=a[1],c=a[3];a="inqCA_"+a[2];caUnloadController&&caUnloadController.deactivate();if("UNLOAD_HANDLER"!==b)try{setChatActiveFlag(a,0,"",c)}catch(d){}}
function doBeaconCommand(a){function b(a,b,c){beaconUnloadController.activate();beaconUnloadController.set(a);beaconUnloadController.url=b;beaconUnloadController.complete=c}var c=a[1];beaconUnloadController||(beaconUnloadController=new UnloadController(function(a){parseCommand();beaconUnloadController.complete||(a=beaconUnloadController.url,a+="&timestamp="+(new Date).getTime(),sendBeacon(a,beaconUnloadController.get()),beaconUnloadController.complete=!0)}));"ACTIVATE"==c?b(a[2],a[3],!1):"DEACTIVATE"==
c?beaconUnloadController.deactivate():c&&-1<c.indexOf("activeWindowUnload")?b(a[5],a[4],!1):"DATA"==c&&beaconUnloadController.set(a[2])}
function doCommands(a){var b="",b=a[0];switch(b){case "ABORT":doAbortCommand(a);break;case "POSTCHAT":doPostChatCommand(a);break;case "SCBR3_PM":doSCBR3PMCommand(a);break;case "GCBR3":doGCBR3Command(a);break;case "COMMITPOINT":doCommitPointCommand(a);break;case "DUMP":doDumpCommand(a);break;case "POSTBR30":doPOSTBR30Command(a);break;case "POSTJSON":doPOSTJSONCommand(a);break;case "COBROWSE":doCobrowseCommand(a);break;case "CBAUTH":doCBAUTHCommand(a);break;case "CBCHECK":doCBCheckCommand(a);break;
case "CHATACTIVE":doChatActiveCommand(a);break;case "CHATDEACTIVATE":chatDeactivate(a);break;case "BEACON":doBeaconCommand(a);break;case "POSTSYNC":doPostSyncCommand(a);break;default:if(3<a.length){var c=a[1];a=a[3];var d=Error("Undefined Request for ["+b+"] command");try{throw d.name="Syntax Error",d;}catch(f){b='if (inqFrame.Inq["proxyError"]!=null)inqFrame.Inq.proxyError("'+catchJsFormatter(f,b)+'");',doCommandsInClientDomain(b,a,c)}}}}
function doPostSyncCommand(a){var b="",c=a[0],d=a[1],f=a[3];try{var e=decodeURIComponent(a[4]),g=e.indexOf("?"),h=e.substring(0,g),h=checkSameProtocolOrigin(h),m=e.substring(g+1),k=getXMLHttpRequest();xHRsInProgress[d]=k;k.open("POST",h,!1);k.setRequestHeader("Content-type","application/x-www-form-urlencoded");var l;try{l=JSON.parse(a[5])}catch(p){}if(l&&"object"===typeof l)for(var n in l)k.setRequestHeader(n,l[n]);k.send(m);delete xHRsInProgress[d];doCommandsInClientDomain(pepareResponseData(d,k),
f,d)}catch(p){b='if (inqFrame.Inq["proxyError"]!=null)inqFrame.Inq.proxyError("'+catchJsFormatter(p,c)+'");'+b,console&&console.error&&console.error("Error on post operation: "+b,p),doCommandsInClientDomain(b,f,d)}}whenLoaded();function getXMLHttpRequest(){if(window.XMLHttpRequest)return new XMLHttpRequest;if(window.ActiveXObject)return new ActiveXObject("Microsoft.XMLHTTP");throw Error("Impossible to create XMLHttpRequest object.");}function setTimeoutXHR(a,b,c){if(0<a&&c)return setTimeout(function(){c[b]&&c[b].abort()},a)}
function toJsString(a,b){if("string"==typeof a){var c;c=a.split("\\").join("\\\\");c=c.split('"').join('\\"');c=c.split("'").join("\\'");c=c.split("\n").join("\\n");c=c.split("\r").join("\\r");c=c.split("\t").join("\\t");b&&(c=b+c+b);return c}return a}function log(a,b){a&&window.console&&console.log&&(b?console.log(a,b):console.log(a))}
function formatArgument(a){try{var b="[unknown]";try{b="object"==typeof a?null!=a.constructor?a.constructor.toString():""+a:"("+typeof a+")"}catch(d){b=""+a}-1!=b.indexOf("function")&&(b=b.split("\n").join(" ").replace(/^\s*function (\w+)\s*\(\)[^\n]*/g,"[object $1]"));if("(boolean)"==b||"[object Boolean]"==b)b=a?"true":"false";if("(string)"==b||"[object String]"==b)b=toJsString(a,'"');if("(array)"==b||"[object Array]"==b){for(var b="",c=0;c<a.length&&!(b+=(0!=b.length?",":"")+formatArgument(a[c]),
128<b.length);c++);128<b.length&&(b=b.substr(0,125)+"...");return"["+b+"]"}return b}catch(d){return"[argument]"}}
function getStackTrace(a){try{var b=[];try{d.dont.exist+=0}catch(n){if(!n.stack&&window.opera&&n.message){for(var c=n.message.split("\n"),d=0,f=c.length;d<f;d++)if(c[d].match(/^\s*[A-Za-z0-9\-_\$]+\(/)){var e=c[d];c[d+1]&&(e+=" at "+c[d+1],d++);b.push(e)}b.shift();b.shift();return b.join("\n\t\t")}}if(arguments&&arguments.callee&&arguments.callee.caller){for(var g=arguments.callee.caller.caller;g;){var h=""+g.toString(),m=h.indexOf("function ")+9,k=h.indexOf("(",m),l=h.substring(m,k)||"anonymous function",
c="";if(g.arguments.length)for(d=0;d<g.arguments.length;d++)c+=(0!=c.length?",":"")+formatArgument(g.arguments[d]);b.push(l+"("+c+")");g=g.caller}return"stack trace:\n\t\t"+b.join("\n\t\t")}return""}catch(n){return""}}function catchJsFormatter(a,b){try{var c="\tERROR while processing "+b+": "+a.name+" - "+a.message,c=c+("\n\t"+getStackTrace(a));return toJsString(c)}catch(d){return""}}function parseStringToBoolean(a){return"string"==typeof a?"true"==a:a}
function _addEventListener(a,b,c,d){d||(d=!1);window.addEventListener?a.addEventListener(b,c,d):window.attachEvent&&a.attachEvent("on"+b,c)}function sendBeacon(a,b){navigator.sendBeacon?navigator.sendBeacon(a,b):sendBeaconByXHR(a,b)}function sendBeaconByXHR(a,b){var c=getXMLHttpRequest();c.open("POST",a,!1);c.setRequestHeader("Content-Type","text/plain;charset=UTF-8");c.send(b)}
function parseUrl(a){var b=a.match(/^(https?):\/\/([^\/:]+)(:?(\d*))/),c=b[1],d=b[2],f=0<=d.indexOf(".")&&3<=d.split(".").length?d.split(".").slice(1).join("."):d,b=b[4]?b[4]:"http"===c?"80":"https"===c?"443":null,e=c+"://"+d;null!==b&&"80"!==b&&"443"!==b&&(e+=":"+b);return{origin:e,href:a,protocol:c,domain:f,host:d,port:b}};function UnloadController(a,b,c){this.active=!1;this.handler=a;this._value=c||null;if(b)for(var d in b)this[d]=b[d]}UnloadController.prototype.activate=function(){if(!this.onunload){this.onunload=function(a){this.isActive()&&(this.handler(a),this.deactivate())};var a=this;this._addUnloadHandler(function(b){b=b||window.event;a.onunload(b)})}this.active=!0};UnloadController.prototype.deactivate=function(){this.active=!1};UnloadController.prototype.isActive=function(){return this.active};
UnloadController.prototype.set=function(a){this._value=a};UnloadController.prototype.get=function(){return this._value};UnloadController.prototype._addUnloadHandler=function(a,b){_addEventListener(window,"unload",a,b);_addEventListener(window,"beforeunload",a,b);_addEventListener(window,"pagehide",a,b)};