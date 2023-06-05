/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


// const functions = require("firebase-functions");
// const express = require("express");
// const engines = require("consolidate");
// var hbs = require("handlebars");
// const admin = require("firebase-admin");


// const app = express();
// app.engine("hbs",engines.handlebars);
// app.set("views","./views");
// app.set("view engine","hbs");


const {initializeApp} = require("firebase/app");
// const {getAnalytics} = require("firebase/analytics");

// Your web app"s Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQSrtP32nCObu4boPSbFUOzLL9bYWwFcA",
  authDomain: "ethan-dunne-website.firebaseapp.com",
  projectId: "ethan-dunne-website",
  storageBucket: "ethan-dunne-website.appspot.com",
  messagingSenderId: "1077394918607",
  appId: "1:1077394918607:web:3c04ae745d3a08c626fbba",
  measurementId: "G-E950SNTKWD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

console.log(app.name)


// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080);