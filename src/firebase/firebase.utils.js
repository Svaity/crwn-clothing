import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyBNuJVUMxaJr57ngP8YfvUkibp5udmtOxI",
    authDomain: "crwn-db-295d1.firebaseapp.com",
    projectId: "crwn-db-295d1",
    storageBucket: "crwn-db-295d1.appspot.com",
    messagingSenderId: "615139260191",
    appId: "1:615139260191:web:c323f0e1e4f18c37fa622a"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;