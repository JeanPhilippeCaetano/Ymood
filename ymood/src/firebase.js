// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL6Zqx5f5D1HNXBlo7cAEQbw_GTpBgSNM",
  authDomain: "ymood-ce910.firebaseapp.com",
  databaseURL: "https://ymood-ce910-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ymood-ce910",
  storageBucket: "ymood-ce910.appspot.com",
  messagingSenderId: "116824563922",
  appId: "1:116824563922:web:95e868566a807fee018d0b"
};

//init firebase app
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const db = getDatabase(app);
const auth = getAuth(app);

export {db, auth}