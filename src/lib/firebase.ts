import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCf32-Ow9qPbstTxgChrCMaqol3VFnz0CQ",
  authDomain: "webvorn-2636.firebaseapp.com",
  projectId: "webvorn-2636",
  storageBucket: "webvorn-2636.firebasestorage.app",
  messagingSenderId: "137195464034",
  appId: "1:137195464034:web:d717dbb4ffdfb740e3b83b"
};

// Initialize Firebase (safely for Next.js hot-reloads)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
