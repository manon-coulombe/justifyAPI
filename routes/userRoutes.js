// Imports
const express = require('express')
const auth = require('../middleware/auth')
const userCtrl = require('../userController')

const router = express.Router()

// Configure API routes from user controller
router.post('/register', userCtrl.register)
router.post('/token', userCtrl.token)
router.post('/justify', auth, userCtrl.justify)

// Exports
module.exports = router