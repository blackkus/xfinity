_satellite.track("AA_AT_CustomIntegrations");

//Custom mBox for Learn pages for Abandond Cart Campaign .

if(location.href.indexOf("www.xfinity.com/learn/xfinity-doubleplay-ned") > -1 ||
   location.href.indexOf("www.xfinity.com/learn/xfinity-doubleplay-central") > -1 ||
   location.href.indexOf("www.xfinity.com/learn/xfinity-internetplus-dp-central3") > -1) {
	var productID = AdobeTeamUtils.getEventInfo("offerInCart-Track", "cart.item.0.productInfo.productID") || '';
  AdobeTeamUtils.fireTargetCustomMbox("CustomMboxWithOfferInCart", {"offerInCart" : productID});
}

