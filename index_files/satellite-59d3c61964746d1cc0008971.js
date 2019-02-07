//Unhide all hidden elements as we have finished page loading and cancel Target changes
var node = document.getElementById("campaign-flicker-hide-style");
if (node && node.parentNode) {
  _satellite.notify("Adobe Target - Campaign Level Page Unhiding Init");
  if(AdobeTeamUtils.targetOfferApplied === false) {
    console && console.log("!*!* WARNING !*!* Custom Page Load Fired - All Hidden elements will be revealed and Target will abandon all content changes!");
    AdobeTeamUtils.applyOfferFlag = false;
  }
  node.parentNode.removeChild(node);
}
