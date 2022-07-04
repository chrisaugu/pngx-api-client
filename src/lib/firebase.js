import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAnalytics} from 'firebase/analytics';
import {getDatabase} from 'firebase/database';

import {v4 as uuidv4 } from "uuid";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC72AT6oeLFjTpxBUJMCWSMtQYCPWtPoQg",
  authDomain: "pngx-stock-data.firebaseapp.com",
  projectId: "pngx-stock-data",
  storageBucket: "pngx-stock-data.appspot.com",
  messagingSenderId: "159171091539",
  appId: "1:159171091539:web:a8f0900abf2aa1de067aa6",
  measurementId: "G-Q0475CRF0J"
};
// const firebaseConfig = {
//   apiKey: `${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
//   authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}`,
//   databaseURL: `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}`,
//   projectId: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`,
//   storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}`,
//   messagingSenderId: `${process.env.NEXT_PUBLIC_FIREABSE_MESSAGING_SENDER_ID}`,
//   appId: `${process.env.NEXT_PUBLIC_FIREBASE_APP_ID}`,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// allow emulator
// db.connectFirestoreEmulator('localhost', 8080);

// Auth exports
export const auth = getAuth(app);
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = getFirestore(app);
// export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
// export const fromMillis = firebase.firestore.Timestamp.fromMillis;
// export const increment = firebase.firestore.FieldValue.increment;

// Storage exports
export const storage = getStorage(app);
// export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

// Analytics exports
export const analytics = getAnalytics(app);

// Analytics exports
export const realTimeDb = getDatabase(app);

// Helper functions

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
 export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
 export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}

// {
//   title: 'Hello World,
//   slug: 'hello-world',
//   uid: 'userID',
//   username: 'jeffd23',
//   published: false,
//   content: '# hello world!',
//   createdAt: TimeStamp,
//   updatedAt: TimeStamp,
//   heartCount: 0,
// }

// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// // const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// import { collection, addDoc } from "firebase/firestore"; 

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
//   });

//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
