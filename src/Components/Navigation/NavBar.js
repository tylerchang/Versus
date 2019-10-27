import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import profileIcon from "../../Images/profileIcon.png"
import logout from "../../Images/logout.png"
import plus from "../../Images/plus.png"
import home from "../../Images/home.png"

function NavBar() {

  function logOut(){
    auth.signOut();
    console.log("sign out success");
  }

  return(
    <div className="navBox">
        <Link to="/"> <button> <img src={home} alt="Start Debate" /> </button> </Link> 
        <Link to="/StartDebate"> <button><img src={plus} alt="Start Debate" /></button> </Link> 
        <Link to="/Profile"> <button className="profileButton"><img src={profileIcon} alt="Profile" /></button> </Link> 
        <Link to="/"> <button onClick={logOut}> <img src={logout} alt="Sign Out" /> </button> </Link> 
    </div>
  );
}

export default NavBar;
