import React from "react";
import "./Welcome.scss";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import Login from "./Login";
import SignUp from "./SignUp";
import whiteLogo from "../../Images/logoWhite.png";

function Welcome() {
  return (
    <div className="container">
      <div className="welcomeBar">
        <div className="mainLogo">
        <Link to="/"> <button> <img src={whiteLogo} alt="Home"/> </button> </Link> 
        </div>
      </div>
      <div className="welcomeBox">
        <div className="side1">
          <img src={whiteLogo} alt="error" />
          <div> Got a question? </div>
          <div> Need opinions? </div>
          <div> Ask Now </div>
        </div>

        <Login />
      </div>
    </div>
  );
}

export default Welcome;
