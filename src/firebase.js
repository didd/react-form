const firebase = require("firebase");

const config = {
  apiKey: "AIzaSyDsjUQcaUI2zclJpwJbu67iyP-YBKb07lY",
  authDomain: "jetcake.firebaseapp.com",
  databaseURL: "https://jetcake.firebaseio.com",
  projectId: "jetcake",
  storageBucket: "jetcake.appspot.com",
  messagingSenderId: "239613118392",
  appId: "1:239613118392:web:e3f9ad22d3bbd0c947314d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
