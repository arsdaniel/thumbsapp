import { initializeApp } from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBUmYffLYb9m6RqebRvIZWpubi6nwGenpA",
  authDomain: "thumbsupapp-e79f1.firebaseapp.com",
  projectId: "thumbsupapp-e79f1",
  storageBucket: "thumbsupapp-e79f1.appspot.com",
  messagingSenderId: "40635053387",
  appId: "1:40635053387:web:0b04923323c716a9e164ce",
  measurementId: "G-LMRKJGMZ2S"
};

firebaseConfig.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const storage =firebase.storage()

const userCollection = db.collection('users')
const produkCollection = db.collection('produk')

export {
    db,
    auth,
    storage,
    userCollection,
    produkCollection

}