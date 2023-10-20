// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeq97cxCPHXQvKHlGsss77d8kUlfgZCxQ",
  authDomain: "generate-site-f964e.firebaseapp.com",
  projectId: "generate-site-f964e",
  storageBucket: "generate-site-f964e.appspot.com",
  messagingSenderId: "728844845181",
  appId: "1:728844845181:web:368954fba43c860f283114"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };