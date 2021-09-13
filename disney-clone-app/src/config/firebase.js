import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAqJO1FPyGnMrLDuKQwsfJpLU2mMXFj7m4",
  authDomain: "disney-clone-app-reactjs.firebaseapp.com",
  projectId: "disney-clone-app-reactjs",
  storageBucket: "disney-clone-app-reactjs.appspot.com",
  messagingSenderId: "203691615612",
  appId: "1:203691615612:web:004ae593850268a1fef0f9",
  measurementId: "G-TV8SJG80NE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default database;
