$(window).on("load",function(){window.comcast=window.comcast||{};var eventRegistrationData;window.comcast.xact=window.comcast.xact||{};(function(n){n.eventBroker=function(){"use strict";var t=this,n={},i=function(n,i,r){var u,f;if(n!==undefined&&n!=null) for(u=0;u<n.length;u++){f=n[u];try{f(i,r)}catch(e){i!==t&&t.raiseEvent("handledException",t,e)}}},r=function(t,i,r){var u=t+"."+i;n[u]===undefined&&(n[u]=[]);n[u].push(r)},u=function(t,r,u){var f,e;u!=null&&u.senderType!=null&&(f=u.senderType+"."+t,e=n[f],i(e,r,u));f="*."+t;e=n[f];i(e,r,u)},f=function(){n={}};return{reset:f,subscribe:r,raiseEvent:u}}(jQuery)})(comcast.xact);(function(n,t,i){"use strict";function r(n,t){var r=document.title;i.ajax({url:"https://xapi.xfinity.com/api/xact/webevents",dataType:"JSONP",data:{pageName:r,eventName:t.eventName},success:function(n){console.log(n)},error:function(n){console.log(n)}})} t.subscribe("*","Customer Event",r);n.eventPublisher={handler:r}})(comcast.xact,comcast.xact.eventBroker,jQuery);eventRegistrationData=[{page:new RegExp(/^(http|https):\/\/(prodtest\.|compat\.|preview\.)?(www\.)(([a-zA-Z0-9]+\.)+)?(xfinity\.com)\/learn/),events:[{query:document,clientEvent:"ready",eventName:"VisitedLearnPage"}]}],function(n,t,i){"use strict";var r=function(n,t,i,r){n&&t&&i&&r&&i.forEach(function(i){var u=i.page.test(r.href),f="metaData" in i?n(i.metaData.name).attr(i.metaData.attribute)==i.metaData.value:!0;u&&f&&i.events.forEach(function(i){var r=function(){t.raiseEvent("Customer Event",this,{senderType:"comcast.xact.businessEvents",eventName:i.eventName})};i.clientEvent=="ready"?n(r):n(i.query).on(i.clientEvent,r)})})};n.businessEvents={register:function(n,u){u=u||window.location;r(t,i,n,u)}}}(comcast.xact,jQuery,comcast.xact.eventBroker);comcast.xact.businessEvents.register(eventRegistrationData)})
