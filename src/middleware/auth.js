const { fail } = require("../helpers/response");
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (token === undefined) {
        const msg = fail("Unauthorized.", 401);
        res.status(401).json(msg);
        return;
    }

    jwt.verify(req.headers.authorization.split(' ').pop(), process.env.TOKEN_KEY, (err, decoded) => {
        if (err) {

            console.log({ err })
            console.log(err.name)
            console.log(err.expiredAt)

            const msg = fail(err.message, 401);
            res.status(401).json(msg);
            return;
        }

        return next()
    });
}

module.exports = verifyToken