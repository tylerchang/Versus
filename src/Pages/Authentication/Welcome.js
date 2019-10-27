import React from 'react';
import './Welcome.scss';
import {Link} from "react-router-dom";
import { auth } from '../../utils/firebase';
import Login from './Login';
import SignUp from './SignUp';
import whiteLogo from "../../Images/logoWhite.png";

function Welcome(){

  let [errMsg, setErrMsg] = React.useState("");

  function guestLogin(){
    auth
    .signInWithEmailAndPassword("guest@guest.com", "123456")
    .then(() => {
    })
    .catch(function(error) {
      setErrMsg(error.message);
    });  
  }

  return(
    <div className="container">
      <div className="welcomeBox">
        
        <div className="side1">
          <img src={whiteLogo} alt="error"></img>
          <div> Got a question? </div>
          <div> Need opinions? </div>
          <div> Ask Now </div>
        </div>
        
        <div className="side2">
          <Login/>
          <div>
            <Link to={"/SignUp"}><button>Sign Up</button> </Link>
            <button onClick={guestLogin}>Guest</button>
          </div>
          
        </div>
       
      </div>
    </div>
      
   
  );
}



export default Welcome;