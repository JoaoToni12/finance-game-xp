import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAxitpsrRnJz1hAU7Zy2DgkhdZ_Iu-Fggc",
  authDomain: "gui-ia-finance-joao-72b99.firebaseapp.com",
  projectId: "gui-ia-finance-joao-72b99",
  storageBucket: "gui-ia-finance-joao-72b99.firebasestorage.app",
  messagingSenderId: "635993836952",
  appId: "1:635993836952:web:4b0bbf171f7a1c6b6c2fed"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const functions = getFunctions(app, 'us-central1');
// Adicione exports extras se precisar (auth, etc)