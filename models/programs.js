const mongoose = require('mongoose');

const programSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    university: {
        type: String,
        unique: true,
        required: true
    },
    region: {
        type: String,
        required: true
    }
})

module.exports = programSchema;