const { initializeApp } = require('firebase/app');

require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const {
    getDatabase,
    ref,
    get,
    query,
    onValue,
    onChildAdded,
    onChildChanged,
    onChildRemoved
} = require('firebase/database');


const db = getDatabase(app)
const dbRef = ref(db, "/categories")

get(query(dbRef)).then(result => {
    onValue(query(dbRef), snapshot => {
        console.log("INITIATE `\n");
        const snap = Object.values(snapshot.val());
    })

    onChildAdded(query(dbRef), (snapshot) => {
        console.log("CHILD ADDED `\n");
        console.log(snapshot.val());
    });

    onChildChanged(query(dbRef), (snapshot) => {
        console.log("CHILD CHANGED `\n")
        console.log(snapshot.val());
    });

    onChildRemoved(query(dbRef), (snapshot) => {
        console.log("CHILD REMOVED `\n");
        console.log(snapshot.val());
    });
})