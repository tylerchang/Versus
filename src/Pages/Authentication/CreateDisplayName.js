import React from 'react';
import { auth } from '../../utils/firebase';
import {Link} from "react-router-dom";
import "./CreateDisplayName.css";

function CreateDisplayName(){

  let [name, setName] = React.useState("");

  function createName(){
      auth.currentUser.updateProfile({
      displayName: name
      }).then(function() {
      }).catch(function(error) {
        console.log("display name change error")
      });
    }
  
  return(
    <div className="createUserBox">
      <input type="text" value={name} onChange={ev => setName(ev.target.value)} placeholder="First and Last Name" />
      <Link to="/"> <button onClick={createName}> Let's go! </button> </Link>
    </div>
  );
}

export default CreateDisplayName;