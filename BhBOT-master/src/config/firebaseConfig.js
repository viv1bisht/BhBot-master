// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import envConst from "../utility/const/envConst";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: envConst.FIREBASE_API_KEY,
  authDomain: envConst.FIREBASE_AUTH_DOMAIN,
  projectId: envConst.FIREBASE_PROJECT_ID,
  storageBucket: envConst.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envConst.FIREBASE_MESSAGING_SENDER_ID,
  appId: envConst.FIREBASE_APP_ID,
  measurementId: envConst.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = new getFirestore(app);
