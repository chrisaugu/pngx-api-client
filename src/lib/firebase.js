import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';

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

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;

// Storage exports
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

export const analytics = firebase.analytics();


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