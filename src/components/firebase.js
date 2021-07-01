import firebase from 'firebase'
//import firebase from 'firebase/app';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDVp9-Jvjvdv_NaKJYnxYoJp4qTeYpDClQ",
    authDomain: "messenger-d2c90.firebaseapp.com",
    projectId: "messenger-d2c90",
    storageBucket: "messenger-d2c90.appspot.com",
    messagingSenderId: "477920458235",
    appId: "1:477920458235:web:9b8e7ce692ec325d57875e"
};

//firebase.initializeApp(config);
if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }else {
    firebase.app(); // if already initialized, use that one
 }

const auth = firebase.auth();
const db = firebase.firestore()
export { auth, db };
export default firebase;