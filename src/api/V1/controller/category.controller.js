
const db = require('../../../config/firedatabase');
const { ref, set, update, onValue } = require('firebase/database');
const { success, fail } = require('../../../helpers/response')

const index = async (req, res, next) => {
    const response = ref(db, 'categories/');

    onValue(response, (snapshot) => {
        res.json(success(snapshot.val(), "Data successfully retrieved!"))
        return;
    });
}

const store = async (req, res, next) => {

    const newCategoryName = new Date().getTime()
    const categoryRef = ref(db, `/categories/${newCategoryName}`)

    await set(categoryRef, {
        name: req.body.name,
        color: 'Dark',
        quantity: req.body.quantity
    })

    await update(categoryRef, {
        color: 'Yellow'
    })

    res.json(success(req.body.name, "Data successfully stored!"))
    return;
}

module.exports = {
    index,
    store
}