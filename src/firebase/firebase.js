import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUmYffLYb9m6RqebRvIZWpubi6nwGenpA",
  authDomain: "thumbsupapp-e79f1.firebaseapp.com",
  projectId: "thumbsupapp-e79f1",
  storageBucket: "thumbsupapp-e79f1.appspot.com",
  messagingSenderId: "40635053387",
  appId: "1:40635053387:web:0b04923323c716a9e164ce",
  measurementId: "G-LMRKJGMZ2S"
};

initializeApp(firebaseConfig)

const db = getFirestore()

export default db