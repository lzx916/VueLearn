import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBSWm1Epy4gz-RYVZMY_Z3lvZKJp44smCQ",
    authDomain: "muso-ninjas-49520.firebaseapp.com",
    projectId: "muso-ninjas-49520",
    storageBucket: "muso-ninjas-49520.appspot.com",
    messagingSenderId: "437670197307",
    appId: "1:437670197307:web:aad63906acf261bb4ac41e"
  };


// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorege = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorege, timestamp }