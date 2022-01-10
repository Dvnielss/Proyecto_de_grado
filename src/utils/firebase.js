import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD2HRbZuXINMW9XQr4XrMyPQO6EKM7L7OY",
    authDomain: "proyecto-grado-a870d.firebaseapp.com",
    databaseURL: "https://proyecto-grado-a870d-default-rtdb.firebaseio.com",
    projectId: "proyecto-grado-a870d",
    storageBucket: "proyecto-grado-a870d.appspot.com",
    messagingSenderId: "9810936665",
    appId: "1:9810936665:web:0026483caab3c9bf4bc248"
  };


export default firebase.initializeApp(firebaseConfig);