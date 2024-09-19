// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Configuration Firebase (copiée depuis Firebase Console)

const firebaseConfig = {

    apiKey: "AIzaSyBlBrWR2fd12SfTwH6HvOFbcw06AekycKs",
    authDomain: "lofran-8e2ed.firebaseapp.com",
    projectId: "lofran-8e2ed",
    storageBucket: "lofran-8e2ed.appspot.com",
    messagingSenderId: "830461678178",
    appId: "1:830461678178:web:49fe994ac3b3898d6db73b",
    measurementId: "G-G3GLTEZDQX"
  
  };

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser l'authentification et le provider Google
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
