var mongoose = require('mongoose')

const Product = new mongoose.Schema(
    {
        name: String,
        quantity: Number,
        price: Number
    },
    {
        timestamps: true
    },
    {
        versionKey: 1
    }
)

module.exports = mongoose.model('Product', Product)