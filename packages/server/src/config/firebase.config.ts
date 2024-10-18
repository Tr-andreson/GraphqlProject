// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB30FlXEVnXtEB5Mb2o7xO_zJp1kpnbpto",
  authDomain: "ecommerce-e8568.firebaseapp.com",
  projectId: "ecommerce-e8568",
  storageBucket: "ecommerce-e8568.appspot.com",
  messagingSenderId: "539525224603",
  appId: "1:539525224603:web:2e31812789c2283a8b8e3e",
  measurementId: "G-5H4S5P964D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
