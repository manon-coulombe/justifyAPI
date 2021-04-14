// Imports
const express = require('express') // Express is a JS web application framework for building web applications and APIs
const mongoose = require('mongoose') // Mongoose is the library for MongoDB with NodeJS
const config = require('./config')
const routes = require('./routes/routes')
const userRoutes = require('./routes/userRoutes')

// Instantiate Express server 
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// DataBase connection
const mongodbUrl = config.MONGODB_URL
mongoose.connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB !'))
    .catch(() => console.log('Connection to MongoDB failed !'));

// Lauch server
app.listen(8080, () => {
    console.log('Serveur en écoute')
})

app.use('/', routes)
app.use('/api', userRoutes)


module.exports = app