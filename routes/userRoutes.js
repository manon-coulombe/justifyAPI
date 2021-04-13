const express = require('express')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
const userCtrl = require('../userController')

const router = express.Router()

// Users routes
router.get('/test', userCtrl.test)
router.post('/register', userCtrl.register)
router.post('/login', userCtrl.login)

module.exports = router