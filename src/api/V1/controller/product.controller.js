const Product = require('../model/product.model')

const createProduct = (req, res, next) => {
    const product = new Product({
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
    })

    product.save()
    res.json(product)
}

const getProduct = async (req, res, next) => {
    const products = await Product.find()
    res.json(products)
}

const updateProduct = (req, res, next) => {
    res.json({
        message: "sukses"
    })
}

const deleteProduct = (req, res, next) => {
    res.json({
        message: "sukses"
    })
}

module.exports = {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
}