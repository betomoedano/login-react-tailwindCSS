import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "",
  authDomain: "", 
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

initializeApp(firebaseConfig);
export const auth = getAuth();