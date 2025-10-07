// src/firebase-config.js

import { initializeApp } from 'firebase/app';
// 1. Import the necessary function for Firestore Database
import { getFirestore } from 'firebase/firestore'; 
// 2. Import the necessary function for Authentication
import { getAuth } from 'firebase/auth'; 

// Your Firebase configuration object (replace with your actual keys)
const firebaseConfig = {
  apiKey: "AIzaSyB_IXWhWfvY6DBqgizfUSRB6O-0FtmZH10",
  authDomain: "task-manager-react-23df8.firebaseapp.com",
  projectId: "task-manager-react-23df8",
  storageBucket: "task-manager-react-23df8.firebasestorage.app",
  messagingSenderId: "706854712783",
  appId: "1:706854712783:web:9e8f952861fa122d214eba",
  measurementId: "G-D8S7ZC4NV8"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize and export the required services:

// 1. Authentication (for Google Login)
export const auth = getAuth(app); 

// 2. Firestore Database (for saving tasks)
export const db = getFirestore(app);

// Export the app instance if needed
export default app;