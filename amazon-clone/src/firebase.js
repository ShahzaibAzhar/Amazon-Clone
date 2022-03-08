import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxLpEmBIkEC_GLR1B0g5ovyeOV0rfrSVA",
  authDomain: "clone-d3682.firebaseapp.com",
  projectId: "clone-d3682",
  storageBucket: "clone-d3682.appspot.com",
  messagingSenderId: "819074405447",
  appId: "1:819074405447:web:4b25cff84bf929dea24d62",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
