import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBx2eddIr7EieBQ5-4NXGsnrVTwujwkEoE",
    authDomain: "biblioteca-eletronica-3963e.firebaseapp.com",
    databaseURL: "https://biblioteca-eletronica-3963e-default-rtdb.firebaseio.com",
    projectId: "biblioteca-eletronica-3963e",
    storageBucket: "biblioteca-eletronica-3963e.appspot.com",
    messagingSenderId: "319675167103",
    appId: "1:319675167103:web:0ef781312b2fd7ee2faa4a"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  export default db;