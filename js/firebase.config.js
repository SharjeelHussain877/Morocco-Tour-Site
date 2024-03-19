import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyDKNk73GDUFiH4F4P79wwRPRDCKC-ZvomE",
  authDomain: "tour-c8fe3.firebaseapp.com",
  projectId: "tour-c8fe3",
  storageBucket: "tour-c8fe3.appspot.com",
  messagingSenderId: "273054360586",
  appId: "1:273054360586:web:b3f66e9ab067815c4febf3",
  measurementId: "G-NJCFHW5XPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db,collection, addDoc}