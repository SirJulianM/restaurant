import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC3CEOg-gpSxMm1rWketIuVH5ZkKw2pe6Y",
    authDomain: "restaurants-a4454.firebaseapp.com",
    projectId: "restaurants-a4454",
    storageBucket: "restaurants-a4454.appspot.com",
    messagingSenderId: "1084341466359",
    appId: "1:1084341466359:web:6b9962bbe5ccdc213a8ff2"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);