const { fail } = require("../helpers/response");
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (token === undefined) {
        const msg = fail("Unauthorized.", 401);
        res.status(401).json(msg);
        return;
    }

    try {
        const decoded = jwt.verify(req.headers.authorization.split(' ').pop(), process.env.TOKEN_KEY);
        console.log(decoded)

        return next();
    } catch (error) {
        console.log({ error })
        const msg = fail("Unauthorized.", 401);
        res.status(401).json(msg);
        return;
    }

}

module.exports = verifyToken