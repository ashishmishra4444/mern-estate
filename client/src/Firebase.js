// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-c556c.firebaseapp.com",
  projectId: "mern-estate-c556c",
  storageBucket: "mern-estate-c556c.appspot.com",
  messagingSenderId: "275930589416",
  appId: "1:275930589416:web:83112b01daca1656ce815d"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
