const mongoose = require('mongoose');

const programSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    university: {
        type: String,
        //unique: true,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        enum: ['mr', 'dc'],
        required: true
    }
})

const Program = mongoose.model('Program', programSchema)

module.exports = Program;