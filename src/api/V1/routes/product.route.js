const express = require('express');
const router = express.Router();

const productController = require('../controller/product.controller')

router.get("/", productController.getProduct)
router.post("/", productController.createProduct)

router.delete("/:id", productController.deleteProduct)
router.get("/:id", productController.showProduct)
router.put("/", productController.updateProduct)

module.exports = router