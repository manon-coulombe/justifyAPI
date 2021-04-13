const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        dropDups: true,
    },
    password: {
        type: String,
        minlength: 8,
        required: true
    },
    // add word count for limit
    count: {
        type: Number,
        min:0,
        max:80000,
        default:0
    }
})

// this plugin adds pre-save validation for unique fields within a schema (makes error handling easier)
userSchema.plugin(uniqueValidator)

// using mongoose.model methode to export userShema as a model for db
const userModel = mongoose.model('User', userSchema)
module.exports = userModel