const mongoose = require('mongoose')

const User = mongoose.model('User', {
    email: String,
    name: String,
    user: String,
    phone: Number,
    bdage: Number,
    pass: String,
})


module.exports = User