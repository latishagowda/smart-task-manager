import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkkQ4mxpBuEAgV8AXVfK0Vj77dOFWzaXI",
  authDomain: "smart-task-manager-189f4.firebaseapp.com",
  projectId: "smart-task-manager-189f4",
  storageBucket: "smart-task-manager-189f4.firebasestorage.app",
  messagingSenderId: "959711081068",
  appId: "1:959711081068:web:eb22141e2fd37be3055e49",
  measurementId: "G-QYEB0H75PE",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
