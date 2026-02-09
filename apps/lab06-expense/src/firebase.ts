import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2X-QXhh1EoiuTYcO92Ev0g1Uc87TKevY",
  authDomain: "lab6-a7a19.firebaseapp.com",
  projectId: "lab6-a7a19",
  storageBucket: "lab6-a7a19.firebasestorage.app",
  messagingSenderId: "969413646320",
  appId: "1:969413646320:web:bd548423ac54fb0fc42f35",
  measurementId: "G-Z0MNKVKB3M"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);