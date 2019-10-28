import React from 'react';
import './EditProfile.scss';
import { auth } from "../utils/firebase";
import {Link} from "react-router-dom";



function EditProfile(){

  let user = auth.currentUser;

  let[inputName, setInputName] = React.useState("");

  function updateInfo(){

    if(inputName){
      user.updateProfile({
        displayName: inputName
      }).then(function() {
      }).catch(function(error) {
        console.log("display name change error")
      });
    }
  }

  return(
    <div className="editProfileBox">
      <input type="text" value={inputName} onChange={ev => setInputName(ev.target.value)} placeholder= "New Display Name " />
      <Link to="/Profile"> <button onClick={updateInfo}> Save Changes </button> </Link> 
    </div>
  
  );
}

export default EditProfile;