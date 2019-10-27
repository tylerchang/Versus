//#region  imports
import React from "react";
import "./styles.scss";
import Dashboard from "./Pages/Dashboard";
import {Route, Switch} from "react-router-dom";
import StartDebate from "./Pages/StartDebate";
import Profile from "./Pages/Profile";
import Login from "./Pages/Authentication/Login";
import Welcome from "./Pages/Authentication/Welcome";
import SignUp from "./Pages/Authentication/SignUp";
import { auth} from "./utils/firebase";
import EditProfile from "./Pages/EditProfile";
import NavBar from "./Components/Navigation/NavBar";
import DiscussionPage from "./Pages/DiscussionPage";
//#endregion

function App() {

  let [isLoggedIn, setIsLoggedIn] = React.useState(false);
  

  React.useEffect(() => {
    let cancel = auth.onAuthStateChanged( user => {
      // if (user) {
      //   let doc = await db.collection("users").doc(user.uid).get();
      //   window.localStorage.setItem("userdata", JSON.stringify(doc.data()));
      // }
      setIsLoggedIn(!!user);
    });
    return () => cancel();
  }, []);

  if (!isLoggedIn){
    return <Switch>
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Login" component={Login} />
      <Route exact path="/" component={Welcome} />
      
    </Switch>
  } 

  return ( 
    <div className="App"> 
      <NavBar/>
      <Switch>
        <Route path="/DiscussionPage/:id" component={DiscussionPage} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/StartDebate" component={StartDebate} />
        <Route path="/Profile" component={Profile} />
        <Route path="/EditProfile" component={EditProfile} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
