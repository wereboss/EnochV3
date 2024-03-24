 
/**
 * Checks if user is an editor of a file.
 * First checks email, then check if member of group.
 * @param {string} email - email address of active user.
 * @param {string} fileID - the connected file ID with the shared editors. 
 * @returns {boolean} true if user is and editor of file. Otherwise, false. 
 */
function validate(email, fileID){
  let isValid = false; //Indicates if email is an editor.
 
  /**
   * Get's  list of file editors by email.
   * @returns {array} list of emails of all editors in file
   */ 
  const emailList = (()=>{
    var file;
    try{
      file = DriveApp.getFileById(fileID);
      Logger.log("validate:file:" + JSON.stringify(file)); 
    }catch(e){
      Logger.log("validate:file from Drive error:" + JSON.stringify(e)); 
      return false; // If user has no access.
    }
    
    let editors = file.getEditors().map(editor => {
      return editor.getEmail();
    })
    Logger.log("validate:editors before:" + editors.toString());
    editors.push(file.getOwner().getEmail());
    Logger.log("validate:editors after:" + editors.toString());
    return editors;
  })();
   Logger.log("validate:emailList:" + emailList.toString());
  if(!emailList){
    isValid = false;
    return isValid;
  }
 
  /**
   * Get's list any group email with edit permission that 
   * the user is a memeber of. 
   * @returns {boolean} true if match.
   */  
  const groupEmailList = (()=>{
    
    let isMemberOfGroup = false;
 
    GroupsApp.getGroups().map(group => {
      return group.getEmail();
    }).forEach(group => {
      if (emailList.includes(group)) {
        isMemberOfGroup = true;
      }
    })
    return isMemberOfGroup; 
  })()
  Logger.log("validate:groupEmailList:" + groupEmailList);
  //Check if email in editor list.
  if(emailList.includes(email)){
    isValid = true;
  }else if(groupEmailList){
    isValid = true;
  }
  Logger.log("validate: returning isValid:" + isValid); 
  return isValid;
 
}


function getValidUser() {
  const userEmail = Session.getActiveUser().getEmail();
  Logger.log("getPersonFromUser: userEmail:"+ userEmail);
  const isValid = validate(userEmail,FILE_ID);
  Logger.log("getPersonFromUser: isValid:"+ isValid);
  if(isValid) {
    return userEmail;
  } else {
    return {};
  }
}
