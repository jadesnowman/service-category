require('dotenv').config();
require('./src/config/database').connect()

const express = require('express');
const app = express()

const { PORT } = process.env

const authRoute = require("./src/api/V1/routes/auth.route")
const productRoute = require("./src/api/V1/routes/product.route")
const categoryRoute = require("./src/api/V1/routes/category.route")

app.use(express.json())

app.get('/', (req, res, next) => {
    res.json({
        success: true
    })
})

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/products', productRoute)
app.use('/api/v1/categories', categoryRoute)

app.listen(PORT, () => {
    console.log(`listening ${PORT}`)
})