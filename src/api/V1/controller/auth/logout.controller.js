const { success, fail } = require('../../../../helpers/response')

const logout = async (req, res) => {

    const msg = fail("Sorry can't logout your account!", 401);
    res.status(401).json(msg);
    return;
}

module.exports = {
    logout,
}