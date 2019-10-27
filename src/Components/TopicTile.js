import React from 'react';
import "./TopicTile.scss";
import {Link } from "react-router-dom";
import logoRed from '../Images/logoRed.png'

function TopicTile(props){


  return(
    <div className="tileBox"> 
      <div className="asker"> Asked by {props.postedBy}</div>
      
      <div className="half1">
        <div className="imageBox">
          <div>
            <img className="img1" src={props.side1ImageURL} alt="image1" />
            <div> {props.side1} </div>
          </div>
          <img className="logoImage" src={logoRed} alt="logo" />
          <div>
            <img className="img2" src={props.side2ImageURL} alt="image2" />
            <div> {props.side2} </div>        
          </div>
        </div>
        
      </div>
      
      <div className = "half2">
         
        <Link to={"/DiscussionPage/" + props.id} > <button className="joinButton"> Join </button> </Link>

      </div>
    </div>

  );
}

export default TopicTile;