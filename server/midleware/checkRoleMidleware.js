const jwt = require('jsonwebtoken')
module.exports = function (role) {
    return function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                res.status(401).json({message : 'Користувач не пройшов авторизацію'})
            }
            const decoder = jwt.verify(token, process.env.SECRET_KEY)
            if (decoder.role !== role) {
                 res.status(403).json({message : 'Немає доступу'})
            }
            req.user = decoder
            next()
        } catch (error) {
            res.status(401).json({message : 'Користувач не пройшов авторизацію'})
        }
    
}
}