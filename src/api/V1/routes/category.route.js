const express = require('express');
const router = express.Router();

const categoryController = require('../controller/category.controller')

router.get("/", categoryController.index)
router.post("/", categoryController.store)
router.get("/:id", categoryController.show)

module.exports = router