// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6lsLlFxSOJvKkFGFeQJPr6ymm3yo9nUU",
  authDomain: "autismapp-c45fb.firebaseapp.com",
  projectId: "autismapp-c45fb",
  storageBucket: "autismapp-c45fb.appspot.com",
  messagingSenderId: "1014127203991",
  appId: "1:1014127203991:web:f4c9daaf8e923e72d13bd2",
  measurementId: "G-R0G05QQJED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);