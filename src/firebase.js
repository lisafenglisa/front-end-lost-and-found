import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5oMJ0lvYMYy-cSe2JHyI9vG9y86MXsQg",
  authDomain: "lost-and-found-lisa.firebaseapp.com",
  projectId: "lost-and-found-lisa",
  storageBucket: "lost-and-found-lisa.appspot.com",
  messagingSenderId: "848189978473",
  appId: "1:848189978473:web:7d129baf00d456e773eff8",
  measurementId: "G-00XDNGBJ43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
