const User = require('../../../../model/user.model')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { success, fail } = require('../../../../helpers/response')

const login = async (req, res) => {

    const { email, password } = req.body

    if (!(email && password)) {
        const msg = fail("All input is required", 409);
        res.status(409).json(msg);
        return;
    }

    const user = await User.findOne({ email });
    if (!user) {
        const msg = fail("Email not registered!", 404);
        res.status(404).json(msg);
        return;
    }

    const compare = await bcryptjs.compare(password, user.password)
    if (!compare) {
        const msg = fail("Invalid Credentials!", 400);
        res.status(400).json(msg);
        return;
    }

    const token = jwt.sign(
        {
            user_id: user._id,
            email: email
        },
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h"
        }
    )

    const msg = success({
        token: token,
        expiry: jwt.decode(token, process.env.TOKEN_KEY).exp
    }, "Login success!");

    res.json(msg);
    return;
}

module.exports = {
    login,
}