// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8uZSXmO7yy_bawH-GsvbPMo3oOXWEwZE",
  authDomain: "keramika-8bd77.firebaseapp.com",
  databaseURL: "https://keramika-8bd77-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "keramika-8bd77",
  storageBucket: "keramika-8bd77.firebasestorage.app",
  messagingSenderId: "314768701339",
  appId: "1:314768701339:web:e5709b9097f1a13262533e",
  measurementId: "G-KY0GG4PV4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);