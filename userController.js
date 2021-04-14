// Imports
const bcrypt = require('bcrypt') // Bcrypt is a library used to safely store passwords
const jwt = require('jsonwebtoken') // JWT generates unique security tokens
const User = require('./models/userModel')
const justifyTxt = require('./justify')

// Function register, create a new user with User Model and save it to DB
exports.register = async (req, res, next) => {
        // Password hashing function
        const hPassword = await bcrypt.hash(req.body.password, 10)
        const createUser = await new User({
            email: req.body.email,
            password: hPassword
        })
    
        if (createUser) {
            res.status(200).json({
                'message': 'User created'
            })
            createUser.save()
        } else {
            res.status(400).json({
                'error': 'Error'
            })
        }
}

// Function token, generates a token access for a registred user
exports.token = async (req, res, next) => {

    // Checking if there is an email address corresponding 
    const findUser = await User.findOne({
        email: req.body.email
    })
    if (findUser) {
        // Checking if the password sent correspond to the one stored and send the Token if everything is OK
        if (await bcrypt.compare(req.body.password, findUser.password) == true) {
            res.status(200).json({
                userId: findUser._id,
                token: jwt.sign(
                    { userId: findUser._id },
                    "RANDOM_TOKEN_SECRET", 
                    { expiresIn: "24h" }
                )
            });
        } else {
            res.status(401).send({
                message: "Wrong password !"
            });
        }
    } else {
        res.status(401).json({
            error: 'User not found !'
        });
    }
}

exports.justify = (req, res, next) => {
    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send('<h1>Justify<h1>')
    console.log('justify');
    /*
    @TODO récupérer le texte passé en paramètre de la requête (req.body) et le passer en argument de la fonction justifyTxt
    retourner le résultat justifié dans res.body
    */
}