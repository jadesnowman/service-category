require('dotenv').config();

const express = require('express');
const app = express()

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION)
    .then(result => {
        console.log("Database Connected")
    }).catch(error => {
        console.log("Database connection failure")
        console.log({ error })
    });

const productRoute = require("./src/api/V1/routes/product.route")

app.use(express.json())
app.use('/api/v1/products', productRoute)

app.listen(process.env.PORT, () => {
    console.log(`listening ${process.env.PORT}`)
})