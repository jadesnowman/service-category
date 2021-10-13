const Product = require('../model/product.model')
const { success, fail } = require('../../../helpers/response')
const { badRequest, successOK, notFound } = require('../../../helpers/message')

const createProduct = (req, res, next) => {
    const product = new Product({
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
    })
    product.save();

    const msg = success(product, "Data successfully saved!");

    res.json(msg);
    return;
}

const getProduct = async (req, res, next) => {
    const products = await Product.find()

    const msg = success(products, "Data successfully retrieved!");
    res.json(msg)
    return;
}

const showProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);

        const msg = success(product, "Data successfully retrieved!");
        res.json(msg)
        return;
    } catch (error) {
        const msg = fail("Data you're looking does not found!", 404);
        res.status(404).json(msg)
        return;
    }
}

const updateProduct = async (req, res, next) => {
    const result = await Product.findOneAndUpdate(
        {
            _id: req.body._id,
            name: req.body.name,
        },
        req.body
    )

    if (result === null) {
        const msg = fail("Data you're looking does not match any record!", 404);
        res.status(404).json(msg)
        return;
    }

    const msg = success(result, "Data successfully updated!");
    res.json(msg)
    return;
}

const deleteProduct = async (req, res, next) => {
    const product = await Product.deleteOne({
        _id: req.params.id
    });

    if (product.deletedCount === 0) {
        const msg = fail("Data you're trying to delete not exists!", 404);
        res.status(404).json(msg)
        return;
    }

    const msg = success(product, "Data successfully deleted!");
    res.json(msg)
    return;
}


module.exports = {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    showProduct
}