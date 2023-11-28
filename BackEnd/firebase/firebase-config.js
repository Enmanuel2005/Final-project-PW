const { initializeApp, cert } = require("firebase-admin/app");
const { getDatabase } = require('firebase-admin/database');
const { getAuth } = require('firebase-admin/auth')

const serviceAccount = require("./finalproject-c1b76-firebase-adminsdk-6vzlr-e5d870011f.json");

const app = initializeApp({
  credential: cert(serviceAccount),
  databaseURL: "https://finalproject-c1b76-default-rtdb.firebaseio.com/"
});

const db = getDatabase();

const auth = getAuth();

module.exports = {
  db, auth
}