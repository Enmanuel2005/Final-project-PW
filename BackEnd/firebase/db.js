const { initializeApp, cert } = require('firebase-admin/app')
const { getDatabase } = require('firebase-admin/database')

const serviceAccount = require('./finalproject-c1b76-firebase-adminsdk-6vzlr-c78b84ef79.json');

const app = initializeApp({
    credential: cert(serviceAccount),
    databaseURL: 'https://finalproject-c1b76-default-rtdb.firebaseio.com/'
});

const db = getDatabase();

module.exports = {
    db
}