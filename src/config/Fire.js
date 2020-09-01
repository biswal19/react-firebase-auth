import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyAAiP7srVFDplY_JgVC97dRyu-SaEwJr0Q",
    authDomain: "react-firebase-auth-7c51b.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-7c51b.firebaseio.com",
    projectId: "react-firebase-auth-7c51b",
    storageBucket: "react-firebase-auth-7c51b.appspot.com",
    messagingSenderId: "108916512121",
    appId: "1:108916512121:web:83f04b3412f7589dbd8ba8"
};
const fire = firebase.initializeApp(config);
export default fire;
