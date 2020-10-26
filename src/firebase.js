import fireebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyAOwxculMViCnI2K0gArjUZV6AOV_JxE7s",
    authDomain: "twitter-clone-7bc17.firebaseapp.com",
    databaseURL: "https://twitter-clone-7bc17.firebaseio.com",
    projectId: "twitter-clone-7bc17",
    storageBucket: "twitter-clone-7bc17.appspot.com",
    messagingSenderId: "530368597849",
    appId: "1:530368597849:web:1f21a64de7b3a5b1cb8648"
  };

fireebase.initializeApp(firebaseConfig);
var db = fireebase.firestore();
   
export default db;