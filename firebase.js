// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9ol5PKUTSvdwCdoQ8RMalGgF3ISQ9TAM",
  authDomain: "fir-auth-b0077.firebaseapp.com",
  projectId: "fir-auth-b0077",
  storageBucket: "fir-auth-b0077.appspot.com",
  messagingSenderId: "241074911523",
  appId: "1:241074911523:web:3f8b027fb7f8f6ef783496"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };