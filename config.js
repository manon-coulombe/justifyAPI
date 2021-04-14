const dotenv = require('dotenv').config() // dotenv is a module module that loads environment variables from a .env file

// Exports mongoDB URL
module.exports = {
  MONGODB_URL: 'mongodb+srv://'+process.env.DB_USERNAME+':'+process.env.DB_PASSWORD+'@cluster0.a4p1y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
}

