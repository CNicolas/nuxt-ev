import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBARJeop_KsQ5N2XXbC0eG4lx2TLCJhtps",
    authDomain: "nuxt-ev.firebaseapp.com",
    projectId: "nuxt-ev",
    storageBucket: "nuxt-ev.firebasestorage.app",
    messagingSenderId: "366155786751",
    appId: "1:366155786751:web:2d378cc2f454058b3c5fca"
  };

// Initialiser Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default db;