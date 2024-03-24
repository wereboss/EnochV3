const SCRIPT_PROP = PropertiesService.getScriptProperties();
const USER_PROP = PropertiesService.getUserProperties();
const DOC_PROP = PropertiesService.getDocumentProperties();

const SHEET_URL = SCRIPT_PROP.getProperty('SHEET_URL');
const FILE_ID = SCRIPT_PROP.getProperty('FILE_ID');


function hello() {
  Logger.log("Hello, " + mondo);
}

function fetchparams(){
  return {data:42,meaning:"the answer"};
}

function doGet(e) {
  //var params = JSON.stringify(e);
  //const taskObj = getSheetDataRows("Tasks");
  //Logger.log("taskObj:" + JSON.stringify(taskObj,null,2));
  //return ContentService.createTextOutput(JSON.stringify(taskObj)).setMimeType(ContentService.MimeType.JSON);

  const enoObj = extractReqObj(e);
  //Logger.log("enoObj received:" + JSON.stringify(enoObj,null,2));
//  let enoResp = {};
  if(enoObj && enoObj.isValid) {
    //Logger.log("about to open:" + enoObj.page); 
    return HtmlService.createTemplateFromFile(enoObj.page).evaluate()
      .setTitle("Enoch")
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
//    enoResp = processGetReq(enoObj);
  } else {
    Logger.log("returning JSON"); 
    return ContentService.createTextOutput(JSON.stringify(enoObj)).setMimeType(ContentService.MimeType.JSON);
  }
 // const htmls = HtmlService.createTemplateFromFile('client/index');
 // return htmls.evaluate();


//Simple HTML response
//  return HtmlService.createTemplateFromFile('client/index').evaluate()
//    .setTitle("Enoch")
//    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
//    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
 //return includeEval('client/index');
}

function doPost(e) {
  var params = JSON.stringify(e);
 // const taskObj = getSheetDataRows("Tasks");
 // Logger.log("taskObj:" + JSON.stringify(taskObj,null,2));
 // return ContentService.createTextOutput(JSON.stringify(taskObj)).setMimeType(ContentService.MimeType.JSON);
  return ContentService.createTextOutput(params).setMimeType(ContentService.MimeType.JSON);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
  // return HtmlService.createTemplateFromFile(filename).evaluate().getContent()
}

function includeEval(filename) {
  // return HtmlService.createHtmlOutputFromFile(filename)
  //     .getContent();
  // Logger.log("includeData:eval:"+JSON.stringify(data,null,2));
  const htmls = HtmlService.createTemplateFromFile(filename);
  return htmls.evaluate().getContent()
}

