import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDqGDSbDR-byuT08Q7a6cCubm356KCEWnQ",
    authDomain: "story-boards.firebaseapp.com",
    databaseURL: "https://story-boards.firebaseio.com",
    projectId: "story-boards",
    storageBucket: "story-boards.appspot.com",
    messagingSenderId: "1033172059949",
    appId: "1:1033172059949:web:662c4a55785e009e89f5a4",
    measurementId: "G-3QXFM0TYYZ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
