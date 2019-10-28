import React from 'react';
import './StartDebate.scss';
import { db, auth } from '../utils/firebase';
import CreateDisplayName from './Authentication/CreateDisplayName';
import logoHalf from "../Images/logoHalf.png";

function StartDebate(){

  let [question, setQuestion] = React.useState("");
  let [answer1, setAnswer1] = React.useState("");
  let [image1, setImage1] = React.useState("");
  let [image2, setImage2] = React.useState("");
  let [answer2, setAnswer2] = React.useState("");


  function addPost(){
    
    db.collection("topics").add({
      postedBy: auth.currentUser.displayName,
      userEmail: auth.currentUser.email,
      question: question,
      side1: answer1,
      side1ImageURL: image1,
      side2: answer2,
      side2ImageURL: image2,
      timeCreated: new Date(),
    })

    setQuestion("");
    setAnswer1("");
    setImage1("");
    setAnswer2("");
    setImage2("");
  }
  if(auth.currentUser.displayName === null){
    return(
      <div>
        <CreateDisplayName/>
      </div>
    )
  }
  
  return(
    <div className="startDebateContainer">
      <div className="redSide"></div>
      <div className="whiteSide"></div>
      <div className="submissionBox">
        
        <input type="text" value={question} onChange={ev => setQuestion(ev.target.value)} placeholder="Enter your question e.g. Pen vs. Pencil" />
        <div className="box1">
          <div className="box2">
            <input type="text" value={answer1} onChange={ev => setAnswer1(ev.target.value)} placeholder="1st Answer Choice e.g. Pen"/>
            <input type="text" value={image1} onChange={ev => setImage1(ev.target.value)} placeholder="1st Answer Image URL"/>
          </div>

         <img src={logoHalf} alt="Image"/>
          
          <div className="box3">
            <input type="text" value={answer2} onChange={ev => setAnswer2(ev.target.value)} placeholder="2nd Answer Choice e.g. Pencil"/>
            <input type="text" value={image2} onChange={ev => setImage2(ev.target.value)} placeholder="2nd Answer Image URL"/>
          </div>
         
        </div>
        
        <button onClick={addPost}> Post </button>
      </div>
      
    
    </div>
   
  
  );
}

export default StartDebate;