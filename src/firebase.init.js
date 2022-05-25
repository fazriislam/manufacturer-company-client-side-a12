// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-NxCLbqd7qumpOr8cWq_W7X2oVDN52-Y",
  authDomain: "manufacturer-company-96a22.firebaseapp.com",
  projectId: "manufacturer-company-96a22",
  storageBucket: "manufacturer-company-96a22.appspot.com",
  messagingSenderId: "68977538140",
  appId: "1:68977538140:web:aec86468bb1443baa96299",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;