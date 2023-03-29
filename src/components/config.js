import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
    projectName: "FINAL PROJECT",
    projectId:"final-projec-6b836",
     projectNumber:  "283252769549",
     apiKey:"AIzaSyBHU4qwNi41aIdUPTPfEMdGtvkPPNzJICM",
    storageBucket: "final-projec-6b836.appspot.com",
    messagingSenderId: "283252769549",
    appId: "1:283252769549:web:e131a38982ffcc94ede644",
    measurementId: "G-X8W4CXCGLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service

export const db = getFirestore(app);