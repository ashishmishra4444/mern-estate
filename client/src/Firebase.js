// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-cf29f.firebaseapp.com",
  projectId: "mern-estate-cf29f",
  storageBucket: "mern-estate-cf29f.appspot.com",
  messagingSenderId: "497687319630",
  appId: "1:497687319630:web:2bd8044e913defd3039f1f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);