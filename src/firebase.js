import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
});

const db = firebase.firestore();

export const getIssues = db.collection('issues').orderBy('createdAt', 'desc').limit(5).get();
export const registerUser = async payload => {
   const {
     user: { uid }
   } = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password);
   if (uid) {
     const userData = {
       email: payload.email,
       uid,
       xp: 0,
       channel: 'fr',
       sponsorId: Math.random().toString(36).substr(2, 9),
       sponsor: payload.sponsorId,
       avatar: 'level1',
       ghostMode: false,
       hideMap: false,
       username: payload.username,
     };
    firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .set(userData, { merge: true });
  }
}





