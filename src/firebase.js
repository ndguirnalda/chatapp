// src/firebase.js

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// import firebase from "firebase/app";
// import "firebase/firestore";

const firebaseConfig = {
  // Replace with your Firebase configuration
  apiKey: "AIzaSyB7J2z7zfvbCmpCO__T14XvqYp5OvGv6dI",
  authDomain: "chat-app-388ba.firebaseapp.com",
  projectId: "chat-app-388ba",
  storageBucket: "chat-app-388ba.appspot.com",
  messagingSenderId: "516702359714",
  appId: "1:516702359714:web:2f12e89bd3dc99893187fb",
  measurementId: "G-97GL9QSC0Y",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
