const mongoose = require('mongoose');
const { DB_CONNECTION } = process.env

exports.connect = () => {
    mongoose
        .connect(DB_CONNECTION)
        .then(() => {
            console.log("Database Connected")
        }).catch(error => {
            console.log("Database connection failure")
            console.log({ error })
        });
}
