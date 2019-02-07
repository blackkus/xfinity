
 // create and dispatch the event for Flicker Management
  var event = new CustomEvent("custom-page-load-fired", {
    detail: {
      source: "dtm",
      usedby: "adobe-target"
    }
  });
  document.dispatchEvent(event);

/* DTM Refactoring for all the code bases*/

if ((window.location.href.toLowerCase().indexOf("//customer") > -1 || window.location.href.toLowerCase().indexOf("//payments") > -1 || window.location.href.toLowerCase().indexOf("es.xfinity.com/sdcustomer") > -1) && _satellite.getVar("DataLayer : pageName final").toLowerCase().indexOf("myaccount") > -1) {
    // MyAccount Page
    _satellite.track("MyAccount_Custom_Page_Load");
 
} else if (_satellite.getVar("DataLayer : primaryCategory final").toLowerCase() === "shop" && _satellite.getVar("DataLayer : subCategory1 final").toLowerCase() === "learn") {
    // Deals and Learn Pages
    _satellite.track("Deals_Custom_Page_Load");
} else if (_satellite.getVar("DataLayer : siteType cat final").toLowerCase() === "sales" && _satellite.getVar("DataLayer : primaryCategory final").toLowerCase() === "shop" && _satellite.getVar("DataLayer : screenName final").toLowerCase() === "home") {
    // Resi Home Page Pages
    _satellite.track("Deals_Custom_Page_Load");
}else if (window.location.hostname.toLowerCase().indexOf("idm") === 0) {
    // IDM Page
    _satellite.track("CIMA_IDM_Custom_Page_Load");
} else if (_satellite.getVar("DataLayer : primaryCategory final").toLowerCase().indexOf("shop") > -1 && (_satellite.getVar("DataLayer : subCategory1 final").toLowerCase().indexOf("buyflow") > -1 || _satellite.getVar("DataLayer : subCategory1 final").toLowerCase().indexOf("checkout") > -1) && (document.location.href.indexOf('/buy')>-1 || document.location.href.indexOf('approval.')>-1 )) {
    // Buyflow pages or TVE Go Page
    _satellite.track("Buyflow_Custom_Page_Load");
} else if (_satellite.getVar("DataLayer : primaryCategory final").toLowerCase().indexOf("local") > -1 || _satellite.getVar("DataLayer : primaryCategory final").toLowerCase().indexOf("community") > -1 || document.location.href.indexOf('/communities')>-1) {
    // Local pages or communities pages
    _satellite.track("Local_Custom_Page_Load");
} else if (_satellite.getVar("DataLayer : primaryCategory final").toLowerCase().indexOf("shop") > -1 && (_satellite.getVar("DataLayer : subCategory1 final").toLowerCase().indexOf("myplan") > -1 || _satellite.getVar("DataLayer : subCategory1 final").toLowerCase().indexOf("my plan") > -1)) {
    // Myplan pages
    _satellite.track("Myplan_Custom_Page_Load");
}else if (_satellite.getVar("DataLayer : primaryCategory final").toLowerCase().indexOf("shop") > -1 && _satellite.getVar("DataLayer : subCategory1 final").toLowerCase().indexOf("move") > -1) {
    // Movers pages
    _satellite.track("Movers_Custom_Page_Load");
}else if (_satellite.getVar("DataLayer : primaryCategory final").toLowerCase().indexOf("hub") > -1 && _satellite.getVar("DataLayer : siteType cat final").toLowerCase()== "sales" && document.location.href.indexOf('/hub')>-1) {
    // Hub pages
    _satellite.track("Hub_Custom_Page_Load");
}else if (_satellite.getVar("DataLayer : primaryCategory final").toLowerCase().indexOf("consent") > -1 && _satellite.getVar("DataLayer : siteType cat final").toLowerCase()== "sales") {
    // Consent Decree pages
    _satellite.track("CD_Custom_Page_Load");
}else if (_satellite.getVar("DataLayer : primaryCategory final").toLowerCase().indexOf("support") > -1 && _satellite.getVar("DataLayer : siteType cat final").toLowerCase()== "selfservice") {
    // H&S pages
    _satellite.track("Support_Custom_Page_Load");
}else if (_satellite.getVar("DataLayer : primaryCategory final").toLowerCase().indexOf("coupon") > -1 && _satellite.getVar("DataLayer : siteType cat final").toLowerCase()== "selfservice") {
    // My Xfinity Coupon pages
    _satellite.track("Coupon_Custom_Page_Load");
}else if (_satellite.getVar("DataLayer : primaryCategory final").toLowerCase().indexOf("shop") > -1 && _satellite.getVar("DataLayer : subCategory1 final").toLowerCase() === "multifamily") {
    // Multifamily pages
    _satellite.track("Multifamily_Custom_Page_Load");
}else if (_satellite.getVar("DataLayer : primaryCategory final").toLowerCase().indexOf("chat") > -1 && _satellite.getVar('DataLayer : codebaseName final').toLowerCase() === "egain chat") {
    // eGain Chat pages
    _satellite.track("Chat_Custom_Page_Load");
}
else if (_satellite.getVar("DataLayer : primaryCategory final").toLowerCase().indexOf("content") > -1) {
    // Root Content pages
    _satellite.track("content_Custom_Page_Load");
}else if (_satellite.getVar("DataLayer : subCategory1 final").toLowerCase() === "landing page") {
    // Landing Pages
    _satellite.track("Deals_Custom_Page_Load");
}
else if (_satellite.getVar("DataLayer : primaryCategory final").toLowerCase() === "shop" && (_satellite.getVar("DataLayer : subCategory1 final").toLowerCase() === "search" || _satellite.getVar("DataLayer : subCategory1 final").toLowerCase() === "tips"))
{
    // search,Tips page 
    _satellite.track("Deals_Custom_Page_Load");
}
