// import firebase from 'firebase'
// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBph4BBTg5tvNRz4wJQ1yPhtYR19GT9-zw",
  authDomain: "netflix-clone-d1496.firebaseapp.com",
  projectId: "netflix-clone-d1496",
  storageBucket: "netflix-clone-d1496.appspot.com",
  messagingSenderId: "889127755031",
  appId: "1:889127755031:web:7e848a5bc2d5f9cc04ab52"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;