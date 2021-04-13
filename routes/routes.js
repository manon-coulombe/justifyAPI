const express = require('express')
const router = express.Router()

// Configure routes

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.status(200).send('<h1>Bonjour sur mon serveur<h1>')
})

// router.route('/users/register/').post(usersCtrl.register)
// router.route('/users/login/').post(usersCtrl.login)


module.exports = router