const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth')

const registerController = require('../controller/auth/register.controller')
const loginController = require('../controller/auth/login.controller')
const logoutController = require('../controller/auth/logout.controller')

router.post("/register", registerController.register)
router.post("/login", loginController.login)
router.post("/logout", auth, logoutController.logout)

module.exports = router