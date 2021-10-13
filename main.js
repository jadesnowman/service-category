require('dotenv').config();
require('./src/config/database').connect()

const express = require('express');
const app = express()

const { PORT } = process.env

const productRoute = require("./src/api/V1/routes/product.route")
const authRoute = require("./src/api/V1/routes/auth.route")

app.use(express.json())

app.use('/api/v1/products', productRoute)
app.use('/api/v1/auth', authRoute)

app.listen(PORT, () => {
    console.log(`listening ${PORT}`)
})