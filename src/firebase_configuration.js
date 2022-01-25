// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbSNDEkHClMV9WSBiMkl25rADRkt48rfI",
    authDomain: "planijification.firebaseapp.com",
    projectId: "planijification",
    storageBucket: "planijification.appspot.com",
    messagingSenderId: "99087291528",
    appId: "1:99087291528:web:7f76b105bb19d38a9a3b3d",
    measurementId: "G-GETXEBK4J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);