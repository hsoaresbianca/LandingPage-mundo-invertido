// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmR8Rrr6yzSb5E-HdmTtoUzOrzD1lDLpM",
  authDomain: "mundo-invertido-js.firebaseapp.com",
  projectId: "mundo-invertido-js",
  storageBucket: "mundo-invertido-js.appspot.com",
  messagingSenderId: "604221885001",
  appId: "1:604221885001:web:27445b9f23d69480f6cd98"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app