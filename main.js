require('dotenv').config();
require('./src/config/database').connect()

const express = require('express');
const app = express()

const productRoute = require("./src/api/V1/routes/product.route")

app.use(express.json())
app.use('/api/v1/products', productRoute)

app.listen(process.env.PORT, () => {
    console.log(`listening ${process.env.PORT}`)
})