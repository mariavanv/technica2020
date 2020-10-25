var firebaseConfig = {
  apiKey: "AIzaSyCzoOk-esu0zESXzG2gmLhw1csWuuLDnug",
  authDomain: "technica2020.firebaseapp.com",
  databaseURL: "https://technica2020.firebaseio.com",
  projectId: "technica2020",
  storageBucket: "technica2020.appspot.com",
  messagingSenderId: "103733424177",
  appId: "1:103733424177:web:03f0853edbc134d2c52510",
  measurementId: "G-1YHFDDYXTD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://technica2020.firebaseio.com"
});