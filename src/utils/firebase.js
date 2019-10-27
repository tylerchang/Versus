import  *  as  firebase  from  "firebase/app";
import  "firebase/auth";
import  "firebase/firestore";

const config = {
    apiKey: "AIzaSyAWwgKW7s7GAZr6PW9omdwdBLDdzd6u17A",
    authDomain: "debate-app-256cf.firebaseapp.com",
    databaseURL: "https://debate-app-256cf.firebaseio.com",
    projectId: "debate-app-256cf",
    storageBucket: "",
    messagingSenderId: "34197074195",
    appId: "1:34197074195:web:5f1395a4929bc43e"
  };
firebase.initializeApp(config);
const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth, firebase };