const express = require('express');
const router = express.Router();

const registerController = require('../controller/auth/register.controller')
const loginController = require('../controller/auth/login.controller')

router.post("/register", registerController.register)
router.post("/login", loginController.login)

module.exports = router