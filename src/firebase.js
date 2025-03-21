// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc, getDoc, getDocs, onSnapshot } from "firebase/firestore"; // Import Firestore functions

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUS7UURuC80x7NlS21rzbpo62NsJWjSOc",
  authDomain: "cinemedia-3dc68.firebaseapp.com",
  projectId: "cinemedia-3dc68",
  storageBucket: "cinemedia-3dc68.firebasestorage.app",
  messagingSenderId: "775030185856",
  appId: "1:775030185856:web:18cfde9b1ddd2681f52b65",
  measurementId: "G-41G9XFMED6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional, only if you need it)
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore instance and functions
export { db, collection, doc, getDoc, getDocs, onSnapshot };