import firebase from 'firebase';
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCLPoQper51t9MESuzpxOBrjiXu0IfJOFY",
  authDomain: "clone-8eb0a.firebaseapp.com",
  projectId: "clone-8eb0a",
  storageBucket: "clone-8eb0a.appspot.com",
  messagingSenderId: "1022594104010",
  appId: "1:1022594104010:web:a280b8a2dc4aa18bc1d233"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};