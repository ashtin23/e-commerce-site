import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBlKxV0skXV8C_FvOGaPz5bQ7_rC2h4nE0",
    authDomain: "crwn-db-ab6f8.firebaseapp.com",
    databaseURL: "https://crwn-db-ab6f8.firebaseio.com",
    projectId: "crwn-db-ab6f8",
    storageBucket: "crwn-db-ab6f8.appspot.com",
    messagingSenderId: "581913004405",
    appId: "1:581913004405:web:adb439fe31ffc052fceb3c",
    measurementId: "G-P0WLLR8HEL"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    //if userAuth = null, we want to exit from this function
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

   if(!snapShot.exists) {
     const { displayName, email } = userAuth;
     const createdAt = new Date();

     //if there isn't any data, we are creating a new one using userAuth document
     try {
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
       })
     } catch(error) {
        console.log('error creating user', error.message);
     }
   }

   return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;