import React from 'react';
import './CommentTile.scss'

function CommentTile(props){
  return(
    <div className="commentTile"> 
      <div className="commentMessage" style={{whiteSpace: "pre", overflow: 'hidden', wordWrap: 'break-word'
  }}> {props.message}  </div>
      <div className="commentPoster"> {props.postedBy} </div>
    </div>
  );
}

export default CommentTile;