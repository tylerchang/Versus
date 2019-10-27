import React from 'react';
import TopicTile from '../Components/TopicTile';
import {db} from '../utils/firebase';
import { auth } from "../utils/firebase";
import CreateDisplayName from './Authentication/CreateDisplayName';
import "./Dashboard.scss";

function Dashboard(){

  let[topics, setTopics] = React.useState([]);
  let [loading, setLoading] = React.useState(true);

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

  if(auth.currentUser.displayName === null){
    return(
      <div>
        <CreateDisplayName />
      </div>
    )
  }
 
  return(

    <div className="dashboard">
      {loading ? <div>Loading....</div> : undefined}

      <div className="topics">
        {topics.map(topic=>(
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
  
  );
}

export default Dashboard;