_satellite.pushAsyncScript(function(event, target, $variables){
  var ft_onetag_9487 = {
	ft_vars:{
		"ftXRef":"",
		"ftXValue":"",
		"ftXType":"",
		"ftXName":"",
		"ftXNumItems":"",
		"ftXCurrency":"",
		"U1":"",
		"U2":"",
		"U3":"",
		"U4":"",
		"U5":"",
		"U6":"",
		"U7":"",
		"U8":"",
		"U9":"",
		},
	ot_dom:document.location.protocol+'//servedby.flashtalking.com',
	ot_path:'/container/12345;91797;9487;iframe/?',
	ot_href:'ft_referrer='+escape(document.location.href),
	ot_rand:Math.random()*1000000,
	ot_ref:document.referrer,
	ot_init:function(){
		var o=this,qs='',count=0,ns='';
		for(var key in o.ft_vars){
			qs+=(o.ft_vars[key]==''?'':key+'='+o.ft_vars[key]+'&');
		}
		count=o.ot_path.length+qs.length+o.ot_href+escape(o.ot_ref).length;
		ns=o.ot_ns(count-2000);
		var FTiframeSrc=o.ot_dom+o.ot_path+qs+o.ot_href+"&ns="+ns+"&cb="+o.ot_rand;
		var FTiframe = document.createElement('iframe');
		FTiframe.style.display = "none";
		FTiframe.src = FTiframeSrc;
		FTiframe.width="1";
		FTiframe.height="1";
		FTiframe.frameborder="0";
		document.body.appendChild(FTiframe);
	},
	ot_ns:function(diff){
		if(diff>0){
			var o=this,qo={},
				sp=/(?:^|&)([^&=]*)=?([^&]*)/g,
				fp=/^(http[s]?):\/\/?([^:\/\s]+)\/([\w\.]+[^#?\s]+)(.*)?/.exec(o.ot_ref),
				ro={h:fp[2],p:fp[3],qs:fp[4].replace(sp,function(p1,p2,p3){if(p2)qo[p2]=[p3]})};
			return escape(ro.h+ro.p.substring(0,10)+(qo.q?'?q='+unescape(qo.q):'?p='+unescape(qo.p)));
		}else{
			var o=this;
			return escape(unescape(o.ot_ref));
		}
			}
	}
ft_onetag_9487.ot_init();

_satellite.notify('DTM:Flashtalking - Sitewide oneTag');
});
