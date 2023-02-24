// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdB-5JkRbNOgUCRirk6WGFq8Z8tD75I9k",
  authDomain: "fix-and-clean-f1c93.firebaseapp.com",
  projectId: "fix-and-clean-f1c93",
  storageBucket: "fix-and-clean-f1c93.appspot.com",
  messagingSenderId: "833668650517",
  appId: "1:833668650517:web:74019cdfc1f1daff3b601c",
  measurementId: "G-NDZD5CE2LP",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export { app, analytics }
