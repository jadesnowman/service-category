const express = require('express');
const router = express.Router();

const productController = require('../controller/product.controller')
const auth = require('../../../middleware/auth')

router.get("/", productController.getProduct)

router.post("/", auth, productController.createProduct)
router.delete("/:id", auth, productController.deleteProduct)
router.get("/:id", auth, productController.showProduct)
router.put("/", auth, productController.updateProduct)

module.exports = router