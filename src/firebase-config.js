// src/firebase-config.js

import { initializeApp } from 'firebase/app';
// 1. Import the necessary function for Firestore Database
import { getFirestore } from 'firebase/firestore'; 
// 2. Import the necessary function for Authentication
import { getAuth } from 'firebase/auth'; 

// Your Firebase configuration object (replace with your actual keys)
const firebaseConfig = {
  apiKey: ProcessingInstruction.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: ProcessingInstruction.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "task-manager-react-23df8",
  storageBucket: "task-manager-react-23df8.firebasestorage.app",
  messagingSenderId: "706854712783",
  appId: "1:706854712783:web:9e8f952861fa122d214eba",
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