import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyArgCsNOyaHdw08O9TlFdXXcGG-gtVGwP8',
  authDomain: 'clone-disney.firebaseapp.com',
  projectId: 'clone-disney',
  storageBucket: 'clone-disney.appspot.com',
  messagingSenderId: '8204414515',
  appId: '1:8204414515:web:a64a25911b1c2cdc6d3d46',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
