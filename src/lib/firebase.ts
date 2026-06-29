import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlOnj7NSwmw9c-yboOiqCmGr980A6KSU0",
  authDomain: "shreeshyamliving-333e8.firebaseapp.com",
  projectId: "shreeshyamliving-333e8",
  storageBucket: "shreeshyamliving-333e8.firebasestorage.app",
  messagingSenderId: "913070759706",
  appId: "1:913070759706:web:6454b63bbf8cb90f3e96a3",
  measurementId: "G-M2Y3YNBB23"
};

// Initialize Firebase (safely for Next.js hot-reloads)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
