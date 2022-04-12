// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOLbwFP-x5LF64ALCr062mr_GigAV70aI",
  authDomain: "ema-john-simple-5cefb.firebaseapp.com",
  projectId: "ema-john-simple-5cefb",
  storageBucket: "ema-john-simple-5cefb.appspot.com",
  messagingSenderId: "267057777675",
  appId: "1:267057777675:web:4814b3070bbf0930908b0e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
