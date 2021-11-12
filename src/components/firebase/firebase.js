import firebase from 'firebase/app'
import 'firebase/storage'

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyBJ5mUwu_c2FRGCl5rTG1PKT2MM7C_E9Og",
    authDomain: "webpro-afc54.firebaseapp.com",
    projectId: "webpro-afc54",
    storageBucket: "webpro-afc54.appspot.com",
    messagingSenderId: "707527181115",
    appId: "1:707527181115:web:9bf83ac0ab39b320eb2d1e"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()

export  {
    storage, firebase as default
}