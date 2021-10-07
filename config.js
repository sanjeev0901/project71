import firebase from 'firebase';
import { initializeApp } from "firebase/app";
require("@firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmJhAiqjj3NLZU_Ac-WfEC0hqAZg8TwkU",
  authDomain: "project71-c41ff.firebaseapp.com",
  projectId: "project71-c41ff",
  storageBucket: "project71-c41ff.appspot.com",
  messagingSenderId: "837840284394",
  appId: "1:837840284394:web:872632d61abd3f41628593"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  export default firebase.firestore();

