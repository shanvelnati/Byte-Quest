// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnNo21QRO87KD8M4I52PAYTWGKVAxUTlc",
  authDomain: "byte-quest.firebaseapp.com",
  projectId: "byte-quest",
  storageBucket: "byte-quest.appspot.com",
  messagingSenderId: "891123001728",
  appId: "1:891123001728:web:face5feecd030ee3d97965",
  measurementId: "G-ZNF5SQNFTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


export { app, auth, db };
