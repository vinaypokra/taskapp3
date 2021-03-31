import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAimeRQjTNTAPuE33u_fvLJjaSV1NfCHnA",
  authDomain: "login-app-d8279.firebaseapp.com",
  databaseURL: "https://login-app-d8279-default-rtdb.firebaseio.com",
  projectId: "login-app-d8279",
  storageBucket: "login-app-d8279.appspot.com",
  messagingSenderId: "806698256227",
  appId: "1:806698256227:web:a46932eb9d6ff609093556",
  measurementId: "G-JBCRKQ8Y6J",
});

export const db = firebase.firestore();
export default app;
