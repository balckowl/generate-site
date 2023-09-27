import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDtqAujMQ_nCB93tIg0cLXvupXXO4uedTo",
  authDomain: "generate-site.firebaseapp.com",
  projectId: "generate-site",
  storageBucket: "generate-site.appspot.com",
  messagingSenderId: "978011496576",
  appId: "1:978011496576:web:676a8c8e1b90099f974665"
};

const app = initializeApp(firebaseConfig);

export default app;