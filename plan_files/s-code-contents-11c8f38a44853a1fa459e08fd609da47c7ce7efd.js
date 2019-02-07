/* SiteCatalyst code version: appmeasurement 2.10.0*/

/* Change Log:
07/18/2017:
1. include login.xfinity.com in linkInternalFilters
2. prop4 get and persis removal
3. upgrade to version 2.7.0
4. Channel Manager plugin update
01/17/2019
1. Updated the version of the plugins
2. commented the legacy code
3. updated the analytics code version to 2.10.0
*/

var upDate='01172019'; //Updated on 01-17-2019
s = new AppMeasurement()

if(_satellite.configurationSettings.settings.isStaging.toString()=="true")
{
s.account="comcastdotcomqa";
}
else if(_satellite.configurationSettings.settings.isStaging.toString()=="false")
{
 	s.account = "comcastdotcomprod";
}


/************************** CONFIG SECTION **************************/
s.currencyCode = "USD"
s.charSet = "UTF-8"
s.trackDownloadLinks = true
s.trackExternalLinks = true
s.trackInlineStats = true
s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls"
//any edits to the s.linkInternalFilters will need a change in the s_account variable setting as done above
s.linkInternalFilters = "javascript:,comcast.com,www.xfinity,comcast.convergentcare.com,customer.xfinity.com,es.xfinity.com,forums.xfinity.com,ly.xfinity.com,mobile.xfinity.com,mostlivesports.com,referafriend.xfinity.com,sitesearch.xfinity.com,wifi.xfinity.com,forums.businesshelp.comcast.com,api.xfinity.com,cdn.xfinity.com,comcastsupport.com,login.xfinity.com"
s.linkLeaveQueryString = false
s.linkTrackVars = "None"
s.linkTrackEvents = "None"



/*channel Manager  */
s._channelParameter = "Banner Ad|dfaid>Email Marketing|MID"
s._channelPattern = "Banner Ad|BAC>Direct Marketing|DMC>Email Marketing|EMC>Owned Assets|ILC>Paid Search|KNC>Social|SOC>Television|TEL"

/*Added by SE, Pointmarc, 9/20/2012, in order to allow for tracking callback functions*/
//Commented by Adobe team for optimization work
/*s.eventCompleteCallback = function(){};
s.addToCart = function (p, i) {
        var s = this;
        s.events = i > 0 ? "scAdd" : "scAdd,scOpen";
        s.products = ";" + p;
        s.linkTrackVars = "events,products";
        s.linkTrackEvents = s.events;
        s.eventCompleteCallback = SiteCatOnclickCall;
        s.tl(true, "o", "Add to Cart");
    };
*/

/* s.removeFromCart = function (p) {
        var s = this;
        s.events = "scRemove";
        s.products = ";" + p;
        s.linkTrackVars = "events,products";
        s.linkTrackEvents = s.events;
        s.eventCompleteCallback = SiteCatOnclickCall;
        s.tl(true, "o", "Remove From Cart");
    }; */

s.prop54 = (typeof(Visitor) != "undefined" ? "VisitorAPI Present" : "VisitorAPI Missing");
s.visitor = Visitor.getInstance("DA11332E5321D0550A490D45@AdobeOrg");


s.usePlugins = true
function s_doPlugins(s) {

	/* EBI Segment for Adobe Target	 */
  s.prop23 = AdobeTeamUtils.getCustomSegments(s.events);

        /* Allant integration testing */
        s.eVar51 = s.Util.getQueryParam('mid');
    //allant link ID
        s.eVar52 = s.Util.getQueryParam('rid');
    //allant recipient ID
        s.campaign = s.eVar53 = (s.eVar51 + '').substring(0, s.eVar51.indexOf('^'));

    s.eVar66 = s.Util.getQueryParam('TargetId');// Targetted IDs
    var _buyflow_events = ['event18','event19','event33','event50'];
    var _ev = (s.events + '').split(',');
    s.events = '';
        for (var _i = 0; _i < _ev.length; _i++)
		{
                for (var _n = 0; _n < _buyflow_events.length; _n++)
				{
                        if (_ev[_i] == _buyflow_events[_n])
						{
                                _ev[_i] += s.purchaseID ? (':' + s.purchaseID) : '';
                        }
                 }
                s.events += _ev[_i] + ',';
         }
    s.events = s.events.substring(0, s.events.length - 1);
    s.eVar37 = "D=pageName";
    /* To avoid the searches event from firing if the same KW is searched */
    if (s.eVar41) {
            s.t_search = s.getValOnce(s.eVar41, 'ev41', 0);
            s.eVar42 = 'D="' + s.eVar42 + ' : "+v41';
                if (s.events.indexOf("event9") > -1) s.events = s.repl(s.events, ",event9", "");
                /*Handles multiple tabbed search tracking*/
                if (s.t_search) s.events = s.apl(s.events, "event9", ",", 2);
        }
    s._searchTerms = s.getAndPersistValue(s.eVar41, 'stc18', 0);
    if (!s.prop18 && s._searchTerms) s.prop18 = 'D="' + s._searchTerms + ' - "+ pageName';
    /* Channel Stacking and treat natural search as a campaign*/

	/* Link Handler or Exit link tracking */
  //Commented by Adobe team for Optimization Project
	/*Account for exit links not on xfinity.com
    //commenting the code for migration

		if (s.linkURL){
		if(s.linkURL.indexOf('my.xfinity.com')>-1){
			s.linkType='e';
			s.linkName='exit to my xfinity dot com';
			}
		if(s.linkURL.indexOf('business.comcast.com')>-1){
			s.linkType='e';
			s.linkName='exit to business class';
			}
		if(s.linkURL.indexOf('comcast.net')>-1){
			s.linkType='e';
			s.linkName='exit to comcast dot net';
			}
		if(s.linkURL.indexOf('fancast.com')>-1){
			s.linkType='e';
			s.linkName='exit to fancast dot com';
			}
		if(s.linkURL.indexOf('comcastsupport.com')>-1){
			s.linkType='e';
			s.linkName='exit to comcast support';
			}
		}
	*/

 /* Channel Stacking and treat natural search as a campaign*/
        s.channelManager('cmp,CMP,dfaid,DFAID,mid,MID,cid,CID', '', '0');

        if (s._channel == "Unknown Paid Channel") {
        s._channel = s._campaign.substring(0, 3)
			}
		if(s._campaign!== null && s._campaign.indexOf("I_B_CM")>-1){
				s._channel="Cable Movers";
			}
		if(s._campaign!== null && (s._campaign.indexOf("GOOCOMAL119455")>-1 || s._campaign.indexOf("GOOCOM119468")>-1)){
				s._channel="Organic";
			}
		if(s._campaign!== null && s._campaign.indexOf("XFICOMUTOL3X")>-1 && s._campaign.indexOf("ILC")<0){
				s._channel=".net redirect";
			}
        if (!s.campaign && s._channel == "Natural Search"){
                s.campaign = s._campaign + " organic";
                s.campaign = s.campaign.substr(15,s.campaign.length);
				s._channel="Organic";
			}

        if (!s.campaign) s.campaign = s._campaignID;


        //Need N/A for consistent keyword reporting/allocation
    if (s.campaign) s.eVar17 = s._keywords;

        /*Internal Link Tracking*/
    if (!s.eVar45) s.eVar45 = s.Util.getQueryParam('intcmp');
	if (!s.eVar45) s.eVar45 = s.Util.getQueryParam('INTCMP');

        s.eVar45 = s.getValOnce(s.eVar45, "s_v45", 0);

//clear out channel if internal or external
        if (s.eVar45) {
            s._channel = "";
            }
        if (s._channel && s._channel.toString().toLowerCase() == "external") {
            s._channel = "";
            }
        //set traffic except internal as a Other Natural Referrers
        if(s._channel=="Other Natural Referrers" && s._campaignID=="n/a" && (document.referrer.indexOf('xfinity.com')<0 && document.referrer.indexOf('comcast.com')<0)) {
             s.campaign="Other Natural Referrers";
            }
        //clear out the campaign tracking code and channel value if tracking code is set as 'n/a'
        if(s.campaign=="n/a"){
            s.campaign="";
            s._channel="";
            s.eVar17="";
        }

  /*Call to TNT integration Plugin*/
   //commenting the plugin by Adobe team for Optimization Project
		//s.tnt = s.trackTNT();


        //Copy purchaseID to transactionID and prop21 then truncate to 20 characters
       if (s.purchaseID) {
               s.prop21 = "D=xact";
               s.purchaseID = (s.purchaseID + '').slice(0, 20)
               }
        //page and content pathing
    if(!s.prop25){
        s.prop25=s.pageName+"|page load";
    }
    //Day Since Last Visits
  	s.eVar46=s.getDaysSinceLastVisit('s_lv');
    // Percent page View

      if(s.pageName)

          var ppvArray = s.getPercentPageViewed();
      if(typeof ppvArray != 'undefined' && typeof ppvArray[1] != 'undefined')
      {
          //set prop8 equal to the initial percent of the previous page viewed and the highest percent of the previous page viewed, delimited by a pipe character
          s.prop71 = 'initialpercent=' + ppvArray[2] + ' | highestpercent=' + ppvArray[1];
          //set prop9 equal to the previous page viewed
          s.prop70 = ppvArray[0];
      }
      else
          //blank out both prop8/prop9 if the plugin did not return a proper array
          s.prop71 = s.prop70 = "";


  //Passing the s_code location into prop73

      s.prop73 ="DTM Hosted |"+upDate;


//Page load plugin call- commenting the code by adobe team for optimization project
//s.prop72=s_getLoadTime();
//if(s_getLoadTime())s.events=s.apl(s.events,'event36='+s_getLoadTime(),',',1);

/**get Responsive Web Design Values**/
		var phoneMax='750';//initialize phonemax value
		var desktopMin='980';//initiliaze desktopmin value

		if(typeof bp1!='undefined' && typeof bp2!='undefined'){
			phoneMax= bp1;//set to bp1 if value is present on page
			desktopMin=bp2;//set to bp2 if value is present on page
		}
		var second=s.getRwd(false,phoneMax,desktopMin);
			if (typeof s.prop44 != 'undefined'){
			if(s.prop44.indexOf('responsive')>-1){ //update the text code to contains 'responsive' now from 'responsivedesign'
			second=s.getRwd(true,phoneMax,desktopMin);
			}
		}
		var viewportwidth;
		var viewportheight;

		// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
		if (typeof window.innerWidth != 'undefined')
		{
			  viewportwidth = window.innerWidth,
			  viewportheight = window.innerHeight
		}
		// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
		else if (typeof document.documentElement != 'undefined'
			 && typeof document.documentElement.clientWidth !=
			 'undefined' && document.documentElement.clientWidth != 0)
		{
			   viewportwidth = document.documentElement.clientWidth,
			   viewportheight = document.documentElement.clientHeight
		}
		// older versions of IE
		else
		{
			   viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
			   viewportheight = document.getElementsByTagName('body')[0].clientHeight
		}

		if (viewportwidth > viewportheight){
		  var first='landscape';
		  }
		  else first='portrait';
		//populating evar29 with the concatanated value of orientation and rwd plugin response
		s.eVar29 = first + ':' + second;

	/* Time To Complete different actions */
	if(s.inList("prodView", s.events) || s.inList("purchase", s.events) || s.inList("event12", s.events))
	{
		// Time between the last prodView and first purchase
		s.eVar87 = s.getTimeBetweenEvents('prodView', 'l', 'purchase', 'f', 's_ttc_ev87');
		// Time between the last Customize (e12) and first purchase
		s.eVar88 = s.getTimeBetweenEvents('event12', 'l', 'purchase', 'f', 's_ttc_ev88');
	}
/*Audience Management instantiation custom code*/

    s.AudienceManagement.setup({
             "partner":"comcast",
             "containerNSID":0,
             "uuidCookie": { //optional if you want to drop the UUID on the first party domain
                "name":"aam_uuid",
                "days": 30
            }
    });
    if(s.eVar71){
        var cGuid = s.eVar71;
    }
      if(s.eVar64){
        var aGuid = s.eVar64;
    }


        if((typeof cGuid != 'undefined' && cGuid) && (typeof aGuid != 'undefined' && aGuid))
            {
                        _satellite.getVisitorId().setCustomerIDs({
                                    "comcast618custguidv71":{
                                    "id":cGuid,
                                    "authState":Visitor.AuthState.AUTHENTICATED
                                    },
                                    "comcast_v64":{
                                    "id":aGuid,
                                    "authState":Visitor.AuthState.AUTHENTICATED
                                    }
                        });
            }
        if((typeof cGuid != 'undefined' && cGuid) && (typeof aGuid == 'undefined' && !aGuid))
            {

                        _satellite.getVisitorId().setCustomerIDs({
                                    "comcast618custguidv71":{
                                    "id":cGuid,
                                    "authState":Visitor.AuthState.AUTHENTICATED
                                    },
                        });
            }
        if(AdobeTeamUtils.getObjVal(digitalData, "user.0.profile.0.profileInfo.houseHoldKey"))
            {
                        _satellite.getVisitorId().setCustomerIDs({
                                    "comcast_houseHoldKey":{
                                    "id":AdobeTeamUtils.getObjVal(digitalData, "user.0.profile.0.profileInfo.houseHoldKey"),
                                    "authState":Visitor.AuthState.AUTHENTICATED
                                    }
                        });
            }

/* AAM to AA Integration*/

s.list2=s.getAamSegments('aam_sc','aamsc');

}
s.doPlugins = s_doPlugins
/************************** PLUGINS SECTION *************************/

/* Adobe Consulting Plugin: Cookie Combining Utility v2.0, requires AppMeasurement */
if("undefined"===typeof cookieCombiningUtility){var cookieCombiningUtility=!0,removeExpiredCookies=function(){var b=this.c_rr("s_pers"),d=(new Date).getTime(),a="";if(!b)return"";var c=b.split(";");for(var e=0,h=c.length;e<h;e++)(b=c[e].match(/\|([0-9]+)$/))&&parseInt(b[1])>=d&&(a+=c[e]+";");return a},cookieRead=function(b){var d=this.c_rr(b),a=this.removeExpiredCookies();if(d)return d;b=this.escape(b);d=a.indexOf(" "+b+"=");a=0>d?this.c_rr("s_sess"):a;d=a.indexOf(" "+b+"=");if(0>d)return"";var c=
a.indexOf("|",d);var e=a.indexOf(";",d);c=0<c?c:e;return this.unescape(a.substring(d+2+b.length,0>c?a.length:c))},cookieWrite=function(b,d,a){var c=new Date(0),e=0,h=!1,k=0;if("s_sq"===b)this.c_wr(b,d);else{this.c_wr(b,"",c);b=this.escape(b);var f=this.removeExpiredCookies();c=f.indexOf(" "+b+"=");-1<c&&(f=f.substring(0,c)+f.substring(f.indexOf(";",c)+1),h=!0);var g=this.c_rr("s_sess");c=g.indexOf(" "+b+"=");-1<c&&(g=g.substring(0,c)+g.substring(g.indexOf(";",c)+1),k=!0);c=new Date;if(a){if(1===a){a=
new Date;var l=a.getYear();a.setYear(l+5+(1900>l?1900:0))}a.getTime()>c.getTime()&&(f+=" "+b+"="+this.escape(d)+"|"+a.getTime()+";",h=!0)}else g+=" "+b+"="+this.escape(d)+";",k=!0;g=g.replace(/%00/g,"");f=f.replace(/%00/g,"");k&&this.c_wr("s_sess",g,0);if(h){for(a=f;a&&-1<a.indexOf(";");)h=parseInt(a.substring(a.indexOf("|")+1,a.indexOf(";"))),a=a.substring(a.indexOf(";")+1),e=e<h?h:e;c.setTime(e);this.c_wr("s_pers",f,c)}return d===this.c_r(this.unescape(b))}},cookieDelete=function(b){this.c_w(b,
"",new Date(0))};
s.ccuSetup=function(){var s=this;s.c_wr||(s.c_wr=s.c_w);s.c_rr||(s.c_rr=s.c_r);s.removeExpiredCookies=removeExpiredCookies;s.c_r=s.cookieRead=cookieRead;s.c_w=s.cookieWrite=cookieWrite;s.c_d=s.cookieDelete=cookieDelete};
s.ccuSetup()};


/* AAM to AA Integration */
s.getAamSegments=new Function("a","b",""+"var s=this;var c=s.c_r(a);if(c){c=s.repl(c,b+'=','');}ret"+"urn c");

/* Plugin: channelManager v3.06 */
s.channelManager=function(a,b,c,d,e,f,g){var s=this,h=new Date,i=0,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V;U=s.getQueryParam?1:0;V=s.repl?1:0;if(e){i=1;if(s.c_r(e))i=0;h.setTime(h.getTime()+18E5);s.c_w(e,1,h);if(f&&s.c_r("s_tbm"+e+f.toString()))i=0}j=s.referrer?s.referrer:document.referrer;if(j=="Typed/Bookmarked")j="";j=decodeURIComponent(j.toLowerCase());if(!j)k=1;else{l=j.indexOf("?")>-1?j.indexOf("?"):j.length;m=j.substring(0,l);n=j.split("/");n=n[2].split("?");
o=n[0].toLowerCase();p=s.linkInternalFilters.toLowerCase();p=p.split(",");for(q=0;q<p.length;q++){r=o.indexOf(p[q])==-1?"":j;if(r)break}}if(!r&&!k){t=j;u=o;w="Other Natural Referrers";v=w+": "+o;x=s.seList+">"+s._extraSearchEngines;if(d==1){m=V?s.repl(m,"oogle","%"):s.replace(m,"oogle","%");m=V?s.repl(m,"ahoo","^"):s.replace(m,"ahoo","^");j=V?s.repl(j,"as_q","*"):s.replace(j,"as_q","*")}y=x.split(">");for(z=0;z<y.length;z++){A=y[z];A=A.split("|");B=A[0].split(",");for(C=0;C<B.length;C++){D=m.indexOf(B[C]);
if(D>-1){if(A[2])E=v=A[2];else E=o;if(d==1){E=V?s.repl(E,"#"," - "):s.replace(E,"#"," - ");j=V?s.repl(j,"*","as_q"):s.replace(j,"*","as_q");E=V?s.repl(E,"^","ahoo"):s.replace(E,"^","ahoo");E=V?s.repl(E,"%","oogle"):s.replace(E,"%","oogle")}F=A[1].split(",");for(G=0;G<F.length;G++){if(j.indexOf(F[G]+"=")>-1||j.indexOf("duckduckgo")>-1||j.indexOf("googlequicksearchbox")>-1||j.indexOf("http://www.google.")==0||j.indexOf("https://www.google.")==0||j.indexOf("https://search.yahoo.com/")==0||j.indexOf("http://r.search.yahoo.com")==
0||j.indexOf("https://www.bing.com")==0)H=1;I=U?s.getQueryParam(F[G],"",j).toLowerCase():s.Util.getQueryParam(F[G],j).toLowerCase();if(H||I)break}}if(H||I)break}if(H||I)break}}if(!r||g!="1"){J=a.split(",");for(var q in J)if(J.hasOwnProperty(q))if(U?s.getQueryParam(J[q]):s.Util.getQueryParam(J[q]))if(b)T=T?T+b+(U?s.getQueryParam(J[q]):s.Util.getQueryParam(J[q])):U?s.getQueryParam(J[q]):s.Util.getQueryParam(J[q]);else{T=U?s.getQueryParam(J[q]):s.Util.getQueryParam(J[q]);if(T)break}if(T){v=T;if(E)w=
"Paid Search";else w="Unknown Paid Channel"}if(!T&&E&&H){w="Natural Search";v=w+": "+E}}if(i&&k&&!T)t=u=v=w="Typed/Bookmarked";J=s._channelDomain;if(J&&o&&!r){K=J.split(">");for(L=0;L<K.length;L++){M=K[L]?K[L].split("|"):"";N=M[1]?M[1].split(","):"";O=N.length;for(P=0;P<O;P++){Q=N[P].toLowerCase();R=("/"+o).indexOf(Q);if(R>-1){w=M[0];v=T?v:w+": "+o;break}}if(R>-1)break}}J=s._channelParameter;if(J&&g!="1"){K=J.split(">");for(L=0;L<K.length;L++){M=K[L]?K[L].split("|"):"";N=M[1]?M[1].split(","):"";O=
N.length;for(P=0;P<O;P++){R=U?s.getQueryParam(N[P]):s.Util.getQueryParam(N[P]);if(R){w=M[0];v=T?v:w+": "+o;break}}if(R)break}}J=s._channelPattern;if(J&&g!="1"&&T){K=J.split(">");for(L=0;L<K.length;L++){M=K[L]?K[L].split("|"):"";N=M[1]?M[1].split(","):"";O=N.length;for(P=0;P<O;P++){Q=N[P].toLowerCase();R=T?T.toLowerCase():"";S=R.indexOf(Q);if(S==0){w=M[0];break}}if(S==0)break}}S=w?T+u+w+I:"";c=c?c:"c_m";if(c!="0")S=s.getValOnce(S,c,0);if(S){s._campaignID=T?T:"n/a";s._referrer=t?t:"n/a";s._referringDomain=
u?u:"n/a";s._campaign=v?v:"n/a";s._channel=w?w:"n/a";s._partner=E?E:"n/a";s._keywords=H?I?I:"Keyword Unavailable":"n/a";if(f&&w!="Typed/Bookmarked"){h.setTime(h.getTime()+f*864E5);s.c_w("s_tbm"+e+f.toString(),1,h)}}else s._campaignID=s._referrer=s._referringDomain=s._campaign=s._channel=s._partner=s._keywords=""};

/* channelManager seList (Top 40 Search Engines) */
s.seList="google.,googlesyndication.com,.googleadservices.com|q,as_q|Google>bing.com|q|Bing>yahoo.com,yahoo.co.jp|p,va|Yahoo!>ask.jp,ask.co|q,ask|Ask>search.aol.,suche.aolsvc.de|q,query|AOL>altavista.co,altavista.de|q,r|AltaVista>.mywebsearch.com|searchfor|MyWebSearch>webcrawler.com|q|WebCrawler>wow.com|q|Wow>infospace.com|q|InfoSpace>blekko.com|q|Blekko>dogpile.com|q|DogPile>alhea.com|q|Alhea>duckduckgo.com|q|DuckDuckGo>info.com|qkw|Info.com>contenko.com|q|Contenko>baidu.com|word,wd|Baidu>daum.net,search.daum.net|q|Daum>icqit.com|q|icq>myway.com|searchfor|MyWay.com>naver.com,search.naver.com|query|Naver>netscape.com|query,search|Netscape Search>reference.com|q|Reference.com>seznam|w|Seznam.cz>abcsok.no|q|Startsiden>tiscali.it,www.tiscali.co.uk|key,query|Tiscali>virgilio.it|qs|Virgilio>yandex|text|Yandex.ru>optimum.net|q|Optimum Search>search.earthlink.net|q|Earthlink>search.comcast.net|q|Comcast>libero.it|query|libero.it>excite.co|search|Excite>mail.ru|q|Mail.ru>isearch.avg.com|q|AVG>msn.com|q|MSN>seznam.cz|q|seznam.cz>so.com|q|so.com>ixquick.com|query|ixquick.com>sogou.com|query|sogou.com>360.cn|q|360.cn";

/* Adobe Consulting Plugin: getAndPersistValue v2.0, requires AppMeasurement */
s.getAndPersistValue=function(vtp,cn,ex){var b=new Date;cn=cn?cn:"s_gapv";(ex=ex?ex:0)?b.setTime(b.getTime()+864E5*ex):b.setTime(b.getTime()+18E5);vtp||(vtp=this.c_r(cn));this.c_w(cn,vtp,b);return vtp};


/* Utility Function: split v1.5 - split a string (JS 1.0 compatible) */
s.split = new Function("l", "d", ""
+ "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+ "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Plugin Utility: apl (Append to List) v2.0 (Minified)
 */
s.apl=function(l,v,d,u){var s=this,m=0,d=d?d:",";if(!l)l="";var i,a=l.split(d),al=a.length;for(i=0;i<al;i++)if(u==1&&a[i]==v){m=1;break}else if(u!=1&&a[i].toLowerCase()==v.toLowerCase()){m=1;break}if(!m)l=l?l+d+v:v;return l};

/* Adobe Consulting Plugin: inList v2.0 (requires AppMeasurement) */
s.inList=function(lv,vtc,d,cc){if("string"!==typeof vtc)return!1;if("string"===typeof lv)lv=lv.split(d?d:",");else if("object"!==typeof lv)return!1;d=0;for(var e=lv.length;d<e;d++)if(cc&&vtc===lv[d]||!cc&&vtc.toLowerCase()===lv[d].toLowerCase())return!0;return!1};

/* Adobe Consulting Plugin: getValOnce v2.0, requires AppMeasurement */
s.getValOnce=function(vtc,cn,et,ep){cn=cn?cn:"s_gvo";et=et?et:0;ep="m"===ep?6E4:864E5;if(vtc&&vtc!==this.c_r(cn)){var e=new Date;e.setTime(e.getTime()+et*ep);this.c_w(cn,vtc,0===et?0:e);return vtc}return""};


/* Plugin Utility: Replace v1.0*/
s.repl = new Function("x", "o", "n", ""
+ "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+ "substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/* Adobe Consulting Plugin: join v2.0 (requires AppMeasurement) */
s.join = function(ar,fr,ba,de,wr){var f="";fr=fr?fr:"";ba=ba?ba:"";de=de?de:"";wr=wr?wr:"";for(var b=0,h=ar.length;b<h;b++)f="object"==typeof ar[b]?f+this.join(ar[b],fr,ba,de,wr):f+(wr+ar[b]+wr),b<ar.length-1&&(f+=de);return fr+f+ba};


/* Adobe Consulting Plugin: getPreviousValue v2.0 (Requires AppMeasurement) */
s.getPreviousValue=function(vtc,cn,el){var s=this,g="",a=!0;cn=cn?cn:"s_gpv";if(el){a=!1;el=el.split(",");for(var h=s.events?s.events.split(","):"",e=0,k=el.length;e<k;e++){for(var f=0,l=h.length;f<l;f++)if(el[e]===h[f]){a=!0;break}if(!0===a)break}}!0===a&&(a=new Date,a.setTime(a.getTime()+18E5),s.c_r(cn)&&(g=s.c_r(cn)),vtc?s.c_w(cn,vtc,a):s.c_w(cn,"no previous value",a));return g};

/*
 * Plugin: getPercentPageViewed 2.01 (Minified)
 */
s.handlePPVevents=function(){if(!s_c_il)return;for(var i=0,scill=s_c_il.length;i<scill;i++)if(typeof s_c_il[i]!="undefined"&&s_c_il[i]._c&&s_c_il[i]._c=="s_c"){var s=s_c_il[i];break}if(!s)return;if(!s.getPPVid)return;var dh=Math.max(Math.max(s.d.body.scrollHeight,s.d.documentElement.scrollHeight),Math.max(s.d.body.offsetHeight,s.d.documentElement.offsetHeight),Math.max(s.d.body.clientHeight,s.d.documentElement.clientHeight)),vph=window.innerHeight||(s.d.documentElement.clientHeight||s.d.body.clientHeight),
st=window.pageYOffset||(window.document.documentElement.scrollTop||window.document.body.scrollTop),vh=st+vph,pv=Math.min(Math.round(vh/dh*100),100),c="",p=s.c_r("s_ppv").split(",")[0];if(!s.c_r("tp")||(s.unescape?s.unescape(p):decodeURIComponent(p))!=s.getPPVid||s.ppvChange=="1"&&(s.c_r("tp")&&dh!=s.c_r("tp"))){s.c_w("tp",dh);s.c_w("s_ppv","")}else c=s.c_r("s_ppv");var a=c&&c.indexOf(",")>-1?c.split(",",4):[],id=a.length>0?a[0]:escape(s.getPPVid),cv=a.length>1?parseInt(a[1]):0,p0=a.length>2?parseInt(a[2]):
pv,cy=a.length>3?parseInt(a[3]):0,cn=pv>0?id+","+(pv>cv?pv:cv)+","+p0+","+(vh>cy?vh:cy):"";s.c_w("s_ppv",cn)};
s.getPercentPageViewed=function(pid,change){var s=this,ist=!s.getPPVid?true:false;pid=pid?pid:s.pageName?s.pageName:document.location.href;s.ppvChange=change?change:"1";if(typeof s.linkType!="undefined"&&s.linkType!="0"&&s.linkType!=""&&s.linkType!="e")return"";var v=s.c_r("s_ppv"),a=v.indexOf(",")>-1?v.split(",",4):[];if(a&&a.length<4){for(var i=3;i>0;i--)a[i]=i<a.length?a[i-1]:"";a[0]=""}if(a)a[0]=unescape(a[0]);if(!s.getPPVid||s.getPPVid!=pid){s.getPPVid=pid;s.c_w("s_ppv",escape(s.getPPVid));s.handlePPVevents()}if(ist)if(window.addEventListener){window.addEventListener("load",
s.handlePPVevents,false);window.addEventListener("click",s.handlePPVevents,false);window.addEventListener("scroll",s.handlePPVevents,false);window.addEventListener("resize",s.handlePPVevents,false)}else if(window.attachEvent){window.attachEvent("onload",s.handlePPVevents);window.attachEvent("onclick",s.handlePPVevents);window.attachEvent("onscroll",s.handlePPVevents);window.attachEvent("onresize",s.handlePPVevents)}return pid!="-"?a:a[1]};


s.p_gn = new Function("t", "h", ""
+ "var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x="
+ "t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}"
+ "return 0;");


//getRWD plugin definition
s.getRwd=function(a,c,e){var d;var b=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;var f=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;if(a){if(b<c){d="phone layout";}else{if(b>=e){d="desktop layout";}else{if(b>=c&&b<e){d="tablet layout";}}}d=d+":"+b+"x"+f;}else{d="not rwd page:"+b+"x"+f;}return d;};


/*
* Plugin: getTimeBetweenEvents 0.2 - return the time between two events
*/
s.getTimeBetweenEvents=new Function("v1","v1fl","v2","v2fl","cn","e","fmt","rv",""
+"var s=this,v1p=false,v2p=false,v1a=s.split(v1,','),v2a=s.split(v2,'"
+",'),rva=rv?s.split(rv,','):[],t1,t2='',d=new Date(),x=new Date();cn"
+"=cn?cn:'s_tbe';fmt=fmt?fmt:'f';e=e?e:0;for(var i=0;i<rva.length;++i"
+"){if(s.inList(rva[i],s.events,',')){x.setDate(x.getDate()-1);s.c_w("
+"cn,'',x);return'';}}t1=s.c_r(cn);x.setTime(x.getTime()+e*86400000);"
+"for(var i=0;i<v1a.length&&!v1p;++i){v1p=s.inList(v1a[i],s.events,',"
+"');}for(var i=0;i<v2a.length&&!v2p;++i){v2p=s.inList(v2a[i],s.event"
+"s,',');}if(v1a.length==1&&v2a.length==1&&v1==v2){if(v1p&&v2p){s.c_w"
+"(cn,d.getTime(),e?x:0);if(t1){t2=(d.getTime()-t1)/1000;}}}else{if(v"
+"1p&&(v1fl=='l'||!t1)){s.c_w(cn,d.getTime(),e?x:0);}if(v2p&&t1){if(v"
+"2fl=='f'){x.setDate(x.getDate()-1);s.c_w(cn,'',x);}t2=(d.getTime()-"
+"t1)/1000;}}return t2?s.fmt_t2(t2,fmt):'';");
s.fmt_t2=new Function("t","fmt",""
+"if(fmt=='d'){return t/86400;}else if(fmt=='h'){return t/3600;}else "
+"if(fmt=='m'){return t/60;}else if(fmt=='s'){return t;}else{var td=8"
+"6400,th=3600,tm=60,r=5,u,un;if(t>td){u=td;un='days';}else if(t>th){"
+"u=th;un='hours';}else if(t>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1"
+";un='seconds';}t=t*r/u;return(Math.round(t)/r)+' '+un;}");


/* Adobe Consulting Plugin: manageVars v2.0 (Requires AppMeasurement; Also requires pt plugin and other necessary callback function/plugins) */
s.manageVars=function(e,b,c){var s=this;if(!s[e])return!1;b="string"===typeof b?b:"";c="boolean"===typeof c?c:!0;for(var d="pageName,purchaseID,channel,server,pageType,campaign,state,zip,events,products,transactionID",a=1;76>a;a++)d+=",prop"+a;for(a=1;251>a;a++)d+=",eVar"+a;for(a=1;6>a;a++)d+=",hier"+a;for(a=1;4>a;a++)d+=",list"+a;for(a in s.contextData)d+=",contextData."+a;if(b){if(!0===c)d=b.replace("['",".").replace("']","");else if(!1===c){b=b.split(",");c=d.split(",");d="";for(x in b)for(y in-1<b[x].indexOf("contextData")&&
(b[x]="contextData."+b[x].split("'")[1]),c)b[x]===c[y]&&(c[y]="");for(y in c)d+=c[y]?","+c[y]:""}s.pt(d,",",e,0);return!0}return""===b&&c?(s.pt(d,",",e,0),!0):!1};
/*s.clearVars=function(t){var s=this;if(t.indexOf("contextData")==-1)s[t]="";else if(t.indexOf("contextData")>-1){var c=t.substring(t.indexOf(".")+1);s.contextData[c]=""}};
s.lowercaseVars=function(t){var s=this;if(t!="events"&&t.indexOf("contextData")==-1&&s[t]){s[t]=s[t].toString();if(s[t].indexOf("D=")!=0)s[t]=s[t].toLowerCase()}else if(t.indexOf("contextData")>-1){var c=t.substring(t.indexOf(".")+1);if(s.contextData[c]){s.contextData[c]=s.contextData[c].toString();s.contextData[c]=s.contextData[c].toLowerCase()}}};
*/


/*
 * TNT Integration Plugin v2.2//commenting the plugin by adobe team for optimization project

s.trackTNT=function(v,p,b){var s=this,n="s_tnt",q="s_tntref",p=p?p:n,v=v?v:n,r="",pm=false,b=b?b:true;s.gqp=s.getQueryParam?s.getQueryParam:s.Util.getQueryParam;if(s.gqp(q)!="")s.referrer=s.gqp(q);else if(s.c_r(q)!=""){s.referrer=s.c_r(q);document.cookie=q+"=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;"}else if(document.cookie.indexOf(q)!=-1&&s.c_r(q)==""||location.search.indexOf(q+"=")!=-1&&s.gqp(q)==""){s.referrer="Typed/Bookmarked";document.cookie=q+"=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;"}if(s.gqp(p)!=
"")pm=s.gqp(p);else if(s.c_r(p)){pm=s.c_r(p);document.cookie=p+"=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;"}else if(s.c_r(p)==""&&s.gqp(p)=="")pm="";if(pm)r+=pm+",";if(window[v]!=undefined)r+=window[v];if(b)window[v]="";return r};

*/
/*
 * Plugin: Days since last Visit 1.1.H - capture time from last visit
 */
s.getDaysSinceLastVisit=new Function("c",""
+"var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT"
+"ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s"
+"etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f"
+"2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f"
+"5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);"
+"s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da"
+"y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day"
+"){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s."
+"c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c"
+"_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c"
+"+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur"
+"n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s"
+"!=f5) return '';else return cval_s;");


/*
 *  getQueryParam v2.5 - H-code and AppMeasurement Compatible
 */
s.getQueryParam=function(p,d,u,h){var s=this,v="",i,j,t;d=d?d:"";u=u?u:s.pageURL?s.pageURL:s.wd?s.wd.location:window.location;while(p){i=p.indexOf(",");i=i<0?p.length:i;t=s.p_gpv(p.substring(0,i),u+"",h);if(t)t=t.indexOf("#")>-1?t.substring(0,t.indexOf("#")):t;if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v};
s.p_gpv=function(k,u,h){var s=this,v="",q;j=h==1?"#":"?";i=u.indexOf(j);if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,"&","p_gvf",k)}return v};
s.p_gvf=function(t,k){if(t){var s=this,i=t.indexOf("="),p=i<0?t:t.substring(0,i),v=i<0?true:t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa?s.epa(v):s.unescape(v)}return""};

/*
 *  pt - utility function
 */
s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:""}return""};


/*
 * Partner Plugin: DFA Check 1.0 - Restrict DFA calls to once a visit, per report suite, per click
 * through. Used in conjunction with VISTA. Deduplicates SCM hits.
 */
s.partnerDFACheck=new Function("cfg",""
+"var s=this,c=cfg.visitCookie,src=cfg.clickThroughParam,scp=cfg.searchCenterParam,p=cfg.newRsidsProp,tv=cfg.tEvar,dl=',',cr,nc,q,g,gs,i,j,k,fnd,v=1,t=new Date,cn=0,ca=new Array,aa=new Array,cs=new A"
+"rray;t.setTime(t.getTime()+1800000);cr=s.c_r(c);if(cr){v=0;}ca=s.split(cr,dl);if(s.un)aa=s.split(s.un,dl);else aa=s.split(s.account,dl);for(i=0;i<aa.length;i++){fnd = 0;for(j=0;j<ca.length;j++){if(aa[i] == ca[j]){fnd=1;}}if(!fnd){cs[cn"
+"]=aa[i];cn++;}}if(cs.length){for(k=0;k<cs.length;k++){nc=(nc?nc+dl:'')+cs[k];}cr=(cr?cr+dl:'')+nc;s.vpr(p,nc);v=1;}if(s.wd)q=s.wd.location.search.toLowerCase();else q=s.w.location.search.toLowerCase();q=s.repl(q,'?','&');g=q.indexOf('&'+src.toLow"
+"erCase()+'=');gs=(scp)?q.indexOf('&'+scp.toLowerCase()+'='):-1;if(g>-1){s.vpr(p,cr);v=1;}else if(gs>-1){v=0;s.vpr(tv,'SearchCenter Visitors');}if(!s.c_w(c,cr,t)){s.c_w(c,cr,0);}if(!s.c_r(c)){v=0;}r"
+"eturn v>=1;");
/*
 * Utility Function: vpr - set the variable vs with value v
 */
s.vpr=new Function("vs","v",
"if(typeof(v)!='undefined'){var s=this; eval('s.'+vs+'=\"'+v+'\"')}");

/************************** DFA VARIABLES **************************/
/* @TODO: Fill in these variables with the settings mapped in the
 * DFA wizard and that match your desired preferences. Some of the
 * variables are optional and have been labeled as such below.
 * @TODO: Comments should be removed in a production deployment. */
var dfaConfig = {
	CSID:               '1516422', // DFA Client Site ID
	SPOTID:             '4053494', // DFA Spotlight ID
	tEvar:              'eVar22', // Transfer variable, typically the "View Through" eVar.
	errorEvar:          'eVar91', // DFA error tracking (optional)
	timeoutEvent:       'event114', // Tracks timeouts/empty responses (optional)
	requestURL:         "http://fls.doubleclick.net/json?spot=[SPOTID]&src=[CSID]&var=[VAR]&host=integrate.112.2o7.net%2Fdfa_echo%3Fvar%3D[VAR]%26AQE%3D1%26A2S%3D1&ord=[RAND]", // the DFA request URL
	maxDelay:           "875", // The maximum time to wait for DFA servers to respond, in milliseconds.
	visitCookie:        "s_dfa", // The name of the visitor cookie to use to restrict DFA calls to once per visit.
	clickThroughParam:  "CID", // A query string paramter that will force the DFA call to occur.
	searchCenterParam:  undefined, // SearchCenter identifier.
	newRsidsProp:       undefined //"prop34" // Stores the new report suites that need the DFA tracking code. (optional)
};
/************************ END DFA Variables ************************/
s.maxDelay = dfaConfig.maxDelay;
s.loadModule("Integrate")
s.Integrate.onLoad=function(s,m) {
	var dfaCheck = s.partnerDFACheck(dfaConfig);
	if (dfaCheck) {
		s.Integrate.add("DFA");
		s.Integrate.DFA.tEvar=dfaConfig.tEvar;
		s.Integrate.DFA.errorEvar=dfaConfig.errorEvar;
		s.Integrate.DFA.timeoutEvent=dfaConfig.timeoutEvent;
		s.Integrate.DFA.CSID=dfaConfig.CSID;
		s.Integrate.DFA.SPOTID=dfaConfig.SPOTID;
		s.Integrate.DFA.get(dfaConfig.requestURL);
		s.Integrate.DFA.setVars=function(s,p) {
			if (window[p.VAR]) { // got a response
				if(!p.ec) { // no errors
					s[p.tEvar]="DFA-"+(p.lis?p.lis:0)+"-"+(p.lip?p.lip:0)+"-"+(p.lastimp?p.lastimp:0)+"-"+(p.lastimptime?p.lastimptime:0)+"-"+(p.lcs?p.lcs:0)+"-"+(p.lcp?p.lcp:0)+"-"+(p.lastclk?p.lastclk:0)+"-"+(p.lastclktime?p.lastclktime:0)
				} else if (p.errorEvar) { // got an error response, track
					s[p.errorEvar] = p.ec;
				}
			} else if (p.timeoutEvent) { // empty response or timeout
				s.events = ((!s.events || s.events == '') ? '' : (s.events + ',')) + p.timeoutEvent; // timeout event
			}
		}
	}
}

/*********Integrate Module ******************/

function AppMeasurement_Module_Integrate(l){var c=this;c.s=l;var e=window;e.s_c_in||(e.s_c_il=[],e.s_c_in=0);c._il=e.s_c_il;c._in=e.s_c_in;c._il[c._in]=c;e.s_c_in++;c._c="s_m";c.list=[];c.add=function(d,b){var a;b||(b="s_Integrate_"+d);e[b]||(e[b]={});a=c[d]=e[b];a.a=d;a.e=c;a._c=0;a._d=0;void 0==a.disable&&(a.disable=0);a.get=function(b,d){var f=document,h=f.getElementsByTagName("HEAD"),k;if(!a.disable&&(d||(v="s_"+c._in+"_Integrate_"+a.a+"_get_"+a._c),a._c++,a.VAR=v,a.CALLBACK="s_c_il["+c._in+"]."+
a.a+".callback",a.delay(),h=h&&0<h.length?h[0]:f.body))try{k=f.createElement("SCRIPT"),k.type="text/javascript",k.setAttribute("async","async"),k.src=c.c(a,b),0>b.indexOf("[CALLBACK]")&&(k.onload=k.onreadystatechange=function(){a.callback(e[v])}),h.firstChild?h.insertBefore(k,h.firstChild):h.appendChild(k)}catch(l){}};a.callback=function(b){var c;if(b)for(c in b)Object.prototype[c]||(a[c]=b[c]);a.ready()};a.beacon=function(b){var d="s_i_"+c._in+"_Integrate_"+a.a+"_"+a._c;a.disable||(a._c++,d=e[d]=
new Image,d.src=c.c(a,b))};a.script=function(b){a.get(b,1)};a.delay=function(){a._d++};a.ready=function(){a._d--;a.disable||l.delayReady()};c.list.push(d)};c._g=function(d){var b,a=(d?"use":"set")+"Vars";for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&b[a])try{b[a](l,b)}catch(e){}};c._t=function(){c._g(1)};c._d=function(){var d,b;for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&0<b._d)return 1;return 0};c.c=function(c,b){var a,e,g,f;"http"!=b.toLowerCase().substring(0,4)&&
(b="http://"+b);l.ssl&&(b=l.replace(b,"http:","https:"));c.RAND=Math.floor(1E13*Math.random());for(a=0;0<=a;)a=b.indexOf("[",a),0<=a&&(e=b.indexOf("]",a),e>a&&(g=b.substring(a+1,e),2<g.length&&"s."==g.substring(0,2)?(f=l[g.substring(2)])||(f=""):(f=""+c[g],f!=c[g]&&parseFloat(f)!=c[g]&&(g=0)),g&&(b=b.substring(0,a)+encodeURIComponent(f)+b.substring(e+1)),a=e));return b}}

/***********Integrate Module code ENDS*************/


s.visitorNamespace = "comcastcom"
s.trackingServer = "comcastcom.d1.sc.omtrdc.net"
s.dc = 112

/* Mbox Integration */
if (typeof mboxLoadSCPlugin !== "undefined") { mboxLoadSCPlugin(); }

/* Audience Manager Load Module*/

s.loadModule("AudienceManagement");

function AppMeasurement_Module_AudienceManagement(d){var a=this;a.s=d;var b=window;b.s_c_in||(b.s_c_il=[],b.s_c_in=0);a._il=b.s_c_il;a._in=b.s_c_in;a._il[a._in]=a;b.s_c_in++;a._c="s_m";a.setup=function(c){b.DIL&&c&&(c.disableDefaultRequest=!0,c.disableScriptAttachment=!0,c.disableCORS=!0,c.secureDataCollection=!1,a.instance=b.DIL.create(c),a.tools=b.DIL.tools)};a.isReady=function(){return a.instance?!0:!1};a.getEventCallConfigParams=function(){return a.instance&&a.instance.api&&a.instance.api.getEventCallConfigParams?
a.instance.api.getEventCallConfigParams():{}};a.passData=function(b){a.instance&&a.instance.api&&a.instance.api.passData&&a.instance.api.passData(b)}}
"function"!==typeof window.DIL&&(window.DIL=function(e,f){var k=[],g,u;e!==Object(e)&&(e={});var s,q,F,P,A,y,L,G,Q,R,S,B,C,H,z;s=e.partner;q=e.containerNSID;F=!!e.disableDestinationPublishingIframe;P=e.iframeAkamaiHTTPS;A=e.mappings;y=e.uuidCookie;L=!0===e.enableErrorReporting;G=e.visitorService;Q=e.declaredId;R=!0===e.removeFinishedScriptsAndCallbacks;S=!0===e.delayAllUntilWindowLoad;B=!0===e.disableIDSyncs;C="undefined"===typeof e.secureDataCollection||!0===e.secureDataCollection;H=!0===e.useCORSOnly;
z="boolean"===typeof e.isCoopSafe?e.isCoopSafe:null;var T,U,M,I,V,W,X,Y,N;T=!0===e.disableScriptAttachment;U=!0===e.disableDefaultRequest;M=e.afterResultForDefaultRequest;I=e.dpIframeSrc;V=!0===e.testCORS;W=!0===e.useJSONPOnly;X=e.visitorConstructor;Y=!0===e.disableCORS;N=e.blacklistIELessThan9;L&&DIL.errorModule.activate();var $=!0===window._dil_unit_tests;(g=f)&&k.push(g+"");if(!s||"string"!==typeof s)return g="DIL partner is invalid or not specified in initConfig",DIL.errorModule.handleError({name:"error",
message:g,filename:"dil.js"}),Error(g);g="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";if(q||"number"===typeof q)q=parseInt(q,10),!isNaN(q)&&0<=q&&(g="");g&&(q=0,k.push(g),g="");u=DIL.getDil(s,q);if(u instanceof DIL&&u.api.getPartner()===s&&u.api.getContainerNSID()===q)return u;if(this instanceof DIL)DIL.registerDil(this,s,q);else return new DIL(e,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+s+" and containerNSID = "+
q);var m={IS_HTTPS:C||"https:"===document.location.protocol,POST_MESSAGE_ENABLED:!!window.postMessage,MILLIS_PER_DAY:864E5,DIL_COOKIE_NAME:"AAMC_"+encodeURIComponent(s)+"_"+q,FIRST_PARTY_SYNCS:"AMSYNCS",FIRST_PARTY_SYNCS_ON_PAGE:"AMSYNCSOP",HAS_JSON_STRINGIFY:window.JSON===Object(window.JSON)&&"function"===typeof window.JSON.stringify,REGION:"REGION",SIX_MONTHS_IN_MINUTES:259200,IE_VERSION:function(){if(document.documentMode)return document.documentMode;for(var a=7;4<a;a--){var b=document.createElement("div");
b.innerHTML="\x3c!--[if IE "+a+"]><span></span><![endif]--\x3e";if(b.getElementsByTagName("span").length)return a}return null}(),IS_IE_LESS_THAN_9_NOT_SUPPORTED:!1};m.IS_IE_LESS_THAN_9="number"===typeof m.IE_VERSION&&9>m.IE_VERSION;m.BLACKLIST_IE_LESS_THAN_9="undefined"!==typeof N?N:m.IS_IE_LESS_THAN_9&&m.IS_IE_LESS_THAN_9_NOT_SUPPORTED;var O={stuffed:{}},r={},n={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},
callbackPrefix:"demdexRequestCallback",firstRequestHasFired:!1,useJSONP:!0,abortRequests:!1,num_of_jsonp_responses:0,num_of_jsonp_errors:0,num_of_cors_responses:0,num_of_cors_errors:0,corsErrorSources:[],num_of_img_responses:0,num_of_img_errors:0,toRemove:[],removed:[],readyToRemove:!1,platformParams:{d_nsid:q+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:2E3,calledBack:!1,
mid:null,noVisitorAPI:!1,VisitorAPI:null,instance:null,releaseType:"no VisitorAPI",isOptedOut:!0,isOptedOutCallbackCalled:!1,admsProcessingStarted:!1,process:function(a){try{if(!this.admsProcessingStarted){this.admsProcessingStarted=!0;var b=this,c,d,l,h;if("function"===typeof a&&"function"===typeof a.getInstance){if(G===Object(G)&&(c=G.namespace)&&"string"===typeof c)d=a.getInstance(c,{idSyncContainerID:q});else{this.releaseType="no namespace";this.releaseRequests();return}if(d===Object(d)&&d instanceof
a&&"function"===typeof d.isAllowed&&"function"===typeof d.getMarketingCloudVisitorID&&"function"===typeof d.getCustomerIDs&&"function"===typeof d.isOptedOut){this.VisitorAPI=a;if(!d.isAllowed()){this.releaseType="VisitorAPI not allowed";this.releaseRequests();return}this.instance=d;l=function(a){"VisitorAPI"!==b.releaseType&&(b.mid=a,b.releaseType="VisitorAPI",b.releaseRequests())};h=d.getMarketingCloudVisitorID(l);if("string"===typeof h&&h.length){l(h);return}setTimeout(function(){"VisitorAPI"!==
b.releaseType&&(b.releaseType="timeout",b.releaseRequests())},this.getLoadTimeout());return}this.releaseType="invalid instance"}else this.noVisitorAPI=!0;this.releaseRequests()}}catch(e){this.releaseRequests()}},releaseRequests:function(){this.calledBack=!0;n.registerRequest()},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():null},getMIDQueryString:function(){var a=t.isPopulatedString,b=this.getMarketingCloudVisitorID();a(this.mid)&&this.mid===
b||(this.mid=b);return a(this.mid)?"d_mid="+this.mid+"&":""},getCustomerIDs:function(){return this.instance?this.instance.getCustomerIDs():null},getCustomerIDsQueryString:function(a){if(a===Object(a)){var b="",c=[],d=[],l,h;for(l in a)a.hasOwnProperty(l)&&(d[0]=l,h=a[l],h===Object(h)&&(d[1]=h.id||"",d[2]=h.authState||0,c.push(d),d=[]));if(d=c.length)for(a=0;a<d;a++)b+="&d_cid_ic="+p.encodeAndBuildRequest(c[a],"%01");return b}return""},getIsOptedOut:function(){this.instance?this.instance.isOptedOut([this,
this.isOptedOutCallback],this.VisitorAPI.OptOut.GLOBAL,!0):(this.isOptedOut=!1,this.isOptedOutCallbackCalled=!0)},isOptedOutCallback:function(a){this.isOptedOut=a;this.isOptedOutCallbackCalled=!0;n.registerRequest()},getLoadTimeout:function(){var a=this.instance;if(a){if("function"===typeof a.getLoadTimeout)return a.getLoadTimeout();if("undefined"!==typeof a.loadTimeout)return a.loadTimeout}return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE}},declaredId:{declaredId:{init:null,request:null},declaredIdCombos:{},
setDeclaredId:function(a,b){var c=t.isPopulatedString,d=encodeURIComponent;if(a===Object(a)&&c(b)){var l=a.dpid,h=a.dpuuid,e=null;if(c(l)&&c(h)){e=d(l)+"$"+d(h);if(!0===this.declaredIdCombos[e])return"setDeclaredId: combo exists for type '"+b+"'";this.declaredIdCombos[e]=!0;this.declaredId[b]={dpid:l,dpuuid:h};return"setDeclaredId: succeeded for type '"+b+"'"}}return"setDeclaredId: failed for type '"+b+"'"},getDeclaredIdQueryString:function(){var a=this.declaredId.request,b=this.declaredId.init,c=
encodeURIComponent,d="";null!==a?d="&d_dpid="+c(a.dpid)+"&d_dpuuid="+c(a.dpuuid):null!==b&&(d="&d_dpid="+c(b.dpid)+"&d_dpuuid="+c(b.dpuuid));return d}},registerRequest:function(a){var b=this.firingQueue;a===Object(a)&&b.push(a);this.firing||!b.length||S&&!DIL.windowLoaded||(this.adms.isOptedOutCallbackCalled||this.adms.getIsOptedOut(),this.adms.calledBack&&!this.adms.isOptedOut&&this.adms.isOptedOutCallbackCalled&&(this.adms.isOptedOutCallbackCalled=!1,a=b.shift(),a.src=a.src.replace(/demdex.net\/event\?d_nsid=/,
"demdex.net/event?"+this.adms.getMIDQueryString()+"d_nsid="),t.isPopulatedString(a.corsPostData)&&(a.corsPostData=a.corsPostData.replace(/^d_nsid=/,this.adms.getMIDQueryString()+"d_nsid=")),D.fireRequest(a),this.firstRequestHasFired||"script"!==a.tag&&"cors"!==a.tag||(this.firstRequestHasFired=!0)))},processVisitorAPI:function(){this.adms.process(X||window.Visitor)},requestRemoval:function(a){if(!R)return"removeFinishedScriptsAndCallbacks is not boolean true";var b=this.toRemove,c,d;a===Object(a)&&
(c=a.script,d=a.callbackName,(c===Object(c)&&"SCRIPT"===c.nodeName||"no script created"===c)&&"string"===typeof d&&d.length&&b.push(a));if(this.readyToRemove&&b.length){d=b.shift();c=d.script;d=d.callbackName;"no script created"!==c?(a=c.src,c.parentNode.removeChild(c)):a=c;window[d]=null;try{delete window[d]}catch(l){}this.removed.push({scriptSrc:a,callbackName:d});DIL.variables.scriptsRemoved.push(a);DIL.variables.callbacksRemoved.push(d);return this.requestRemoval()}return"requestRemoval() processed"},
getCoopQueryString:function(){var a="";!0===z?a="&d_coop_safe=1":!1===z&&(a="&d_coop_unsafe=1");return a}};u=function(){var a="http://fast.",b="?d_nsid="+q+"#"+encodeURIComponent(document.location.href);if("string"===typeof I&&I.length)return I+b;m.IS_HTTPS&&(a=!0===P?"https://fast.":"https://");return a+s+".demdex.net/dest5.html"+b};var v={THROTTLE_START:3E4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:"destination_publishing_iframe_"+s+"_"+q,url:u(),onPagePixels:[],iframeHost:null,getIframeHost:function(a){if("string"===
typeof a){var b=a.split("/");if(3<=b.length)return b[0]+"//"+b[2];k.push("getIframeHost: url is malformed: "+a);return a}},iframe:null,iframeHasLoaded:!1,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:m.POST_MESSAGE_ENABLED?null:100,ibsDeleted:[],jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,newIframeCreated:null,iframeIdChanged:!1,originalIframeHasLoadedAlready:null,
regionChanged:!1,timesRegionChanged:0,attachIframe:function(){function a(){d=document.createElement("iframe");d.sandbox="allow-scripts allow-same-origin";d.title="Adobe ID Syncing iFrame";d.id=c.id;d.name=c.id+"_name";d.style.cssText="display: none; width: 0; height: 0;";d.src=c.url;c.newIframeCreated=!0;b();document.body.appendChild(d)}function b(){p.addListener(d,"load",function(){d.className="aamIframeLoaded";c.iframeHasLoaded=!0;c.requestToProcess()})}if(!m.BLACKLIST_IE_LESS_THAN_9){var c=this,
d=document.getElementById(this.id);d?"IFRAME"!==d.nodeName?(this.id+="_2",this.iframeIdChanged=!0,a()):(this.newIframeCreated=!1,"aamIframeLoaded"!==d.className?(this.originalIframeHasLoadedAlready=!1,b()):(this.iframeHasLoaded=this.originalIframeHasLoadedAlready=!0,this.iframe=d,this.requestToProcess())):a();this.iframe=d}},requestToProcess:function(a,b){function c(){d.jsonForComparison.push(a);d.jsonWaiting.push([a,b])}var d=this,l,h;l=n.adms.instance;a===Object(a)&&l===Object(l)&&l.idSyncContainerID===
q&&(v.ibsDeleted.push(a.ibs),delete a.ibs);if(a&&!t.isEmptyObject(a))if(m.HAS_JSON_STRINGIFY)if(l=JSON.stringify(a.ibs||[]),h=JSON.stringify(a.dests||[]),this.jsonForComparison.length){var e=!1,f,g,k;f=0;for(g=this.jsonForComparison.length;f<g;f++)if(k=this.jsonForComparison[f],l===JSON.stringify(k.ibs||[])&&h===JSON.stringify(k.dests||[])){e=!0;break}e?this.jsonDuplicates.push(a):c()}else c();else c();(this.receivedThirdPartyCookiesNotification||!m.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length&&
(l=this.jsonWaiting.shift(),!1===this.newIframeCreated&&delete l[0].ibs,this.process(l[0],l[1]),this.requestToProcess());this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){d.messageSendingInterval=m.POST_MESSAGE_ENABLED?null:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},checkIfRegionChanged:function(a){var b=p.getDilCookieField(m.REGION);null!==b&&"undefined"!==typeof a.dcs_region&&parseInt(b,
10)!==a.dcs_region&&(this.regionChanged=!0,this.timesRegionChanged++,p.setDilCookieField(m.FIRST_PARTY_SYNCS_ON_PAGE,""),p.setDilCookieField(m.FIRST_PARTY_SYNCS,""));"undefined"!==typeof a.dcs_region&&p.setDilCookieField(m.REGION,a.dcs_region)},processSyncOnPage:function(a){var b,c,d;if((b=a.ibs)&&b instanceof Array&&(c=b.length))for(a=0;a<c;a++)d=b[a],d.syncOnPage&&this.checkFirstPartyCookie(d,"","syncOnPage")},process:function(a,b){var c=encodeURIComponent,d,l,h,e,f,g;b===Object(b)&&(g=p.encodeAndBuildRequest(["",
b.dpid||"",b.dpuuid||""],","));if((d=a.dests)&&d instanceof Array&&(l=d.length))for(h=0;h<l;h++)e=d[h],f=[c("dests"),c(e.id||""),c(e.y||""),c(e.c||"")],this.addMessage(f.join("|"));if((d=a.ibs)&&d instanceof Array&&(l=d.length))for(h=0;h<l;h++)e=d[h],f=[c("ibs"),c(e.id||""),c(e.tag||""),p.encodeAndBuildRequest(e.url||[],","),c(e.ttl||""),"",g,e.fireURLSync?"true":"false"],e.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(f.join("|")):e.fireURLSync&&this.checkFirstPartyCookie(e,f.join("|")));
this.jsonProcessed.push(a)},checkFirstPartyCookie:function(a,b,c){var d=(c="syncOnPage"===c?!0:!1)?m.FIRST_PARTY_SYNCS_ON_PAGE:m.FIRST_PARTY_SYNCS,l=this.getOnPageSyncData(d),h=!1,e=!1,f=Math.ceil((new Date).getTime()/m.MILLIS_PER_DAY);l?(l=l.split("*"),e=this.pruneSyncData(l,a.id,f),h=e.dataPresent,e=e.dataValid,h&&e||this.fireSync(c,a,b,l,d,f)):(l=[],this.fireSync(c,a,b,l,d,f))},getOnPageSyncData:function(a){var b=n.adms.instance;return b&&"function"===typeof b.idSyncGetOnPageSyncInfo?b.idSyncGetOnPageSyncInfo():
p.getDilCookieField(a)},pruneSyncData:function(a,b,c){var d=!1,l=!1,e,f,g;if(a instanceof Array)for(f=0;f<a.length;f++)e=a[f],g=parseInt(e.split("-")[1],10),e.match("^"+b+"-")?(d=!0,c<g?l=!0:(a.splice(f,1),f--)):c>=g&&(a.splice(f,1),f--);return{dataPresent:d,dataValid:l}},manageSyncsSize:function(a){if(a.join("*").length>this.MAX_SYNCS_LENGTH)for(a.sort(function(a,c){return parseInt(a.split("-")[1],10)-parseInt(c.split("-")[1],10)});a.join("*").length>this.MAX_SYNCS_LENGTH;)a.shift()},fireSync:function(a,
b,c,d,e,h){function f(a,b,c,d){return function(){g.onPagePixels[a]=null;var e=g.getOnPageSyncData(c),l=[];if(e){var e=e.split("*"),h,f,k;h=0;for(f=e.length;h<f;h++)k=e[h],k.match("^"+b.id+"-")||l.push(k)}g.setSyncTrackingData(l,b,c,d)}}var g=this;if(a){if("img"===b.tag){a=b.url;c=m.IS_HTTPS?"https:":"http:";var k,n,w;d=0;for(k=a.length;d<k;d++){n=a[d];w=/^\/\//.test(n);var x=new Image;p.addListener(x,"load",f(this.onPagePixels.length,b,e,h));x.src=(w?c:"")+n;this.onPagePixels.push(x)}}}else this.addMessage(c),
this.setSyncTrackingData(d,b,e,h)},addMessage:function(a){var b=encodeURIComponent,b=L?b("---destpub-debug---"):b("---destpub---");this.messages.push((m.POST_MESSAGE_ENABLED?"":b)+a)},setSyncTrackingData:function(a,b,c,d){a.push(b.id+"-"+(d+Math.ceil(b.ttl/60/24)));this.manageSyncsSize(a);p.setDilCookieField(c,a.join("*"))},sendMessages:function(){var a=this,b="",c=encodeURIComponent;this.regionChanged&&(b=c("---destpub-clear-dextp---"),this.regionChanged=!1);this.messages.length?m.POST_MESSAGE_ENABLED?
(b=b+c("---destpub-combined---")+this.messages.join("%01"),this.postMessage(b),this.messages=[],this.sendingMessages=!1):(b+=this.messages.shift(),this.postMessage(b),setTimeout(function(){a.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1},postMessage:function(a){DIL.xd.postMessage(a,this.url,this.iframe.contentWindow);this.messagesPosted.push(a)},receiveMessage:function(a){var b=/^---destpub-to-parent---/;"string"===typeof a&&b.test(a)&&(b=a.replace(b,"").split("|"),"canSetThirdPartyCookies"===
b[0]&&(this.canSetThirdPartyCookies="true"===b[1]?!0:!1,this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(a))}},J={traits:function(a){t.isValidPdata(a)&&(r.sids instanceof Array||(r.sids=[]),p.extendArray(r.sids,a));return this},pixels:function(a){t.isValidPdata(a)&&(r.pdata instanceof Array||(r.pdata=[]),p.extendArray(r.pdata,a));return this},logs:function(a){t.isValidLogdata(a)&&(r.logdata!==Object(r.logdata)&&(r.logdata={}),p.extendObject(r.logdata,
a));return this},customQueryParams:function(a){t.isEmptyObject(a)||p.extendObject(r,a,n.reservedKeys);return this},signals:function(a,b){var c,d=a;if(!t.isEmptyObject(d)){if(b&&"string"===typeof b)for(c in d={},a)a.hasOwnProperty(c)&&(d[b+c]=a[c]);p.extendObject(r,d,n.reservedKeys)}return this},declaredId:function(a){n.declaredId.setDeclaredId(a,"request");return this},result:function(a){"function"===typeof a&&(r.callback=a);return this},afterResult:function(a){"function"===typeof a&&(r.postCallbackFn=
a);return this},useImageRequest:function(){r.useImageRequest=!0;return this},clearData:function(){r={};return this},submit:function(){D.submitRequest(r);r={};return this},getPartner:function(){return s},getContainerNSID:function(){return q},getEventLog:function(){return k},getState:function(){var a={},b={};p.extendObject(a,n,{callbackPrefix:!0,useJSONP:!0,registerRequest:!0});p.extendObject(b,v,{attachIframe:!0,requestToProcess:!0,process:!0,sendMessages:!0});return{initConfig:e,pendingRequest:r,
otherRequestInfo:a,destinationPublishingInfo:b}},idSync:function(a){if(B)return"Error: id syncs have been disabled";if(a!==Object(a)||"string"!==typeof a.dpid||!a.dpid.length)return"Error: config or config.dpid is empty";if("string"!==typeof a.url||!a.url.length)return"Error: config.url is empty";var b=a.url,c=a.minutesToLive,d=encodeURIComponent,e=v,h,b=b.replace(/^https:/,"").replace(/^http:/,"");if("undefined"===typeof c)c=20160;else if(c=parseInt(c,10),isNaN(c)||0>=c)return"Error: config.minutesToLive needs to be a positive number";
h=p.encodeAndBuildRequest(["",a.dpid,a.dpuuid||""],",");a=["ibs",d(a.dpid),"img",d(b),c,"",h];e.addMessage(a.join("|"));n.firstRequestHasFired&&e.requestToProcess();return"Successfully queued"},aamIdSync:function(a){if(B)return"Error: id syncs have been disabled";if(a!==Object(a)||"string"!==typeof a.dpuuid||!a.dpuuid.length)return"Error: config or config.dpuuid is empty";a.url="//dpm.demdex.net/ibs:dpid="+a.dpid+"&dpuuid="+a.dpuuid;return this.idSync(a)},passData:function(a){if(t.isEmptyObject(a))return"Error: json is empty or not an object";
v.ibsDeleted.push(a.ibs);delete a.ibs;D.defaultCallback(a);return a},getPlatformParams:function(){return n.platformParams},getEventCallConfigParams:function(){var a=n,b=a.modStatsParams,c=a.platformParams,d;if(!b){b={};for(d in c)c.hasOwnProperty(d)&&!a.nonModStatsParams[d]&&(b[d.replace(/^d_/,"")]=c[d]);!0===z?b.coop_safe=1:!1===z&&(b.coop_unsafe=1);a.modStatsParams=b}return b},setAsCoopSafe:function(){z=!0;return this},setAsCoopUnsafe:function(){z=!1;return this}},D={corsMetadata:function(){var a=
"none",b=!0;"undefined"!==typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?a="XMLHttpRequest":(new Function("/*@cc_on return /^10/.test(@_jscript_version) @*/"))()?a="XMLHttpRequest":"undefined"!==typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(b=!1),0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")&&(b=!1));return{corsType:a,corsCookiesEnabled:b}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?
null:new window[this.corsMetadata.corsType]},submitRequest:function(a){n.registerRequest(D.createQueuedRequest(a));return!0},createQueuedRequest:function(a){var b=n,c,d=a.callback,e="img",h;if(!t.isEmptyObject(A)){var f,g,k;for(f in A)A.hasOwnProperty(f)&&(g=A[f],null!=g&&""!==g&&f in a&&!(g in a||g in n.reservedKeys)&&(k=a[f],null!=k&&""!==k&&(a[g]=k)))}t.isValidPdata(a.sids)||(a.sids=[]);t.isValidPdata(a.pdata)||(a.pdata=[]);t.isValidLogdata(a.logdata)||(a.logdata={});a.logdataArray=p.convertObjectToKeyValuePairs(a.logdata,
"=",!0);a.logdataArray.push("_ts="+(new Date).getTime());"function"!==typeof d&&(d=this.defaultCallback);b.useJSONP=!0!==a.useImageRequest;b.useJSONP&&(e="script",c=b.callbackPrefix+"_"+q+"_"+(new Date).getTime());b=this.makeRequestSrcData(a,c);W&&!H||!(h=this.getCORSInstance())||(e="cors");return{tag:e,src:b.src,corsSrc:b.corsSrc,internalCallbackName:c,callbackFn:d,postCallbackFn:a.postCallbackFn,useImageRequest:!!a.useImageRequest,requestData:a,corsInstance:h,corsPostData:b.corsPostData}},defaultCallback:function(a,
b){v.checkIfRegionChanged(a);v.processSyncOnPage(a);var c,d,e,h,f,g,k,m,w;if((c=a.stuff)&&c instanceof Array&&(d=c.length))for(e=0;e<d;e++)if((h=c[e])&&h===Object(h)){f=h.cn;g=h.cv;k=h.ttl;if("undefined"===typeof k||""===k)k=Math.floor(p.getMaxCookieExpiresInMinutes()/60/24);m=h.dmn||"."+document.domain.replace(/^www\./,"");w=h.type;f&&(g||"number"===typeof g)&&("var"!==w&&(k=parseInt(k,10))&&!isNaN(k)&&p.setCookie(f,g,1440*k,"/",m,!1),O.stuffed[f]=g)}c=a.uuid;t.isPopulatedString(c)&&!t.isEmptyObject(y)&&
(d=y.path,"string"===typeof d&&d.length||(d="/"),e=parseInt(y.days,10),isNaN(e)&&(e=100),p.setCookie(y.name||"aam_did",c,1440*e,d,y.domain||"."+document.domain.replace(/^www\./,""),!0===y.secure));F||n.abortRequests||v.requestToProcess(a,b)},makeRequestSrcData:function(a,b){a.sids=t.removeEmptyArrayValues(a.sids||[]);a.pdata=t.removeEmptyArrayValues(a.pdata||[]);var c=n,d=c.platformParams,e=p.encodeAndBuildRequest(a.sids,","),h=p.encodeAndBuildRequest(a.pdata,","),f=(a.logdataArray||[]).join("&");
delete a.logdataArray;var g=m.IS_HTTPS?"https://":"http://",k=c.declaredId.getDeclaredIdQueryString(),r=c.adms.instance?c.adms.getCustomerIDsQueryString(c.adms.getCustomerIDs()):"",w;w=[];var x,E,u,v;for(x in a)if(!(x in c.reservedKeys)&&a.hasOwnProperty(x))if(E=a[x],x=encodeURIComponent(x),E instanceof Array)for(u=0,v=E.length;u<v;u++)w.push(x+"="+encodeURIComponent(E[u]));else w.push(x+"="+encodeURIComponent(E));w=w.length?"&"+w.join("&"):"";e="d_nsid="+d.d_nsid+c.getCoopQueryString()+k+r+(e.length?
"&d_sid="+e:"")+(h.length?"&d_px="+h:"")+(f.length?"&d_ld="+encodeURIComponent(f):"");d="&d_rtbd="+d.d_rtbd+"&d_jsonv="+d.d_jsonv+"&d_dst="+d.d_dst;g=g+s+".demdex.net/event";h=c=g+"?"+e+(c.useJSONP?d+"&d_cb="+(b||""):"")+w;2048<c.length&&(c=c.substring(0,2048).substring(0,c.lastIndexOf("&")));return{corsSrc:g+"?"+(V?"testcors=1&d_nsid="+q+"&":"")+"_ts="+(new Date).getTime(),src:c,originalSrc:h,corsPostData:e+d+w,isDeclaredIdCall:""!==k}},fireRequest:function(a){if("img"===a.tag)this.fireImage(a);
else{var b=n.declaredId,b=b.declaredId.request||b.declaredId.init||{},b={dpid:b.dpid||"",dpuuid:b.dpuuid||""};"script"===a.tag?this.fireScript(a,b):"cors"===a.tag&&this.fireCORS(a,b)}},fireImage:function(a){var b=n,c,d;b.abortRequests||(b.firing=!0,c=new Image(0,0),b.sent.push(a),c.onload=function(){b.firing=!1;b.fired.push(a);b.num_of_img_responses++;b.registerRequest()},d=function(c){g="imgAbortOrErrorHandler received the event of type "+c.type;k.push(g);b.abortRequests=!0;b.firing=!1;b.errored.push(a);
b.num_of_img_errors++;b.registerRequest()},c.addEventListener?(c.addEventListener("error",d,!1),c.addEventListener("abort",d,!1)):c.attachEvent&&(c.attachEvent("onerror",d),c.attachEvent("onabort",d)),c.src=a.src)},fireScript:function(a,b){var c=this,d=n,e,h,f=a.src,m=a.postCallbackFn,p="function"===typeof m,q=a.internalCallbackName;d.abortRequests||(d.firing=!0,window[q]=function(c){try{c!==Object(c)&&(c={});B&&(v.ibsDeleted.push(c.ibs),delete c.ibs);var e=a.callbackFn;d.firing=!1;d.fired.push(a);
d.num_of_jsonp_responses++;e(c,b);p&&m(c,b)}catch(f){f.message="DIL jsonp callback caught error with message "+f.message;g=f.message;k.push(g);f.filename=f.filename||"dil.js";f.partner=s;DIL.errorModule.handleError(f);try{e({error:f.name+"|"+f.message},b),p&&m({error:f.name+"|"+f.message},b)}catch(l){}}finally{d.requestRemoval({script:h,callbackName:q}),d.registerRequest()}},T||H?(d.firing=!1,d.requestRemoval({script:"no script created",callbackName:q})):(h=document.createElement("script"),h.addEventListener&&
h.addEventListener("error",function(b){d.requestRemoval({script:h,callbackName:q});g="jsonp script tag error listener received the event of type "+b.type+" with src "+f;c.handleScriptError(g,a)},!1),h.type="text/javascript",h.src=f,e=DIL.variables.scriptNodeList[0],e.parentNode.insertBefore(h,e)),d.sent.push(a),d.declaredId.declaredId.request=null)},fireCORS:function(a,b){var c=this,d=n,e=this.corsMetadata.corsType,f=a.corsSrc,m=a.corsInstance,p=a.corsPostData,q=a.postCallbackFn,r="function"===typeof q;
if(!d.abortRequests&&!Y){d.firing=!0;try{m.open("post",f,!0),"XMLHttpRequest"===e&&(m.withCredentials=!0,m.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),m.onreadystatechange=function(){if(4===this.readyState&&200===this.status)a:{var e;try{if(e=JSON.parse(this.responseText),e!==Object(e)){c.handleCORSError(a,b,"Response is not JSON");break a}}catch(f){c.handleCORSError(a,b,"Error parsing response as JSON");break a}B&&(v.ibsDeleted.push(e.ibs),delete e.ibs);try{var h=a.callbackFn;
d.firing=!1;d.fired.push(a);d.num_of_cors_responses++;h(e,b);r&&q(e,b)}catch(l){l.message="DIL handleCORSResponse caught error with message "+l.message;g=l.message;k.push(g);l.filename=l.filename||"dil.js";l.partner=s;DIL.errorModule.handleError(l);try{h({error:l.name+"|"+l.message},b),r&&q({error:l.name+"|"+l.message},b)}catch(m){}}finally{d.registerRequest()}}}),m.onerror=function(){c.handleCORSError(a,b,"onerror")},m.ontimeout=function(){c.handleCORSError(a,b,"ontimeout")},m.send(p)}catch(u){this.handleCORSError(a,
b,"try-catch")}d.sent.push(a);d.declaredId.declaredId.request=null}},handleCORSError:function(a,b,c){n.num_of_cors_errors++;n.corsErrorSources.push(c);"ontimeout"===c||H||(a.tag="script",this.fireScript(a,b))},handleScriptError:function(a,b){n.num_of_jsonp_errors++;this.handleRequestError(a,b)},handleRequestError:function(a,b){var c=n;k.push(a);c.abortRequests=!0;c.firing=!1;c.errored.push(b);c.registerRequest()}},t={isValidPdata:function(a){return a instanceof Array&&this.removeEmptyArrayValues(a).length?
!0:!1},isValidLogdata:function(a){return!this.isEmptyObject(a)},isEmptyObject:function(a){if(a!==Object(a))return!0;for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},removeEmptyArrayValues:function(a){for(var b=0,c=a.length,d,e=[],b=0;b<c;b++)d=a[b],"undefined"!==typeof d&&null!==d&&""!==d&&e.push(d);return e},isPopulatedString:function(a){return"string"===typeof a&&a.length}},p={addListener:function(){if(document.addEventListener)return function(a,b,c){a.addEventListener(b,function(a){"function"===
typeof c&&c(a)},!1)};if(document.attachEvent)return function(a,b,c){a.attachEvent("on"+b,function(a){"function"===typeof c&&c(a)})}}(),convertObjectToKeyValuePairs:function(a,b,c){var d=[],e,f;b||(b="=");for(e in a)a.hasOwnProperty(e)&&(f=a[e],"undefined"!==typeof f&&null!==f&&""!==f&&d.push(e+b+(c?encodeURIComponent(f):f)));return d},encodeAndBuildRequest:function(a,b){return this.map(a,function(a){return encodeURIComponent(a)}).join(b)},map:function(a,b){if(Array.prototype.map)return a.map(b);if(void 0===
a||null===a)throw new TypeError;var c=Object(a),d=c.length>>>0;if("function"!==typeof b)throw new TypeError;for(var e=Array(d),f=0;f<d;f++)f in c&&(e[f]=b.call(b,c[f],f,c));return e},filter:function(a,b){if(!Array.prototype.filter){if(void 0===a||null===a)throw new TypeError;var c=Object(a),d=c.length>>>0;if("function"!==typeof b)throw new TypeError;for(var e=[],f=0;f<d;f++)if(f in c){var g=c[f];b.call(b,g,f,c)&&e.push(g)}return e}return a.filter(b)},getCookie:function(a){a+="=";var b=document.cookie.split(";"),
c,d,e;c=0;for(d=b.length;c<d;c++){for(e=b[c];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(a))return decodeURIComponent(e.substring(a.length,e.length))}return null},setCookie:function(a,b,c,d,e,f){var g=new Date;c&&(c*=6E4);document.cookie=a+"="+encodeURIComponent(b)+(c?";expires="+(new Date(g.getTime()+c)).toUTCString():"")+(d?";path="+d:"")+(e?";domain="+e:"")+(f?";secure":"")},extendArray:function(a,b){return a instanceof Array&&b instanceof Array?(Array.prototype.push.apply(a,
b),!0):!1},extendObject:function(a,b,c){var d;if(a===Object(a)&&b===Object(b)){for(d in b)!b.hasOwnProperty(d)||!t.isEmptyObject(c)&&d in c||(a[d]=b[d]);return!0}return!1},getMaxCookieExpiresInMinutes:function(){return m.SIX_MONTHS_IN_MINUTES},getCookieField:function(a,b){var c=this.getCookie(a),d=decodeURIComponent;if("string"===typeof c){var c=c.split("|"),e,f;e=0;for(f=c.length-1;e<f;e++)if(d(c[e])===b)return d(c[e+1])}return null},getDilCookieField:function(a){return this.getCookieField(m.DIL_COOKIE_NAME,
a)},setCookieField:function(a,b,c){var d=this.getCookie(a),e=!1,f=encodeURIComponent;b=f(b);c=f(c);if("string"===typeof d){var d=d.split("|"),g,f=0;for(g=d.length-1;f<g;f++)if(d[f]===b){d[f+1]=c;e=!0;break}e||(f=d.length,d[f]=b,d[f+1]=c)}else d=[b,c];this.setCookie(a,d.join("|"),this.getMaxCookieExpiresInMinutes(),"/",this.getDomain(),!1)},setDilCookieField:function(a,b){return this.setCookieField(m.DIL_COOKIE_NAME,a,b)},getDomain:function(a){!a&&window.location&&(a=window.location.hostname);if(a)if(/^[0-9.]+$/.test(a))a=
"";else{var b=a.split("."),c=b.length-1,d=c-1;1<c&&2>=b[c].length&&(2===b[c-1].length||0>",DOMAIN_2_CHAR_EXCEPTIONS,".indexOf(","+b[c]+","))&&d--;if(0<d)for(a="";c>=d;)a=b[c]+(a?".":"")+a,c--}return a},replaceMethodsWithFunction:function(a,b){var c;if(a===Object(a)&&"function"===typeof b)for(c in a)a.hasOwnProperty(c)&&"function"===typeof a[c]&&(a[c]=b)}};"error"===s&&0===q&&p.addListener(window,"load",function(){DIL.windowLoaded=!0});var Z=!1,K=function(){Z||(Z=!0,n.registerRequest(),aa(),F||n.abortRequests||
v.attachIframe(),n.readyToRemove=!0,n.requestRemoval())},aa=function(){F||setTimeout(function(){U||n.firstRequestHasFired||("function"===typeof M?J.afterResult(M).submit():J.submit())},DIL.constants.TIME_TO_DEFAULT_REQUEST)};C=document;"error"!==s&&(DIL.windowLoaded?K():"complete"!==C.readyState&&"loaded"!==C.readyState?p.addListener(window,"load",function(){DIL.windowLoaded=!0;K()}):(DIL.windowLoaded=!0,K()));if("error"!==s)try{DIL.xd.receiveMessage(function(a){v.receiveMessage(a.data)},v.getIframeHost(v.url))}catch(ba){}n.declaredId.setDeclaredId(Q,
"init");n.processVisitorAPI();m.BLACKLIST_IE_LESS_THAN_9&&p.replaceMethodsWithFunction(J,function(){return this});this.api=J;this.getStuffedVariable=function(a){var b=O.stuffed[a];b||"number"===typeof b||(b=p.getCookie(a))||"number"===typeof b||(b="");return b};this.validators=t;this.helpers=p;this.constants=m;this.log=k;$&&(this.pendingRequest=r,this.requestController=n,this.setDestinationPublishingUrl=u,this.destinationPublishing=v,this.requestProcs=D,this.variables=O,this.callWindowLoadFunctions=
K)},function(){var e=document,f;null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",f=function(){e.removeEventListener("DOMContentLoaded",f,!1);e.readyState="complete"},!1))}(),DIL.extendStaticPropertiesAndMethods=function(e){var f;if(e===Object(e))for(f in e)e.hasOwnProperty(f)&&(this[f]=e[f])},DIL.extendStaticPropertiesAndMethods({version:"6.12",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50},variables:{scriptNodeList:document.getElementsByTagName("script"),
scriptsRemoved:[],callbacksRemoved:[]},windowLoaded:!1,dils:{},isAddedPostWindowLoad:function(e){this.windowLoaded="function"===typeof e?!!e():"boolean"===typeof e?e:!0},create:function(e){try{return new DIL(e)}catch(f){throw Error("Error in attempt to create DIL instance with DIL.create(): "+f.message);}},registerDil:function(e,f,k){f=f+"$"+k;f in this.dils||(this.dils[f]=e)},getDil:function(e,f){var k;"string"!==typeof e&&(e="");f||(f=0);k=e+"$"+f;return k in this.dils?this.dils[k]:Error("The DIL instance with partner = "+
e+" and containerNSID = "+f+" was not found")},dexGetQSVars:function(e,f,k){f=this.getDil(f,k);return f instanceof this?f.getStuffedVariable(e):""},xd:{postMessage:function(e,f,k){var g=1;f&&(window.postMessage?k.postMessage(e,f.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):f&&(k.location=f.replace(/#.*$/,"")+"#"+ +new Date+g++ +"&"+e))},receiveMessage:function(e,f){var k;try{if(window.postMessage)if(e&&(k=function(g){if("string"===typeof f&&g.origin!==f||"[object Function]"===Object.prototype.toString.call(f)&&
!1===f(g.origin))return!1;e(g)}),window.addEventListener)window[e?"addEventListener":"removeEventListener"]("message",k,!1);else window[e?"attachEvent":"detachEvent"]("onmessage",k)}catch(g){}}}}),DIL.errorModule=function(){var e=DIL.create({partner:"error",containerNSID:0,disableDestinationPublishingIframe:!0}),f={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020},
k=!1;return{activate:function(){k=!0},handleError:function(g){if(!k)return"DIL error module has not been activated";g!==Object(g)&&(g={});var u=g.name?(g.name+"").toLowerCase():"",s=[];g={name:u,filename:g.filename?g.filename+"":"",partner:g.partner?g.partner+"":"no_partner",site:g.site?g.site+"":document.location.href,message:g.message?g.message+"":""};s.push(u in f?f[u]:f.noerrortypedefined);e.api.pixels(s).logs(g).useImageRequest().submit();return"DIL error report sent"},pixelMap:f}}(),DIL.tools=
{},DIL.modules={helpers:{handleModuleError:function(e,f,k){var g="";f=f||"Error caught in DIL module/submodule: ";e===Object(e)?g=f+(e.message||"err has no message"):(g=f+"err is not a valid object",e={});e.message=g;k instanceof DIL&&(e.partner=k.api.getPartner());DIL.errorModule.handleError(e);return this.errorMessage=g}}});

/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(f){function g(a,d){var b,c,n;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<b.length&&(c=b[n++]);)if(-1<a.indexOf(c))return null;p=1;return a}function q(a,d,b,c,e){var g,h;if(a.dataset&&(h=a.dataset[d]))g=h;else if(a.getAttribute)if(h=a.getAttribute("data-"+b))g=h;else if(h=a.getAttribute(b))g=h;if(!g&&f.useForcedLinkTracking&&e&&(g="",d=a.onclick?""+a.onclick:"")){b=d.indexOf(c);var l,k;if(0<=b){for(b+=10;b<d.length&&0<="= \t\r\n".indexOf(d.charAt(b));)b++;
if(b<d.length){h=b;for(l=k=0;h<d.length&&(";"!=d.charAt(h)||l);)l?d.charAt(h)!=l||k?k="\\"==d.charAt(h)?!k:0:l=0:(l=d.charAt(h),'"'!=l&&"'"!=l&&(l=0)),h++;if(d=d.substring(b,h))a.e=new Function("s","var e;try{s.w."+c+"="+d+"}catch(e){}"),a.e(f)}}}return g||e&&f.w[c]}function r(a,d,b){var c;return(c=e[d](a,b))&&(p?(p=0,c):g(k(c),e[d+"Exclusions"]))}function s(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&t[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||
b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)s(c[a],d,b)}function k(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$",
"mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=f;var m=window;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);e._il=m.s_c_il;e._in=m.s_c_in;e._il[e._in]=e;m.s_c_in++;e._c="s_m";e.c={};var p=0,t={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=f.contextData,e=f.linkObject;(a=f.pageName||f.pageURL)&&(d=r(e,"link",f.linkName))&&(b=r(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,
255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,127):b,c["a.activitymap.pageIDType"]=f.pageName?1:0)};e.link=function(a,d){var b;if(d)b=g(k(d),e.linkExclusions);else if((b=a)&&!(b=q(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=g(k(a.innerText||a.textContent),e.linkExclusions))||(s(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=g(k(c.join(""))))||(f=g(k(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():
"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=g(k(a.value)):"IMAGE"==c&&a.src&&(f=g(k(a.src)))));b=f}return b};e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=q(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */

/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 2.10.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(r){var a=this;a.version="2.10.0";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var p=k.AppMeasurement.Nb;p||(p=null);var n=k,m,s;try{for(m=n.parent,s=n.location;m&&m.location&&s&&""+m.location!=""+s&&n.location&&""+m.location!=""+n.location&&m.location.host==s.host;)n=m,m=n.parent}catch(u){}a.D=function(a){try{console.log(a)}catch(b){}};a.Ha=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.ub=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.za&&!/^[0-9.]+$/.test(c)&&
(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.za=0<d?c.substring(d):c}return a.za};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.ub(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?
(d=new Date,d.setTime(d.getTime()+1E3*g)):1===d&&(d=new Date,g=d.getYear(),d.setYear(g+2+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toUTCString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.rb=function(){var c=a.Util.getIeVersion();"number"===typeof c&&10>c&&(a.unsupportedBrowser=!0,a.gb(a,function(){}))};a.gb=function(a,b){for(var d in a)a.hasOwnProperty(d)&&"function"===typeof a[d]&&(a[d]=b)};
a.L=[];a.ba=function(c,b,d){if(a.Aa)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,h=["webkitvisibilitychange","visibilitychange"];g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ca)for(a.ca=1,d=0;d<h.length;d++)a.d.addEventListener(h[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ca=0,a.delayReady())});f=1;e=0}else d||a.o("_d")&&(f=1);f&&(a.L.push({m:c,a:b,t:e}),a.ca||setTimeout(a.delayReady,
a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.o("_d")?b=1:a.ra();0<a.L.length;){d=a.L.shift();if(b&&!d.t&&d.t>c){a.L.unshift(d);setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.Aa=1;a[d.m].apply(a,d.a);a.Aa=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ba("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=
c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,h="";e=f="";if(a.lightProfileID)d=a.P,(h=a.lightTrackVars)&&(h=","+h+","+a.ga.join(",")+",");else{d=a.g;if(a.pe||a.linkType)h=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(h=a[e].Lb,f=a[e].Kb));h&&(h=","+h+","+a.G.join(",")+",");f&&h&&(h+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!h||0<=h.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.q=function(c,
b,d,f,e){var g="",h,l,k,q,m=0;"contextData"==c&&(c="c");if(b){for(h in b)if(!(Object.prototype[h]||e&&h.substring(0,e.length)!=e)&&b[h]&&(!d||0<=d.indexOf(","+(f?f+".":"")+h+","))){k=!1;if(m)for(l=0;l<m.length;l++)h.substring(0,m[l].length)==m[l]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),l=b[h],e&&(h=h.substring(e.length)),0<h.length))if(k=h.indexOf("."),0<k)l=h.substring(0,k),k=(e?e:"")+l+".",m||(m=[]),m.push(k),g+=a.q(l,b,d,f,k);else if("boolean"==typeof l&&(l=l?"true":"false"),l){if("retrieveLightData"==
f&&0>e.indexOf(".contextData."))switch(k=h.substring(0,4),q=h.substring(4),h){case "transactionID":h="xact";break;case "channel":h="ch";break;case "campaign":h="v0";break;default:a.Ha(q)&&("prop"==k?h="c"+q:"eVar"==k?h="v"+q:"list"==k?h="l"+q:"hier"==k&&(h="h"+q,l=l.substring(0,255)))}g+="&"+a.escape(h)+"="+a.escape(l)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.xb=function(){var c="",b,d,f,e,g,h,l,k,q="",m="",n=e="";if(a.lightProfileID)b=a.P,(q=a.lightTrackVars)&&(q=","+q+","+a.ga.join(",")+
",");else{b=a.g;if(a.pe||a.linkType)q=a.linkTrackVars,m=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(q=a[e].Lb,m=a[e].Kb));q&&(q=","+q+","+a.G.join(",")+",");m&&(m=","+m+",",q&&(q+=",events,"));a.events2&&(n+=(""!=n?",":"")+a.events2)}if(a.visitor&&a.visitor.getCustomerIDs){e=p;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],"object"==typeof f&&(e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState)));e&&(c+=a.q("cid",
e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.q("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);h=e.substring(4);g||("events"==e&&n?(g=n,n=""):"marketingCloudOrgID"==e&&a.visitor&&(g=a.visitor.marketingCloudOrgID));if(g&&(!q||0<=q.indexOf(","+e+","))){switch(e){case "customerPerspective":e="cp";break;case "marketingCloudOrgID":e="mcorgid";break;case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e=
"D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&
a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;
case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":n&&(g+=(""!=g?",":"")+n);if(m)for(h=g.split(","),g="",f=0;f<h.length;f++)l=h[f],k=l.indexOf("="),0<=k&&(l=l.substring(0,k)),k=l.indexOf(":"),0<=k&&(l=l.substring(0,k)),0<=m.indexOf(","+l+",")&&(g+=
(g?",":"")+h[f]);break;case "events2":g="";break;case "contextData":c+=a.q("c",a[e],q,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.q("mts",a[e],q,e));g="";break;default:a.Ha(h)&&("prop"==f?e="c"+h:"eVar"==f?e="v"+h:"list"==
f?e="l"+h:"hier"==f&&(e="h"+h,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}a.fa&&(c+="&lrt="+a.fa,a.fa=null);return c};a.C=function(a){var b=a.tagName;if("undefined"!=""+a.Qb||"undefined"!=""+a.Gb&&"HTML"!=(""+a.Gb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.Da=function(a){var b=k.location,
d=a.href?a.href:"",f,e,g;f=d.indexOf(":");e=d.indexOf("?");g=d.indexOf("/");d&&(0>f||0<=e&&f>e||0<=g&&f>g)&&(e=a.protocol&&1<a.protocol.length?a.protocol:b.protocol?b.protocol:"",f=b.pathname.lastIndexOf("/"),d=(e?e+"//":"")+(a.host?a.host:b.host?b.host:"")+("/"!=d.substring(0,1)?b.pathname.substring(0,0>f?0:f)+"/":"")+d);return d};a.M=function(c){var b=a.C(c),d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+
f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.Da(c),e)?{id:e.substring(0,100),type:g}:0};a.Ob=function(c){for(var b=a.C(c),d=a.M(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.C(c),d=a.M(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Fb=function(){var c,b,d=a.linkObject,
f=a.linkType,e=a.linkURL,g,h;a.ha=1;d||(a.ha=0,d=a.clickObject);if(d){c=a.C(d);for(b=a.M(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.C(d),b=a.M(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var l=d.onclick?""+d.onclick:"";if(0<=l.indexOf(".tl(")||0<=l.indexOf(".trackLink("))d=0}}else a.ha=1;!e&&d&&(e=a.Da(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var m=0,q=0,n;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(l=e.toLowerCase(),
g=l.indexOf("?"),h=l.indexOf("#"),0<=g?0<=h&&h<g&&(g=h):g=h,0<=g&&(l=l.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),h=0;h<g.length;h++)(n=g[h])&&l.substring(l.length-(n.length+1))=="."+n&&(f="d");if(a.trackExternalLinks&&!f&&(l=e.toLowerCase(),a.Ga(l)&&(a.linkInternalFilters||(a.linkInternalFilters=k.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),m=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(h=
0;h<g.length;h++)n=g[h],0<=l.indexOf(n)&&(q=1);q?m&&(f="e"):m||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.yb=function(){var c=a.ha,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||
f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.Bb()){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,h,l,k,e=0;if(g)for(h=0;h<g.length;h++)l=g[h].split("="),f=a.unescape(l[0]).split(","),l=a.unescape(l[1]),b[l]=f;f=a.account.split(",");h={};for(k in a.contextData)k&&!Object.prototype[k]&&"a.activitymap."==k.substring(0,14)&&(h[k]=a.contextData[k],a.contextData[k]="");
a.e=a.q("c",h)+(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(l in b)if(!Object.prototype[l])for(k=0;k<f.length;k++)for(e&&(g=b[l].join(","),g==a.account&&(a.e+=("&"!=l.charAt(0)?"&":"")+l,b[l]=[],d=1)),h=0;h<b[l].length;h++)g=b[l][h],g==f[k]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=l.charAt(0)?"&":"")+l+"&u=0"),b[l].splice(h,1),d=1);c||(d=1);if(d){e="";h=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),h=1);for(l in b)!Object.prototype[l]&&0<h&&0<b[l].length&&(e+=(e?"&":"")+a.escape(b[l].join(","))+"="+
a.escape(l),h--);a.cookieWrite("s_sq",e)}}}return c};a.zb=function(){if(!a.Jb){var c=new Date,b=n.location,d,f,e=f=d="",g="",h="",l="1.2",k=a.cookieWrite("s_cc","true",0)?"Y":"N",m="",p="";if(c.setUTCDate&&(l="1.3",(0).toPrecision&&(l="1.5",c=[],c.forEach))){l="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(l="1.7",c.reduce&&(l="1.8",l.trim&&(l="1.8.1",Date.parse&&(l="1.8.2",Object.create&&(l="1.8.5")))))}catch(r){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?
screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;h=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),m=a.b.Pb(b)?"Y":"N"}catch(s){}try{a.b.addBehavior("#default#clientCaps"),p=a.b.connectionType}catch(t){}a.resolution=d;a.colorDepth=f;a.javascriptVersion=l;a.javaEnabled=e;a.cookiesEnabled=k;a.browserWidth=g;a.browserHeight=h;a.connectionType=p;a.homepage=m;a.Jb=1}};a.Q={};a.loadModule=function(c,
b){var d=a.Q[c];if(!d){d=k["AppMeasurement_Module_"+c]?new k["AppMeasurement_Module_"+c](a):{};a.Q[c]=a[c]=d;d.ab=function(){return d.fb};d.hb=function(b){if(d.fb=b)a[c+"_onLoad"]=b,a.ba(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.ab,set:d.hb}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=b,a.ba(c+"_onLoad",[a,d],1)||b(a,d))};a.o=function(c){var b,d;for(b in a.Q)if(!Object.prototype[b]&&(d=a.Q[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&
d[c]()))return 1;return 0};a.Bb=function(){return a.ActivityMap&&a.ActivityMap._c?!0:!1};a.Cb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){b*=100;f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>b)return 0}return 1};a.R=function(c,b){var d,f,e,g,h,l;for(d=0;2>d;d++)for(f=0<d?a.va:a.g,e=0;e<f.length;e++)if(g=f[e],(h=c[g])||c["!"+g]){if(!b&&
("contextData"==g||"retrieveLightData"==g)&&a[g])for(l in a[g])h[l]||(h[l]=a[g][l]);a[g]=h}};a.Ra=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.va:a.g,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.tb=function(a){var b,d,f,e,g,h=0,l,k="",m="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(l=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),
b=b.substring(0,d),0<=e.indexOf("google")?h=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(h=",p,ei,"),h&&l)))){if((a=l.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=h.indexOf(","+e.substring(0,d)+",")?k+=(k?"&":"")+e:m+=(m?"&":"")+e;k&&m?l=k+"&"+m:m=""}d=253-(l.length-m.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+l}return a};a.Va=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);
if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.X=!1;a.J=!1;a.jb=function(){a.J=!0;a.H()};a.Y=!1;a.S=!1;a.kb=function(c){a.marketingCloudVisitorID=c.MCMID;a.visitorOptedOut=c.MCOPTOUT;a.analyticsVisitorID=c.MCAID;a.audienceManagerLocationHint=c.MCAAMLH;a.audienceManagerBlob=c.MCAAMB;a.S=!0;a.H()};a.Ua=function(c){a.maxDelay||(a.maxDelay=250);return a.o("_d")?(c&&
setTimeout(function(){c()},a.maxDelay),!1):!0};a.W=!1;a.I=!1;a.ra=function(){a.I=!0;a.H()};a.isReadyToTrack=function(){var c=!0,b=a.visitor;a.X||a.J||(a.Va(a.jb)?a.J=!0:a.X=!0);if(a.X&&!a.J)return!1;b&&b.isAllowed()&&(a.Y||a.marketingCloudVisitorID||!b.getVisitorValues||(a.Y=!0,a.marketingCloudVisitorID?a.S=!0:b.getVisitorValues(a.kb)),c=!a.Y||a.S||a.marketingCloudVisitorID?!0:!1);a.W||a.I||(a.Ua(a.ra)?a.I=!0:a.W=!0);a.W&&!a.I&&(c=!1);return c};a.l=p;a.r=0;a.callbackWhenReadyToTrack=function(c,b,
d){var f;f={};f.ob=c;f.nb=b;f.lb=d;a.l==p&&(a.l=[]);a.l.push(f);0==a.r&&(a.r=setInterval(a.H,100))};a.H=function(){var c;if(a.isReadyToTrack()&&(a.ib(),a.l!=p))for(;0<a.l.length;)c=a.l.shift(),c.nb.apply(c.ob,c.lb)};a.ib=function(){a.r&&(clearInterval(a.r),a.r=0)};a.cb=function(c){var b,d,f=p,e=p;if(!a.isReadyToTrack()){b=[];if(c!=p)for(d in f={},c)f[d]=c[d];e={};a.Ra(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,a.track,b);return!0}return!1};a.vb=function(){var c=a.cookieRead("s_fid"),b=
"",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+
" "+f.getDay()+" "+f.getTimezoneOffset());a.visitor&&a.visitor.getAuthState&&(a.authState=a.visitor.getAuthState());a.o("_s");a.cb(c)||(b&&a.R(b),c&&(d={},a.Ra(d,0),a.R(c)),a.Cb()&&!a.visitorOptedOut&&(a.pa()||(a.fid=a.vb()),a.Fb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Sa||(f=a.Util.getQueryParam("adobe_mc_ref",null,null,!0),a.referrer=
f||void 0===f?void 0===f?"":f:n.document.referrer),a.Sa=1,a.referrer=a.tb(a.referrer),a.o("_g")),a.yb()&&!a.abort&&(a.visitor&&!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)),a.zb(),g+=a.xb(),a.eb(e,g),a.o("_t"),a.referrer=""))),c&&a.R(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=k.s_objectID=a.pe=a.pev1=a.pev2=
a.pev3=a.e=a.lightProfileID=0};a.ua=[];a.registerPreTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.ua.push([c,b]):a.debugTracking&&a.D("DEBUG: Non function type passed to registerPreTrackCallback")};a.Ya=function(c){a.oa(a.ua,c)};a.ta=[];a.registerPostTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.ta.push([c,b]):a.debugTracking&&a.D("DEBUG: Non function type passed to registerPostTrackCallback")};
a.Xa=function(c){a.oa(a.ta,c)};a.oa=function(c,b){if("object"==typeof c)for(var d=0;d<c.length;d++){var f=c[d][0],e=c[d][1].slice();e.unshift(b);if("function"==typeof f)try{f.apply(null,e)}catch(g){a.debugTracking&&a.D(g.message)}}};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.k=c,a.v=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<
a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.eb=function(c,b){var d=a.Za()+"/"+c+"?AQB=1&ndh=1&pf=1&"+(a.qa()?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.Ya(d);a.Wa(d);a.T()};a.Za=function(){var c=a.$a();return"http"+
(a.ssl?"s":"")+"://"+c+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(a.qa()?"10":"1")+"/JS-"+a.version+(a.Ib?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")};a.qa=function(){return a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks};a.$a=function(){var c=a.dc,b=a.trackingServer;b?a.trackingServerSecure&&a.ssl&&(b=a.trackingServerSecure):(c=c?(""+c).toLowerCase():"d1","d1"==c?c="112":"d2"==c&&(c="122"),b=a.bb()+"."+c+".2o7.net");return b};a.bb=function(){var c=a.visitorNamespace;
c||(c=a.account.split(",")[0],c=c.replace(/[^0-9a-z]/gi,""));return c};a.Qa=/{(%?)(.*?)(%?)}/;a.Mb=RegExp(a.Qa.source,"g");a.sb=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];if("string"==typeof d.c&&"aa."==d.id.substr(0,3))for(var f=d.c.match(a.Mb),e=0;e<f.length;++e){var g=f[e],h=g.match(a.Qa),k="";"%"==h[1]&&"timezone_offset"==h[2]?k=(new Date).getTimezoneOffset():"%"==h[1]&&"timestampz"==h[2]&&(k=a.wb());d.c=d.c.replace(g,a.escape(k))}}};a.wb=function(){var c=
new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.j(4,c.getFullYear())+"-"+a.j(2,c.getMonth()+1)+"-"+a.j(2,c.getDate())+"T"+a.j(2,c.getHours())+":"+a.j(2,c.getMinutes())+":"+a.j(2,c.getSeconds())+(0<c.getTimezoneOffset()?"-":"+")+a.j(2,b.getUTCHours())+":"+a.j(2,b.getUTCMinutes())};a.j=function(a,b){return(Array(a+1).join(0)+b).slice(-a)};a.la={};a.doPostbacks=function(c){if("object"==typeof c)if(a.sb(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&
a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];"object"==typeof d&&"string"==typeof d.c&&"string"==typeof d.id&&"aa."==d.id.substr(0,3)&&(a.la[d.id]=new Image,a.la[d.id].alt="",a.la[d.id].src=d.c)}};a.Wa=function(c){a.i||a.Ab();a.i.push(c);a.ea=a.B();a.Oa()};a.Ab=function(){a.i=a.Db();a.i||(a.i=[])};a.Db=function(){var c,b;if(a.ka()){try{(b=
k.localStorage.getItem(a.ia()))&&(c=k.JSON.parse(b))}catch(d){}return c}};a.ka=function(){var c=!0;a.trackOffline&&a.offlineFilename&&k.localStorage&&k.JSON||(c=!1);return c};a.Ea=function(){var c=0;a.i&&(c=a.i.length);a.p&&c++;return c};a.T=function(){if(a.p&&(a.A&&a.A.complete&&a.A.F&&a.A.na(),a.p))return;a.Fa=p;if(a.ja)a.ea>a.O&&a.Ma(a.i),a.ma(500);else{var c=a.mb();if(0<c)a.ma(c);else if(c=a.Ba())a.p=1,a.Eb(c),a.Hb(c)}};a.ma=function(c){a.Fa||(c||(c=0),a.Fa=setTimeout(a.T,c))};a.mb=function(){var c;
if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.B()-a.Ka;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.Ba=function(){if(0<a.i.length)return a.i.shift()};a.Eb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.D(b)}};a.pa=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.V=!1;var t;try{t=JSON.parse('{"x":"y"}')}catch(w){t=null}t&&"y"==t.x?(a.V=!0,a.U=function(a){return JSON.parse(a)}):
k.$&&k.$.parseJSON?(a.U=function(a){return k.$.parseJSON(a)},a.V=!0):a.U=function(){return null};a.Hb=function(c){var b,d,f;a.pa()&&2047<c.length&&(a.Ta()&&(d=1,b=new XMLHttpRequest),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.V?b.wa=!0:b=0));!b&&a.Pa&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?
f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=2):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof k.InstallTrigger||(b.abort=function(){b.src=p}));b.La=Date.now();b.ya=function(){try{b.F&&(clearTimeout(b.F),b.F=0)}catch(a){}};b.onload=b.na=function(){b.La&&(a.fa=Date.now()-b.La);a.Xa(c);b.ya();a.qb();a.Z();a.p=0;a.T();if(b.wa){b.wa=!1;try{a.doPostbacks(a.U(b.responseText))}catch(d){}}};b.onabort=b.onerror=b.Ca=function(){b.ya();(a.trackOffline||a.ja)&&a.p&&
a.i.unshift(a.pb);a.p=0;a.ea>a.O&&a.Ma(a.i);a.Z();a.ma(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.na():b.Ca())};a.Ka=a.B();if(1==d)f=c.indexOf("?"),d=c.substring(0,f),f=c.substring(f+1),f=f.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,""),b.open("POST",d,!0),b.withCredentials=!0,b.send(f);else if(b.src=c,2==d){if(a.Ia)try{f.removeChild(a.Ia)}catch(e){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Ia=a.A}b.F=setTimeout(function(){b.F&&(b.complete?b.na():(a.trackOffline&&
b.abort&&b.abort(),b.Ca()))},5E3);a.pb=c;a.A=k["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.K||a.v)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.aa=setTimeout(a.Z,a.forcedLinkTrackingTimeout)};a.Ta=function(){return"undefined"!==typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest?!0:!1};a.qb=function(){if(a.ka()&&!(a.Ja>a.O))try{k.localStorage.removeItem(a.ia()),a.Ja=a.B()}catch(c){}};a.Ma=function(c){if(a.ka()){a.Oa();try{k.localStorage.setItem(a.ia(),
k.JSON.stringify(c)),a.O=a.B()}catch(b){}}};a.Oa=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>a.offlineLimit;)a.Ba()}};a.forceOffline=function(){a.ja=!0};a.forceOnline=function(){a.ja=!1};a.ia=function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.B=function(){return(new Date).getTime()};a.Ga=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:
!1};a.setTagContainer=function(c){var b,d,f;a.Ib=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.R(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=
0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d,f){var e,g="";b||(b=a.pageURL?a.pageURL:k.location);d=d?d:"&";if(!c||!b)return g;b=""+b;e=b.indexOf("?");if(0>e)return g;b=d+b.substring(e+1)+d;if(!f||!(0<=b.indexOf(d+c+d)||0<=b.indexOf(d+c+"="+d))){e=b.indexOf("#");0<=e&&(b=b.substr(0,e)+d);e=b.indexOf(d+c+"=");if(0>e)return g;b=b.substring(e+d.length+c.length+1);e=b.indexOf(d);
0<=e&&(b=b.substring(0,e));0<b.length&&(g=a.unescape(b));return g}},getIeVersion:function(){if(document.documentMode)return document.documentMode;for(var a=7;4<a;a--){var b=document.createElement("div");b.innerHTML="\x3c!--[if IE "+a+"]><span></span><![endif]--\x3e";if(b.getElementsByTagName("span").length)return a}return null}};a.G="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.G.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ga="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.P=a.ga.slice(0);a.va="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
for(m=0;250>=m;m++)76>m&&(a.g.push("prop"+m),a.P.push("prop"+m)),a.g.push("eVar"+m),a.P.push("eVar"+m),6>m&&a.g.push("hier"+m),4>m&&a.g.push("list"+m);m="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID".split(" ");a.g=a.g.concat(m);a.G=a.G.concat(m);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=
0;a.offlineFilename="AppMeasurement.offline";a.Ka=0;a.ea=0;a.O=0;a.Ja=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{if(a.Pa=!1,navigator){var v=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=v.indexOf("MSIE ")||0<=v.indexOf("Trident/")&&0<=v.indexOf("Windows NT 6"))a.Pa=!0}}catch(x){}a.Z=function(){a.aa&&(k.clearTimeout(a.aa),a.aa=p);a.k&&a.K&&a.k.dispatchEvent(a.K);a.v&&("function"==typeof a.v?a.v():
a.k&&a.k.href&&(a.d.location=a.k.href));a.k=a.K=a.v=0};a.Na=function(){a.b=a.d.body;a.b?(a.u=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.xa)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.u,!1);else{a.b.removeEventListener("click",a.u,!0);a.xa=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.N&&a.N==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||
a.clickObject.parentNode))a.clickObject=0;else{var h=a.N=a.clickObject;a.da&&(clearTimeout(a.da),a.da=0);a.da=setTimeout(function(){a.N==h&&(a.N=0)},1E4);f=a.Ea();a.track();if(f<a.Ea()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Ga(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents")}catch(l){b=
new k.MouseEvent}if(b){try{b.initMouseEvent("click",c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(m){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.k=c.target,a.K=b)}}}}}catch(n){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.u):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&
a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&k.MouseEvent)&&(a.xa=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.u,!0)),a.b.addEventListener("click",a.u,!1))):setTimeout(a.Na,30)};a.rb();a.Rb||(r?a.setAccount(r):a.D("Error, missing Report Suite ID in AppMeasurement initialization"),a.Na(),a.loadModule("ActivityMap"))}
function s_gi(r){var a,k=window.s_c_il,p,n,m=r.split(","),s,u,t=0;if(k)for(p=0;!t&&p<k.length;){a=k[p];if("s_c"==a._c&&(a.account||a.oun))if(a.account&&a.account==r)t=1;else for(n=a.account?a.account:a.oun,n=a.allAccounts?a.allAccounts:n.split(","),s=0;s<m.length;s++)for(u=0;u<n.length;u++)m[s]==n[u]&&(t=1);p++}t?a.setAccount&&a.setAccount(r):a=new AppMeasurement(r);return a}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var r=window,a=r.s_giq,k,p,n;if(a)for(k=0;k<a.length;k++)p=a[k],n=s_gi(p.oun),n.setAccount(p.un),n.setTagContainer(p.tagContainerName);r.s_giq=0}s_pgicq();