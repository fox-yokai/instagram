import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: "instagram-13626.firebaseapp.com",
    projectId: "instagram-13626",
    storageBucket: "instagram-13626.appspot.com",
    messagingSenderId: "396634219305",
    appId: "1:396634219305:web:331b87725a425b8e160d38"
};


export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();