import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBNzAAYSf1ZXXI6ydaX3_oPErOTAz3wLTo",
    authDomain: "ecommerce-web-2.firebaseapp.com",
    projectId: "ecommerce-web-2",
    storageBucket: "ecommerce-web-2.appspot.com",
    messagingSenderId: "951061330422",
    appId: "1:951061330422:web:c67e58d8c8f197e684efd7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, db };