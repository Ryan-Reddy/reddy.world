// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function StartFirebase() {
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAAqj-fbvSLjBjNRJfwbk8Rp3T1bTVs_Yg",
    authDomain: "getreddyworld.firebaseapp.com",
    databaseURL: "https://getreddyworld-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "getreddyworld",
    storageBucket: "getreddyworld.appspot.com",
    messagingSenderId: "815727821759",
    appId: "1:815727821759:web:a673d3cb49255ffc7b970a",
    measurementId: "G-12SFENLZLH"
  };

// Initialize Firebase
    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
}

export default StartFirebase;
