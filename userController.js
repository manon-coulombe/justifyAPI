const User = require('./models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.test = (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.status(200).send('<h1>Test<h1>')
}

exports.register = async (req, res, next) => {
        // password hashing function
        const hPassword = await bcrypt.hash(req.body.password, 10)
        const createUser = await new User({
            email: req.body.email,
            password: hPassword
        })
    
        if (createUser) {
            res.status(200).json({
                'message': 'Utilisateur créé'
            })
            createUser.save()
        } else {
            res.status(400).json({
                'error': 'Erreur'
            })
        }
}

exports.login = async (req, res, next) => {

    const findUser = await User.findOne({
        email: req.body.email
    })
    if (findUser) {
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
                message: "Mot de passe incorrect !"
            });
        }
    } else {
        res.status(401).json({
            error: 'Utilisateur non trouvé !'
        });
    }
}