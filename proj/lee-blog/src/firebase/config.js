import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCgAjxi05kqy5IDo9FL_8Y-TDz5--y2mQE",
    authDomain: "udemy-vue-sites-984b4.firebaseapp.com",
    projectId: "udemy-vue-sites-984b4",
    storageBucket: "udemy-vue-sites-984b4.appspot.com",
    messagingSenderId: "816315451461",
    appId: "1:816315451461:web:c80293f3d89e876fc6fb2c"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

// 时间戳函数
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// export firestore
export { projectFirestore, timestamp }