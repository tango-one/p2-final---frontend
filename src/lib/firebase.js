import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyACy3DXOKoHK0nFoD5ZW2COxLLQclPLzpg",
  authDomain: "help-e30f6.firebaseapp.com",
  projectId: "help-e30f6",
  storageBucket: "help-e30f6.appspot.com",
  messagingSenderId: "426053638691",
  appId: "1:426053638691:web:6c756c2f8fbd8bc8366f96",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default firebase;
