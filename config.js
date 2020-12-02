import firebase from 'firebase';
require('@firebase/firestore')

  const firebaseConfig = {
      apiKey: "AIzaSyB7jEWAR2pQFJ3EzNWJWA6U4OeIMgi5i1w",
      authDomain: "barter-app-31d4c.firebaseapp.com",
      databaseURL: "https://barter-app-31d4c.firebaseio.com",
      projectId: "barter-app-31d4c",
      storageBucket: "barter-app-31d4c.appspot.com",
      messagingSenderId: "534497457968",
      appId: "1:534497457968:web:a6d58e3f78d9b847fabaf5",
      measurementId: "G-42HM2LWYBE"
    };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
