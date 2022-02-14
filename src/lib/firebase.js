import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyA_-yOYRN-hrBGewo5ahXn_qK4naZXQll0',
  authDomain: 'instagram-c1c37.firebaseapp.com',
  projectId: 'instagram-c1c37',
  storageBucket: 'instagram-c1c37.appspot.com',
  messagingSenderId: '49787946993',
  appId: '1:49787946993:web:1d5c87ed7799b0962fa650',
  measurementId: 'G-VPZFT2CQD6'
};
const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
