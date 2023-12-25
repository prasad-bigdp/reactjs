// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDrOq6F0BqgApZm1LoLKPoF6I7e7_njHpE",
	authDomain: "react-auth-demo-85770.firebaseapp.com",
	projectId: "react-auth-demo-85770",
	storageBucket: "react-auth-demo-85770.appspot.com",
	messagingSenderId: "945226051869",
	appId: "1:945226051869:web:fe7e9639cad09cb626b1f4",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
 export const auth = getAuth(app)
