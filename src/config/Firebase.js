import firebase from 'firebase'
import 'firebase/firestore'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCIGv6XlpSD9OnO5quHNQrBZQcTIwhxrhg",
    authDomain: "dev-links-e4992.firebaseapp.com",
    databaseURL: "https://dev-links-e4992.firebaseio.com",
    projectId: "dev-links-e4992",
    storageBucket: "dev-links-e4992.appspot.com",
    messagingSenderId: "67187498838",
    appId: "1:67187498838:web:87fd366657598082"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase
