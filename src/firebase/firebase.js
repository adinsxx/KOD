import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app';
import 'firebase/firestore'

Vue.use(firestorePlugin)


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-q3kbxyTwtw_kS6q-U_gXU8QeodmCy7w",
  authDomain: "kingofdiamonds-18c2f.firebaseapp.com",
  projectId: "kingofdiamonds-18c2f",
  storageBucket: "kingofdiamonds-18c2f.appspot.com",
  messagingSenderId: "448284867499",
  appId: "1:448284867499:web:2c91397d5d35e1e5be30ee",
  measurementId: "G-VBBZXVW7KB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage()

export {db, auth, storage}

