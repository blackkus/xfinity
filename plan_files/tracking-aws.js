!function(t){"use strict";({id:"aws",version:3.03,initialize:function(){this.bindListeners()},debug:function(){if(window.trackingDebug){var t=[].slice.call(arguments);t.unshift("Data Layer ("+this.id+" Plugin): "),console.log.apply(this,t)}},bindListeners:function(){document.addEventListener("c-tracking-trigger",this.executeTrackingCall.bind(this),!1),document.addEventListener("c-tracking-load-defaults",this.setDefaults.bind(this),!1)},setDefaults:function(t){t.detail.plugins.push({name:this.id,version:this.version,description:"Pass Data-Layer information to aws end point",errorDetected:this.checkErrors()})},checkErrors:function(){return(this.pluginError||"function"!=typeof XMLHttpRequest)&&(this.pluginError=!0),this.pluginError},sendAjax:function(t,e,i){var n=new XMLHttpRequest;if(!n)return this.debug('Send Data ERROR - No Request, Method: "',t,'"'),!1;n.onreadystatechange=n.ontimeout=function(i){i.target.readyState===XMLHttpRequest.DONE&&this.debug("Send Data: ",200===n.status?"SUCCESS":"FAILED",', Type: "',i.type,'", Method: "',t,'", Data: ',e,", Request Obj: ",i.target)}.bind(this),n.open("PUT","https://dl.cws.xfinity.com/event/"),n.setRequestHeader("Content-Type","application/json"),n.send(JSON.stringify(i)),this.debug('Send Data, Method: "',t,'", Payload: "',i,'"')},sendRequest:function(t,e){var i={method:e,Data:JSON.stringify(t)};this.sendAjax(e,t,i)},executeTrackingCall:function(e){try{var i,n=t.merge({},e.detail.data.eventInfo),a=t.get(e,"detail.type",""),s=!0,o=t.get(n,"eventMethod","")||"send-Event";switch(a){case"page":o="PageLoadEvent",i=t.merge({},window.digitalData,{eventMethod:o});break;default:if("c-tracking-init-start"!==a||""===t.get(window,"digitalData.siteInfo.visitorID","")&&!t.get(window,"digitalData.siteInfo.sessionID","")){if(t.startsWith(a,"c-tracking-init-")){s=!1;break}}else o="Start-PageLoadEvent";t.merge(n,{schemaVersion:t.get(window,"digitalData.schemaVersion",void 0),version:t.get(window,"digitalData.version",void 0),subSchemas:t.get(window,"digitalData.subSchemas",void 0),eventMethod:o,siteInfo:{visitorID:t.get(window,"digitalData.siteInfo.visitorID",void 0),sessionID:t.get(window,"digitalData.siteInfo.sessionID",void 0)},browserInfo:{location:t.get(window,"digitalData.browserInfo.location",void 0)},page:{pageInfo:{pageName:t.get(window,"digitalData.page.pageInfo.pageName",void 0),pageurl:location.href}}}),i=n}s&&!this.pluginError&&this.sendRequest(i,o)}catch(t){this.debug("EXCEPTION:",t,this.pluginError?"AWS NOT AVAILABLE!":"")}}}).initialize()}(window._dl||window._);