const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {

    try {
        console.log('erreur 0');
        console.log(req.headers.authorization);
        const token = req.headers.authorization.split(' ')[1]
        console.log('erreur 1');
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET')
        console.log('erreur 2');
        const userId = decodedToken.userId
        console.log('erreur 3');
        if (req.body.userId && req.body.userId !== userId) {
            console.log('erreur 4');
            throw 'Invalid user ID'
        } else {
            console.log('erreur 5');
            next()
        }

    } catch (error) {
        console.log('test erreur');
        res.status(401).json({ error: error | 'Requête non authentifiée !' })
    }
}

module.exports = auth