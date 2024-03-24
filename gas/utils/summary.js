

function getSummary() {
  let personObj = getCurrentPerson();
  if(personObj) {
   let summaryObj = {
     username: personObj.name,
     userimg: personObj.img, 
     usertask: {"tasks": 8, "total": 88},
     usercredits: {"credits": 8, "total": 88},
     userreps: {"reps": 8, "total": 88}
   }
    Logger.log("getSummary: summaryObj:" + JSON.stringify(summaryObj));
    return summaryObj;
  } else {
    return null;
  }
}
