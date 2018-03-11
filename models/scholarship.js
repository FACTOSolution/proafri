const mongoose = require('mongoose')

const scholarshipSchema = mongoose.Schema({
    institution: {
        type: String,
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
})

module.exports = scholarshipSchema;