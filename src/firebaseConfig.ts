import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBPhOD6viQ_rXS8qUpdXla7m4qhkTGs0y4",
  authDomain: "smartrider-c106b.firebaseapp.com",
  projectId: "smartrider-c106b",
  storageBucket: "smartrider-c106b.appspot.com",
  messagingSenderId: "794565168843",
  appId: "1:794565168843:web:0b552defb74ac07f68154e",
  measurementId: "G-8EQ0709YCW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);