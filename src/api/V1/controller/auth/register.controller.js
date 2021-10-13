const User = require('../../../../model/user.model')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { success, fail } = require('../../../../helpers/response')

const register = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    if (!(first_name && last_name && email)) {
        const msg = fail("All input is required", 404);
        res.status(400).json(msg);
        return;
    }

    const oldUser = await User.findOne({ email });
    if (oldUser) {
        const msg = fail("User Already Exist. Please Login", 401);
        res.status(401).json(msg);
        return;
    }

    const enryptPassword = await bcryptjs.hash(password, 10)

    const user = new User({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: enryptPassword
    })

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

    user.save();
    user.token = token

    const msg = success(user, "Data successfully saved!");
    res.json(msg);
    return;
}

module.exports = {
    register
}