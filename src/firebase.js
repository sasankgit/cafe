// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import the authentication module

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIPwIhYMhd4fl-6dknpnfpYbaKcoNWGO8",
  authDomain: "cafe-booking-95fc0.firebaseapp.com",
  projectId: "cafe-booking-95fc0",
  storageBucket: "cafe-booking-95fc0.appspot.com",
  messagingSenderId: "1045882542555",
  appId: "1:1045882542555:web:3dbd39b79c6277908eeffe",
  measurementId: "G-5DQSXQSPRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication

// Export the auth object for use in your application
export { app, auth };
