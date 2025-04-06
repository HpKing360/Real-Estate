// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-ad3cb.firebaseapp.com",
  projectId: "real-estate-ad3cb",
  storageBucket: "real-estate-ad3cb.appspot.com",
  messagingSenderId: "207915905899",
  appId: "1:207915905899:web:85155b464fef74eabbd22e",
  measurementId: "G-S3CCHSC3MV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
