var mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        email: String,
        password: String,
        token: String
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema)