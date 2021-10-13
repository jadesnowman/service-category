const express = require('express');
const router = express.Router();

const productController = require('../controller/product.controller')

router.get("/", productController.getProduct)
router.post("/", productController.createProduct)
router.get("/:id", productController.showProduct)

module.exports = router