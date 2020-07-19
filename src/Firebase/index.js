import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyCOfobvAX0qX6zAlKndp0-6t8ZKf8W9CUU",
  authDomain: "monimoo-29336.firebaseapp.com",
  databaseURL: "https://monimoo-29336.firebaseio.com",
  projectId: "monimoo-29336",
  storageBucket: "monimoo-29336.appspot.com",
  messagingSenderId: "1008576600768",
  appId: "1:1008576600768:web:e38a89f576acd8f909eb25"
});

export const firebaseRef = firebase.database().ref();
export default firebase;

         
  