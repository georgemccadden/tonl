import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHn25JHypK4eFeXUNd7zj9-TLPTwaA6VY",
  authDomain: "tonl-imagery.firebaseapp.com",
  projectId: "tonl-imagery",
  storageBucket: "tonl-imagery.appspot.com",
  messagingSenderId: "339097848066",
  appId: "1:339097848066:web:d8cfbf962fe68ef2041a1b",
  measurementId: "G-X93Y2RJK5Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
