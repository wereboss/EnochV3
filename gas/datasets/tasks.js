
function getTasks() {
  // Logger.log("getTasks called");
  let taskarr =  getSheetDataRows("Tasks");
  // Logger.log("getTasks:" + JSON.stringify(taskarr));
  return JSON.stringify(taskarr);
}
