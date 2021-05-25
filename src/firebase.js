import firebase from 'firebase'
// Your web app's Firebase configuration
  var fireBaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC3yI2HUtYFkKfp3hQaCQqvwurfLsfJO4o",
    authDomain: "landing-token.firebaseapp.com",
    databaseURL: "https://landing-token-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "landing-token",
    storageBucket: "landing-token.appspot.com",
    messagingSenderId: "820435665276",
    appId: "1:820435665276:web:9a68edeae8be0a62e1a4f9",
    measurementId: "G-55KPYRJXE8"
  })

  var db = fireBaseApp.firestore();
  export { db , fireBaseApp }