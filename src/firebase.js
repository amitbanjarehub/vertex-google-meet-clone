import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1LmQD9L_CRwTp4WzWhHs041-dxavzjg0",
  authDomain: "vertex-meet.firebaseapp.com",
  projectId: "vertex-meet",
  storageBucket: "vertex-meet.appspot.com",
  messagingSenderId: "429369736656",
  appId: "1:429369736656:web:330b3e1236f1ebe6568dd5",
  measurementId: "G-L28THB90EF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerGithub = new firebase.auth.GithubAuthProvider();

export { db, auth, providerGoogle, providerGithub };

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB1LmQD9L_CRwTp4WzWhHs041-dxavzjg0",
//   authDomain: "vertex-meet.firebaseapp.com",
//   projectId: "vertex-meet",
//   storageBucket: "vertex-meet.appspot.com",
//   messagingSenderId: "429369736656",
//   appId: "1:429369736656:web:330b3e1236f1ebe6568dd5",
//   measurementId: "G-L28THB90EF"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
