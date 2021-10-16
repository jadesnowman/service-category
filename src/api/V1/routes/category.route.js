const express = require('express');
const router = express.Router();

const categoryController = require('../controller/category.controller')

router.get("/", categoryController.index)
router.post("/", categoryController.store)
router.put("/", categoryController.patch)

router.get("/:id", categoryController.show)
router.delete("/:id", categoryController.destroy)

module.exports = router