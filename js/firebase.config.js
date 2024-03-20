import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyDwCFpXKuevlfJYXZ63sIPMCQV5IKZSqFQ",
  authDomain: "morocco-tour-811ca.firebaseapp.com",
  projectId: "morocco-tour-811ca",
  storageBucket: "morocco-tour-811ca.appspot.com",
  messagingSenderId: "657159408119",
  appId: "1:657159408119:web:3ce3f2d7d2d3cfc1fcc6f2",
  measurementId: "G-QT2QCQNGKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db,collection, addDoc}