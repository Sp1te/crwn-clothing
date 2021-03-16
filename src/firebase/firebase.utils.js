import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBU-j1QItQ3jJY0jDi85ZdoEdx80zVYcWk",
  authDomain: "crwn-clothing-278da.firebaseapp.com",
  projectId: "crwn-clothing-278da",
  storageBucket: "crwn-clothing-278da.appspot.com",
  messagingSenderId: "88466014117",
  appId: "1:88466014117:web:78cda08fa48603948eb24c",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
