import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfCsoE7SFac0n4c9tjkm5GOzpnYHh01d0",
  authDomain: "camara-35af8.firebaseapp.com",
  databaseURL: "https://camara-35af8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "camara-35af8",
  storageBucket: "camara-35af8.appspot.com",
  messagingSenderId: "96197019227",
  appId: "1:96197019227:web:970b8ef80a0aa0d74b617e"
};

firebase.initializeApp(firebaseConfig);

// export const storageBuckete = getStorage(firebaseApp);

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
  docs: firestore.collection("docs"),
  files: firestore.collection("files"),
  date: firebase.firestore.FieldValue.serverTimestamp(),
};

export const storage = firebase.storage();

export const auth = firebase.auth();
