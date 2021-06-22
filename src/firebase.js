import firebase from 'firebase/app'
import "firebase/auth"


var firebaseConfig = {
  apiKey: "AIzaSyBlP4_UltkNssBwBTFYcyb6lSzUtADsRWs",
  authDomain: "login-auth-e6468.firebaseapp.com",
  projectId: "login-auth-e6468",
  storageBucket: "login-auth-e6468.appspot.com",
  messagingSenderId: "268022947338",
  appId: "1:268022947338:web:321c612ed258ca147789f3"
  }
  const app =firebase.initializeApp(firebaseConfig);

  export const auth=app.auth();
  export default app;