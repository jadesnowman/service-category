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

const showProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        console.log(product)
        res.json(
            {
                success: true,
                data: product
            }
        )
    } catch (error) {
        res.status(404).json(
            {
                success: false,
                message: "Data you're looking does not found!",
                data: null
            }
        )
    }
}

module.exports = {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    showProduct
}