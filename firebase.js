import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
const firebaseConfig = {
  apiKey: "AIzaSyDSrrGmAJgFjVtWX80GJMIWoA5jc9scMJ8",
  authDomain: "hackathon-79408.firebaseapp.com",
  projectId: "hackathon-79408",
  storageBucket: "hackathon-79408.appspot.com",
  messagingSenderId: "357049146698",
  appId: "1:357049146698:web:acc5619510e28bec9a35b3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  app,
  collection,
  addDoc,
  db,
  setDoc,
  doc,
  getDoc,
  getDocs,
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  query,
  where,
  deleteDoc,
  updateDoc,
  storage
};
