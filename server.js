// Imports
const express = require('express')
//const jwt = require('jsonwebtoken')
//const bodyParser = require('body-parser')
//const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

const routes = require('./routes/routes.js')
const userRoutes = require('./routes/userRoutes.js')

// Instantiate Express server 
const app = express()

mongoose.connect('mongodb+srv://manon_coulombe:GjQAzwhyaNnERRvU@cluster0.a4p1y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// Lauch server
app.listen(8080, () => {
    console.log('Serveur en écoute')
})

app.use('/', routes)
app.use('/user', userRoutes)

module.exports = app