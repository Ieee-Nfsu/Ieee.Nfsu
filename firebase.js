// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtZ5VeSMeg5tTr-uL2QA4tPweYctwpV8g",
  authDomain: "ieee-nfsu.firebaseapp.com",
  projectId: "ieee-nfsu",
  storageBucket: "ieee-nfsu.appspot.com",
  messagingSenderId: "554289828014",
  appId: "1:554289828014:web:68c2c1ace5478e66411d3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);