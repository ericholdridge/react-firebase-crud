import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBHJd0srjJ8wQCaYluN1BB5HemWDIIIRO8",
  authDomain: "react-firebase-crud-a45f1.firebaseapp.com",
  databaseURL: "https://react-firebase-crud-a45f1.firebaseio.com",
  projectId: "react-firebase-crud-a45f1",
  storageBucket: "react-firebase-crud-a45f1.appspot.com",
  messagingSenderId: "1041779493988",
  appId: "1:1041779493988:web:593e71ec0e56dea1de6371",
  measurementId: "G-WQRRH0WY9K"
};
// Initialize Firebase
const fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();