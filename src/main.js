import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import 'flowbite';
import { initializeApp } from "firebase/app";


var firebaseConfig = {
    apiKey: "AIzaSyBUmYffLYb9m6RqebRvIZWpubi6nwGenpA",
    authDomain: "thumbsupapp-e79f1.firebaseapp.com",
    projectId: "thumbsupapp-e79f1",
    storageBucket: "thumbsupapp-e79f1.appspot.com",
    messagingSenderId: "40635053387",
    appId: "1:40635053387:web:0b04923323c716a9e164ce",
    measurementId: "G-LMRKJGMZ2S"
  };
  
  initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
