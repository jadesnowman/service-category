const { initializeApp } = require('firebase/app')
const { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, updateDoc,
    deleteField, deleteDoc } = require('firebase/firestore')

initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
});


const db = getFirestore()

const store = async (user) => {
    try {
        const result = await addDoc(collection(db, "users"), user);
        console.log(result.id)
    } catch (error) {
        console.log('Failed to store data')
        console.log({ error })
    }
}

const list = async () => {
    try {
        const result = await getDocs(collection(db, "users"));
        result.forEach(val => {
            console.log({ ...{ id: val.id, ...val.data() } })
        })

    } catch (error) {
        console.log('Failed to store data')
        console.log({ error })
    }
}

const findById = async (param) => {
    const result = await getDoc(doc(db, "users", param));

    if (result.exists()) {
        console.log(result.data())
        return result.data()
    } else {
        console.log("Data you're looking does not found!")
        return "Data you're looking does not found!"
    }
}

const findByName = async (firstName) => {
    try {
        const q = query(collection(db, "users"), where("first", "==", firstName));
        const result = await getDocs(q)

        result.forEach(val => {
            console.log({ id: val.id, ...val.data() })
        })

    } catch (error) {
        console.log('Failed to store data')
        console.log({ error })
    }
}

const deleteById = async (param) => {
    const query = await deleteDoc(doc(db, "users", param));
    console.log('success');
}

// store({
//     first: "Ilham",
//     last: "Saputrajati",
//     born: 1995
// })

// store({
//     first: "Arum",
//     middle: "Putri",
//     last: "Sukmasari",
//     born: 1992
// })
// store({
//     first: "Janet",
//     middle: "Simeng",
//     last: "cemong",
//     born: 1992
// })

// findById('7JQBXKZoaLvbsHu7Xs3H')
// findById('A6dZRgoEnFKjvr29a6Bw')
// findById('a')
// findByName('Ada')
list()
// deleteById('zNMXaJOVCoapuJK78mDd')
deleteById('E6NERDqkJSQm6pgyGNsi')
// findByName('Alan Walker')
// module.exports = db
