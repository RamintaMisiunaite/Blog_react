import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDDdhJyJqhqjJD0TAGIkd3eWMSPAXVqUZw",
    authDomain: "neblogas-blogas-nddt5.firebaseapp.com",
    projectId: "neblogas-blogas-nddt5",
    storageBucket: "neblogas-blogas-nddt5.appspot.com",
    messagingSenderId: "270446948340",
    appId: "1:270446948340:web:b1dae2399b265b1780d3a1"
});

const fb = firebase;

export default fb;