const firebase = require('firebase');

firebase.initializeApp({
    apiKey: "AIzaSyBkF-ABX1UqVgWNdgfP9fTE6sIU1WqI8Vg",
    authDomain: "pta-chat-vmam.firebaseapp.com",
    databaseURL: "https://pta-chat-vmam.firebaseio.com",
    projectId: "pta-chat-vmam",
    storageBucket: "pta-chat-vmam.appspot.com",
    messagingSenderId: "292481896494",
    appId: "1:292481896494:web:398a183c8031dc1b"
});

module.exports = firebase.database();