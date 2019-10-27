import React from 'react';
import './Profile.scss';
import { auth, db } from "../utils/firebase";
import {Link} from "react-router-dom";
import TopicTile from '../Components/TopicTile';
import CreateDisplayName from './Authentication/CreateDisplayName';


function Profile(){

  let[topics, setTopics] = React.useState([]);
  let [loading, setLoading] = React.useState(true);

  //const userdata = JSON.parse(window.localStorage.getItem("userdata"));
 

  async function loadTopics() {
    let snapshot = await db
      .collection("topics")
      .orderBy("timeCreated", "desc")
      .get();
    setLoading(false);
    setTopics(snapshot.docs);
  }

  React.useEffect(() => {
    loadTopics();
  }, []);

 
  let myTopics = topics.filter((val, _) => {
    return val.data().userEmail === auth.currentUser.email;
  });

  if(auth.currentUser.displayName === null){
    return(
      <div>
        <CreateDisplayName/>
      </div>
    )
  }

  return(

      <div className="profileBox">

        <div className="profileHalf1"> 
          <div>{auth.currentUser.displayName} <Link to="/EditProfile"> <button> Edit </button> </Link> </div>
          <div>Email: {auth.currentUser.email} </div>
        </div>

        <div className="profileHalf2"> 
          <div>Your Topics: {loading ? <div>Loading....</div> : undefined} </div>       
          <div>
            {myTopics.map(topic=>(
              <TopicTile 
              key={topic.id} 
              id={topic.id}
              postedBy={topic.data().postedBy}  
              question={topic.data().question} 
              side1={topic.data().side1}
              side1ImageURL={topic.data().side1ImageURL}
              side2={topic.data().side2}
              side2ImageURL={topic.data().side2ImageURL}
              timeCreated={topic.data().timeCreated}
              />
            ))}
          </div>
        </div>

    

    </div>
  
  );
}

export default Profile;