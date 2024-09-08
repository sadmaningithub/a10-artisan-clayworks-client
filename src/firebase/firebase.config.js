// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf5277hfi7D4x6Q2HE5Scyw3ug2As9f5s",
  authDomain: "artisan-clayworks.firebaseapp.com",
  projectId: "artisan-clayworks",
  storageBucket: "artisan-clayworks.appspot.com",
  messagingSenderId: "307344117418",
  appId: "1:307344117418:web:f6b2efc1f1f7363dfecad3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;