
function getCredits() {
  // Logger.log("getTasks called");
  let creditsArr =  getSheetDataRows("Credits");
  //Logger.log("getCredits:" + JSON.stringify(creditsArr));
  return JSON.stringify(creditsArr);
}
