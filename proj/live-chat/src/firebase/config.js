import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCgAjxi05kqy5IDo9FL_8Y-TDz5--y2mQE",
    authDomain: "udemy-vue-sites-984b4.firebaseapp.com",
    projectId: "udemy-vue-sites-984b4",
    storageBucket: "udemy-vue-sites-984b4.appspot.com",
    messagingSenderId: "816315451461",
    appId: "1:816315451461:web:cb1d285f079dd2edc6fb2c"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()  //身份验证
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }