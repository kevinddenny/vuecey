import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import '@popperjs/core';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';



import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/storage';



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXVZekaSYi90sc8m3Sou3cJi-XfGMDoVY",
    authDomain: "testvue-ad06c.firebaseapp.com",
    projectId: "testvue-ad06c",
    storageBucket: "testvue-ad06c.appspot.com",
    messagingSenderId: "483980938866",
    appId: "1:483980938866:web:0028db783c05270a5a3ceb",
    measurementId: "G-Z5ZDETVQJX"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          unsubscribe();
          resolve(user);
          analytics.logEvent('login',{method});
      }, reject);
  })
};

export const db = firebase.firestore()
export const st = firebase.storage()
const analytics = firebase.analytics()
import 'bootstrap/dist/js/bootstrap.bundle.js'



createApp(App).use(store).use(router).mount('#app')
