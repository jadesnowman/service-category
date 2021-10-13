const { success, fail } = require('../../../../helpers/response')

const logout = async (req, res) => {

    // The JWT is stored on browser, so remove the token deleting the cookie at client side
    // USE THIS PACKAGE jwt-redis

    const msg = fail("Sorry can't logout your account!", 401);
    res.status(401).json(msg);
    return;
}

module.exports = {
    logout,
}