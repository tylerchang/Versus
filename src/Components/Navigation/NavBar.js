import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import logoWhite from "../../Images/logoWhite.png";
import logout from '../../Images/logout.png';
import profile from "../../Images/profile.png";


function NavBar() {

  function logOut(){
    auth.signOut();
    console.log("sign out success");
  }

  return(
    <div className="navBox">
      <div className="mainLogo">
      <Link to="/"> <button> <img src={logoWhite} alt="Home"/> </button> </Link> 
      </div>

      <div className="emptySpace">

      </div>

      <div className="restOfButtons">
        <Link to="/StartDebate"> <button className="startDebateButton">Post +</button> </Link> 
        <Link to="/Profile"> <button className="profileButton"><img src={profile} alt="Profile" /></button> </Link> 
        <Link to="/"> <button onClick={logOut} className="logoutButton"> <img src={logout} alt="Sign Out" /> </button> </Link> 
      </div>
        
    </div>
  );
}

export default NavBar;
