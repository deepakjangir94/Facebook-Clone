// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBH-LallJ7DS5cKB0Ci0F32BTRkEd4qYh0",
  authDomain: "facebook-clone-33d86.firebaseapp.com",
  projectId: "facebook-clone-33d86",
  storageBucket: "facebook-clone-33d86.appspot.com",
  messagingSenderId: "759414817853",
  appId: "1:759414817853:web:fc91bfeed7305675e31654",
  measurementId: "G-GEZK7NRB88"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;