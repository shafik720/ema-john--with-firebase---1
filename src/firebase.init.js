// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpWm7d1BUkyww8ywdlTEserhiDx5UiM4w",
  authDomain: "fir-ema-john-1.firebaseapp.com",
  projectId: "fir-ema-john-1",
  storageBucket: "fir-ema-john-1.appspot.com",
  messagingSenderId: "563645635186",
  appId: "1:563645635186:web:6aeb8dcffbdeaa89d9c0eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth; 