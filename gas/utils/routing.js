

//function extractReqObj(e) {
//  let enoObj = {action:"", dataset: "", isValid: false};
//
//  Logger.log("e:" + JSON.stringify(e,null,2));
//  if(e && e.contextPath) {
//    switch(e.contextPath){
//      case "tasks":
//        enoObj.action = "dump";
//        enoObj.dataset = "tasks";
//        enoObj.isValid = true;
//      default:
//        enoObj.action = "dump";
//        enoObj.dataset = "";
//        enoObj.isValid = false;
//    }
//  }
//  Logger.log("enoObj:" + JSON.stringify(enoObj,null,2));
//  return enoObj;
//}

function extractReqObj(e) {
  let enoObj = {page:"client/index", isValid: true};

  Logger.log("e:" + JSON.stringify(e,null,2));
  if(e && e.pathInfo) {
    enoObj.isValid = false;
    switch(e.pathInfo){
      case "about":
        enoObj.page = "client/about";
        enoObj.isValid = true;
        break;
      default:
        enoObj.page = "client/index";
        enoObj.isValid = true;
    }
  }
  return enoObj;
}

function processGetReq(enoObj) {
  let resObj = {};
  if(enoObj){
    switch(enoObj.action) {
      case "dump":
        switch(enoObj.dataset){
          case "tasks":
              resObj = getTasks();
          default:
              resObj = {};
        }
      default:
        resObj = {};
    }
  }
  Logger.log("resObj:" + JSON.stringify(resObj,null,2));
  return resObj;
}
