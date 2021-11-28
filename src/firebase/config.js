import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtZSHak0--EkM2hEoFd0io1sAtoN36Kfc",
  authDomain: "mybudget-tracker.firebaseapp.com",
  projectId: "mybudget-tracker",
  storageBucket: "mybudget-tracker.appspot.com",
  messagingSenderId: "358610538171",
  appId: "1:358610538171:web:656cca44521189e180639e",
};

// init firebase
firebase.initializeApp(firebaseConfig);

//init service
const firestore = firebase.firestore();
const fireauth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { firestore, fireauth, timestamp };
