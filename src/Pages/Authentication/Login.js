import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import "./Login.scss";

function Login({ history }) {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [errMsg, setErrMsg] = React.useState("");

  function login() {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.goBack();
      })
      .catch(function(error) {
        setErrMsg(error.message);
      });
  }
  function guestLogin() {
    auth
      .signInWithEmailAndPassword("guest@guest.com", "123456")
      .then(() => {})
      .catch(function(error) {
        setErrMsg(error.message);
      });
  }

  return (
    <div className="loginBox">
      <div style={{ color: "salmon" }}>{errMsg}</div>
      <div> Login</div>
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
      <button onClick={login}>LOGIN</button>

      <div className="signUpAndGuestButtons">
        <Link to={"/SignUp"}>
          <button>Sign Up</button>{" "}
        </Link>
        <button onClick={guestLogin}>Guest</button>
      </div>

      
    </div>
  );
}

export default Login;
