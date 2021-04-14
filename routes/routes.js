// Imports
const express = require('express')
const router = express.Router()

// Configure routes
router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.status(200).send('<h1>You are connected to the server<h1>')
})

// Exports
module.exports = router