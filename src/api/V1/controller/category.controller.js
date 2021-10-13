const { success, fail } = require('../../../helpers/response')

const index = async (req, res, next) => {

    const msg = success([], "Data successfully retrieved!");
    res.json(msg)
    return;
}

module.exports = {
    index
}