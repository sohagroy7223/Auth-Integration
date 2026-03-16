// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// DANGER don't share this online^*********

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYTqZFd5IvqEwFL8oV3zY1NpUFNwSTcc8",
  authDomain: "auth-integration-c3da6.firebaseapp.com",
  projectId: "auth-integration-c3da6",
  storageBucket: "auth-integration-c3da6.firebasestorage.app",
  messagingSenderId: "466675316417",
  appId: "1:466675316417:web:48f06ffe5a224189290640",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
