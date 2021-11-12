import firebase from 'firebase/app'
import 'firebase/storage'

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCTWo0ohr9NKmmil1dw6IY-m1j27H-A-2A",
  authDomain: "web-project-1b41a.firebaseapp.com",
  projectId: "web-project-1b41a",
  storageBucket: "web-project-1b41a.appspot.com",
  messagingSenderId: "176288408854",
  appId: "1:176288408854:web:c791e69c5000ad8c271c37",
  measurementId: "G-GKFRMTTFFC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()

export  {
    storage, firebase as default
}