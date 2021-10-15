
const db = require('../../../config/firedatabase');
const { ref, set, update, onValue, get, child, remove } = require('firebase/database');
const { success, fail } = require('../../../helpers/response')

const index = async (req, res, next) => {
    const response = ref(db, 'categories');

    onValue(response, (snapshot) => {
        res.json(success(snapshot.val(), "Data successfully retrieved!"))
    });

}

const store = async (req, res, next) => {

    const newCategoryName = new Date().getTime()
    const categoryRef = ref(db, `categories/${newCategoryName}`)

    await set(categoryRef, {
        name: req.body.name,
        color: 'Dark',
        quantity: req.body.quantity
    })

    await update(categoryRef, {
        color: 'Yellow'
    })

    res.json(success(req.body.name, "Data successfully stored!"))
}

const show = async (req, res, next) => {
    try {
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, `categories/${req.params.id}`));

        if (!snapshot.exists()) {
            res.status(404).json(fail("Data you're looking does not found!", 404))
        } else {
            res.json(success(snapshot.val(), "Data successfully retrieved!"))
        }

    } catch (error) {
        res.status(404).json(fail("Data you're looking does not found!", 404))
    }
}

const patch = () => {

}

const destroy = async (req, res, next) => {
    try {
        await remove(ref(db, `/categories/${req.params.id}`))
        res.status(200).json(success(req.params.id, "Data successfully deleted!"))
    } catch (error) {
        res.status(400).json(fail("Failed to delete data!", 400))
    }
}

module.exports = {
    index,
    store,
    show,
    patch,
    destroy
}