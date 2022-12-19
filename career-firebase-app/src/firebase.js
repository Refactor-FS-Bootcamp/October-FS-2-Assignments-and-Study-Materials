import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDQRc37g-oqXtL42JxHxcMCSUEfONry0tU",
    authDomain: "career-firebase-nov.firebaseapp.com",
    projectId: "career-firebase-nov",
    storageBucket: "career-firebase-nov.appspot.com",
    messagingSenderId: "155860444595",
    appId: "1:155860444595:web:8641c9a34a3442083b97c6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth, db }