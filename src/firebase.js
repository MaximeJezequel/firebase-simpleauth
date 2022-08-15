// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDgWtH5v4amxaUfMLPqW1mQVlFjDVFj3qg",
	authDomain: "fir-auth-6b38f.firebaseapp.com",
	projectId: "fir-auth-6b38f",
	storageBucket: "fir-auth-6b38f.appspot.com",
	messagingSenderId: "280737999471",
	appId: "1:280737999471:web:f49695d258325b99417b9a",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
