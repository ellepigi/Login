// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANN2EFZp7OYtgeNSQSIi4FUu0QP3sOJ4s",
  authDomain: "login-7af00.firebaseapp.com",
  projectId: "login-7af00",
  storageBucket: "login-7af00.appspot.com",
  messagingSenderId: "55689794566",
  appId: "1:55689794566:web:03fb821ea836408c1b9f87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app)


export {auth}


