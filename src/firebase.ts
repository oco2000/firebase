// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACTplMuFA43Xb_AkNFBpQMr7PXuL6KCow",
  authDomain: "test-c2519.firebaseapp.com",
  projectId: "test-c2519",
  storageBucket: "test-c2519.firebasestorage.app",
  messagingSenderId: "593165881077",
  appId: "1:593165881077:web:1995d294705441cd5dbfbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signIn = async () => {
  const userCred = await signInWithPopup(auth, provider);
  console.log(userCred);
  return userCred;
}

const _signOut = async () => {
  return signOut(auth);
}

export { app, auth, signIn, _signOut as signOut };
