// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { 
  getFirestore
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {

   apiKey: "AIzaSyB32I80zNhKnFE-H3DE1SjmpE5q-ANQbuc",
  authDomain: "sinuous-cat-398020.firebaseapp.com",
  projectId: "sinuous-cat-398020",
  storageBucket: "sinuous-cat-398020.appspot.com",
  messagingSenderId: "158817927488",
  appId: "1:158817927488:web:8ce0e688611069cbedfaa5",
  measurementId: "G-NW1GT7GBKD"

  // apiKey: process.env.NEXT_PUBLIC_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_ID,
  // appId: process.env.NEXT_PUBLIC_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

initializeApp(firebaseConfig);
export const db = getFirestore()
