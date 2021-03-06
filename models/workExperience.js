const mongoose = require('mongoose');

const workExperienceSchema = new mongoose.Schema({
    officeHolder: {
        type: String,
        required: true
    },
    employingInstitution: {
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
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = workExperienceSchema;