import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCuGTzHssHLoqIrGJtlYhcUWc8L-r6YJVA",
  authDomain: "snapbase-987f7.firebaseapp.com",
  projectId: "snapbase-987f7",
  storageBucket: "snapbase-987f7.appspot.com",
  messagingSenderId: "247535167930",
  appId: "1:247535167930:web:220a1339b53f7854965583"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
