const mongoose = require('mongoose');

const academicHistorySchema = new mongoose.Schema({
    degreeObtained: { 
        type: String, 
        required: true 
    },
    institution: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    average: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    study: {
        type: String,
        required: true
    },
    programName: {
        type: String,
        required: true
    }
});

module.exports = academicHistorySchema;