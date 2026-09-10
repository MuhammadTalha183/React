import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Fix 1: Use import.meta.env for Vite environment variables
const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID
 apiKey: "AIzaSyA-Bcb-omR4lEgrn98Lrmc9jR6gEfwLxjc",
  authDomain: "blog-web-cbcb3.firebaseapp.com",
  projectId: "blog-web-cbcb3",
  storageBucket: "blog-web-cbcb3.firebasestorage.app",
  messagingSenderId: "1008867795211",
  appId: "1:1008867795211:web:9c19526ebefa03def9420e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Fix 2: Pass the initialized 'app' instance into getAuth
export const auth = getAuth(app);
