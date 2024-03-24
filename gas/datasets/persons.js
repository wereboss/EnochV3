
function getPersons() {
  // Logger.log("getTasks called");
  let personsArr =  getSheetDataRows("Persons");
  //Logger.log("getCredits:" + JSON.stringify(creditsArr));
  return JSON.stringify(personsArr);
}

function getPersonByEmail(emailstr) {
 const personsArr = JSON.parse(getPersons());
 let userObj = personsArr.find(({email}) => email.toUpperCase() === emailstr.toUpperCase() );
  if(userObj) {
    Logger.log("getPersonByEmail: Found User:" + JSON.stringify(userObj));
    return userObj;
  } else {
    return {};
  }
}

function getCurrentPerson() {
  let userEmail = getValidUser();
  Logger.log("getCurrentPerson: userEmail" + userEmail);
  if(userEmail && userEmail.length > 0) {
    return getPersonByEmail(userEmail);
  } else {
    return null;
  }
}
