// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "redx-rect-app.firebaseapp.com",
  projectId: "redx-rect-app",
  storageBucket: "redx-rect-app.appspot.com",
  messagingSenderId: "406273611423",
  appId: "1:406273611423:web:05a80e35bf5bca0a3b34aa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);