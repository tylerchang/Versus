import React from 'react';
import './CommentTile.scss'

function CommentTile(props){
  return(
    <div className="commentTile"> 
      <div className="commentMessage" style={{whiteSpace: "pre", overflow: 'hidden', wordWrap: 'break-word'
  }}> {props.message}  </div>
      <div className="commentPoster"> {props.postedBy} </div>
      <button onClick={() => props.updateLikes(props.index)}> Like: {props.likes}</button>
    </div>
  );
}

export default CommentTile;