const mongoose = require('mongoose')

const Course = mongoose.model('Course', {
    name: String,
    description: String,
    link: String,
})


module.exports = Course