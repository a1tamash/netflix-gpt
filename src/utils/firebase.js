// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAxnzMU_Eu4mG5cobHGmk-dmZqWg2xBwRg",
	authDomain: "netflix-gpt-a238d.firebaseapp.com",
	projectId: "netflix-gpt-a238d",
	storageBucket: "netflix-gpt-a238d.appspot.com",
	messagingSenderId: "714686840541",
	appId: "1:714686840541:web:91e6f5cc8262692cc2a534",
	measurementId: "G-8XL59W28M1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
