// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import { getStorage, ref, uploadString } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBco825ixcrpzun1Movs6zlNSM5C0e1ZSI",
  authDomain: "shorts-dc3e8.firebaseapp.com",
  projectId: "shorts-dc3e8",
  storageBucket: "shorts-dc3e8.appspot.com",
  messagingSenderId: "457307755670",
  appId: "1:457307755670:web:262af80b5090283cf6deb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();
const db = getFirestore();
export {auth, storage, db};
export default app;
