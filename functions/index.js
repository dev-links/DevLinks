const functions = require('firebase-functions');
const firebase = require('firebase')
const express = require('express');
const app = express();
const {signUp} = require('./handler/authController')
const admin = require('firebase-admin');
admin.initializeApp();

const firebaseConfig = {
    apiKey: "AIzaSyCIGv6XlpSD9OnO5quHNQrBZQcTIwhxrhg",
    authDomain: "dev-links-e4992.firebaseapp.com",
    databaseURL: "https://dev-links-e4992.firebaseio.com",
    projectId: "dev-links-e4992",
    storageBucket: "dev-links-e4992.appspot.com",
    messagingSenderId: "67187498838",
    appId: "1:67187498838:web:87fd366657598082"
};

firebase.initializeApp(firebaseConfig)
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello Chris!");
});


app.post(`/signUp`, signUp)
exports.api =functions.https.onRequest(app);