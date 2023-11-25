import { initializeApp, cert } from 'firebase-admin/app'
import { getDatabase } from 'firebase-admin/database'

const serviceAccount = require('./finalproject-c1b76-firebase-adminsdk-6vzlr-c78b84ef79.json');

const app = initializeApp({
    credential: cert(serviceAccount),
    databaseURL: 'https://finalproject-c1b76-default-rtdb.firebaseio.com/'
});

const auth = firebase.auth();

auth.createUserWithEmailAndPassword(email, password);
auth.loginUserWithEmailAndPassword(email, password);

auth.onAuthStateChanged(function (user) {
    if (user) {
        console.log('Esta logueado')
    }
});

auth.signOut();

const db = getDatabase();

export default db