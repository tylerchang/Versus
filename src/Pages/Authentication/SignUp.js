import React from "react";
import { Link, withRouter } from "react-router-dom";
import { auth } from "../../utils/firebase";
import whiteLogo from "../../Images/logoWhite.png";
import "./SignUp.scss";

function SignUpComponent({ history }) {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [passwordConfirm, setPasswordConfirm] = React.useState("");
  let [passwordMatch, setPasswordMatch] = React.useState(null);
  let [errMsg, setErrMsg] = React.useState("");

  function signUp() {

    if(password === passwordConfirm){
      setPasswordMatch(true);
      auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {

      })
      .catch(function(error) {
        setErrMsg(error.message);
      });
    }
    else{
      alert("Passwords do not match!");
    }
  }

  return (
    <div>
      <div className="signUpBox">
        <div style={{ color: "salmon" }}>{errMsg}</div>

        <div> Sign Up </div>
        
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={ev => setEmail(ev.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={ev => setPassword(ev.target.value)}
          />

          {passwordMatch ? 
            (<input
              type="password"
              value={passwordConfirm}
              style = {{borderColor: "green"}}
              placeholder = "Confirm Password"
              onChange={function (ev){
                setPasswordConfirm(ev.target.value);
               if(ev.target.value === passwordConfirm){
                 setPasswordMatch(true);
               }
              } }
            />) : 
            (<input
              type="password"
              placeholder = "Confirm Password"
              value={passwordConfirm}
              onChange={ev => setPasswordConfirm(ev.target.value)}
            />
          )}               

        <Link to="/">{" "}<button className="signUpButton" onClick={signUp}>Sign Up</button> </Link>
        <Link to="/">{" "} <button className="backButton"> Back </button> </Link>
      </div>
    </div>
  );
}

function SignUp(){

  let [errMsg, setErrMsg] = React.useState("");

  return(
    <div>
      <div className="welcomeBox">
        
        <div className="side1">
          <img src={whiteLogo} alt="error"></img>
          <div> Got a question? </div>
          <div> Need opinions? </div>
          <div> Ask Now </div>
        </div>
        
        <div className="side2">
          <SignUpComponent/>
        </div>
       
      </div>
    </div>
      
   
  );
}



export default withRouter(SignUp);