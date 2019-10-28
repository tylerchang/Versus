import React from "react";
import { withRouter } from "react-router";
import "./DiscussionPage.scss";
import { db, auth } from "../utils/firebase";
import CommentTile from "../Components/CommentTile";
import logoHalf from "../Images/logoHalf.png";


function DiscussionPage({ match }) {
  let [topic, setTopic] = React.useState(undefined);
  let [input1, setInput1] = React.useState("");
  let [input2, setInput2] = React.useState("");
  let [comments1, setComments1] = React.useState([]);
  let [comments2, setComments2] = React.useState([]);
 

  React.useEffect(() => {
    async function loadTopics() {
      console.log(match.params.id);
      let doc = await db
        .collection("topics")
        .doc(match.params.id)
        .get();

      setTopic(doc);
    }
    loadTopics();
  }, []);

  React.useEffect(() => {
    (async function() {
      let ss = await db
        .collection("topics")
        .doc(match.params.id)
        .collection("side1Comments")
        .get();
      setComments1(ss.docs);
    })();
  }, []);

  React.useEffect(() => {
    (async function() {
      let ss = await db
        .collection("topics")
        .doc(match.params.id)
        .collection("side2Comments")
        .get();
      setComments2(ss.docs);
    })();
  }, []);

  if (!topic) {
    return <div>loading....</div>;
  }

  async function addSide1Comment() {
    if (input1.length > 0) {
      let collRef = db
        .collection("topics")
        .doc(match.params.id)
        .collection("side1Comments");
      let docRef = await collRef.add({
        message: input1,
        postedBy: auth.currentUser.displayName,
        likes: 0,
        updated: false
      });

      let doc = await collRef.doc(docRef.id).get();
      setComments1(v => [...v, doc]);
      setInput1("");
    }
  }

  async function addSide2Comment() {
    if (input2.length > 0) {
      let collRef = db
        .collection("topics")
        .doc(match.params.id)
        .collection("side2Comments");
      let docRef = await collRef.add({
        message: input2,
        postedBy: auth.currentUser.displayName,
        likes: 0,
        updated: false
      });
      let doc = await collRef.doc(docRef.id).get();
      setComments2(v => [...v, doc]);
      setInput2("");
    }
  }

  return (
    <div className="discussionHalf" style={{
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          fontSize: '2em',
          fontWeight: 'bold',
          top: '110px',
          width: '1100px',
          padding: '12px',
          color: "#333640",
          background: 'white',
        }}>
          {topic.data().question}
        </div>

        <div className="halfside1" style={{background:'#f62e54'}}>
          <h1 style={{color:'white'}}>{topic.data().side1}</h1>
          <img src={topic.data().side1ImageURL} alt="image1" />

          <div className="side1Comments">
            {comments1.map((comment, i) => (
              <CommentTile
                key={comment.id}
                id={comment.id}
                message={comment.data().message}
                postedBy={comment.data().postedBy}
              />
            ))}
          </div>

          <textarea
            value={input1}
            onChange={ev => setInput1(ev.target.value)}
            placeholder="Enter your arguement"
          />
          <button onClick={addSide1Comment}> POST </button>
        </div>
        
        <img style={{
          position: 'absolute',
          top: "300px"
        }} src={logoHalf} alt="logo"/>

        <div className="halfside2" style={{background:'#eeeeee'}}>
          <h1>{topic.data().side2}</h1>
          <img src={topic.data().side2ImageURL} alt="image2" />
          <div className="side2Comments">
            {comments2.map((comment, i) => (
              <CommentTile
                key={comment.id}
                id={comment.id}
                message={comment.data().message}
                postedBy={comment.data().postedBy}
              />
            ))}
          </div>
          <textarea
            value={input2}
            onChange={ev => setInput2(ev.target.value)}
            placeholder="Enter your arguement"
          />
          <button onClick={addSide2Comment}> POST </button>
        </div>
      </div>
  );
}

export default withRouter(DiscussionPage);
