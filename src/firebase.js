// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARVtdw7iruLiodH7R8qiMtI3j0mssjn8k",
  authDomain: "tik-tok-clone-b9fea.firebaseapp.com",
  projectId: "tik-tok-clone-b9fea",
  storageBucket: "tik-tok-clone-b9fea.appspot.com",
  messagingSenderId: "113097007320",
  appId: "1:113097007320:web:8d5cffcb2edd80f45377ad",
  measurementId: "G-6DCR0QZLWF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
