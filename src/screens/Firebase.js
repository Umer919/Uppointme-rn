

import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";


var firebaseConfig = {
    apiKey: "AIzaSyDRKpmhoWOEulUqqwg1xsawHsgMiYp9QCg",
    authDomain: "react-native-rn.firebaseapp.com",
    projectId: "react-native-rn",
    storageBucket: "react-native-rn.appspot.com",
    messagingSenderId: "846688386359",
    appId: "1:846688386359:web:50271b9f5a3f31ddb86eb2",
    measurementId: "G-EXMJYYFJPJ"
  };

  let app;
  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)

  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };
  
 
