import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5Qq9EWgzB0IgIGE0MafP0wwKAuNXuL7U",
  authDomain: "kamp-8c0c7.firebaseapp.com",
  projectId: "kamp-8c0c7",
  storageBucket: "kamp-8c0c7.firebasestorage.app",
  messagingSenderId: "447091876803",
  appId: "1:447091876803:web:ce13fb7a54b33d035cd376"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);