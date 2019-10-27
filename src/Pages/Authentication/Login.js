import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../utils/firebase';
import "./Login.scss";


function Login({history}){

  let[email, setEmail] = React.useState("");
  let[password, setPassword] = React.useState("");
  let [errMsg, setErrMsg] = React.useState("");

  function login(){
    auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      history.goBack();
    })
    .catch(function(error) {
      setErrMsg(error.message);
    });
    
  }

  return(
   
      <div className = "loginBox">
        <div style={{ color: "salmon" }}>{errMsg}</div>
        <div> Login. </div>
        <input type="text" value={email} placeholder="Email" onChange={ev => setEmail(ev.target.value)} />
        <input type="password" value={password} placeholder="Password" onChange={ev => setPassword(ev.target.value)}/>
        <button onClick={login}>Login</button>  
      </div>
  )
}

export default Login;