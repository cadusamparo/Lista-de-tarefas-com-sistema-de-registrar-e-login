import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDC5rQfO-Kv68u7mrCpCHgjNtmfZ5iCAOc",
    authDomain: "curso-87aa9.firebaseapp.com",
    projectId: "curso-87aa9",
    storageBucket: "curso-87aa9.appspot.com",
    messagingSenderId: "741048486344",
    appId: "1:741048486344:web:670621493e93791d0d58fd",
    measurementId: "G-F0B6KVJMNM"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth }