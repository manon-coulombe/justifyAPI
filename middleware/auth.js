const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    try {
        // Get the token sent to the header and remove the keyword 'Bear' with split methode
        const token = req.headers.authorization.split(' ')[1]
        // Verify methode decodes token
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET')
        // Extract userID from decoded token
        const userId = decodedToken.userId
        // Check if there is a userID in the request body, and throw an error if it doesn't matches with the one from the token
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID'
        } else {
            next()
        }

    } catch (error) {
        res.status(401).json({ error: error | 'Unauthenticated request' })
    }
}

module.exports = auth