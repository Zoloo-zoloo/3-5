import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLc1Ak6RjZvzyiifMSDnMrRrkrCr_LmKE",
  authDomain: "introduction-133c1.firebaseapp.com",
  projectId: "introduction-133c1",
  storageBucket: "introduction-133c1.appspot.com",
  messagingSenderId: "775034997582",
  appId: "1:775034997582:web:9975d8ccfd21571b8eec1f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
