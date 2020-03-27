const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from San Francisco!");
});

// GET
// POST

exports.placeOrder = functions.https.onRequest((request, response) => {
 var data = request.body;
 response.send(JSON.stringify(data));
});
