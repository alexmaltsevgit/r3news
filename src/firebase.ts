import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyDncrDkW_z2FLHKxmwMZd2hSRasJORDOuU",
  authDomain: "r3news-b5690.firebaseapp.com",
  projectId: "r3news-b5690",
  storageBucket: "r3news-b5690.appspot.com",
  messagingSenderId: "1071147434289",
  appId: "1:1071147434289:web:96aa83df3359f7fc0eb010",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleAuth = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  firebase.auth().signInWithPopup(googleAuth);
};
