const mongoose = require('mongoose')

const standupSchema = new mongoose.Schema({
    duration: Number,
    passed: {
        minutes: Number,
        seconds: Number
    },
    note: String
})

module.exports = mongoose.model('Standup', standupSchema)