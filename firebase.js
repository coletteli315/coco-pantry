// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC1Ryi9rrDlrxDNYiKT31hidpr7KlsdXCE',
  authDomain: 'pantry-3e986.firebaseapp.com',
  projectId: 'pantry-3e986',
  storageBucket: 'pantry-3e986.appspot.com',
  messagingSenderId: '525110218909',
  appId: '1:525110218909:web:661078a93c3344361d8474',
  measurementId: 'G-8D85TJTE3N',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { firestore, auth };
