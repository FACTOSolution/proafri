const mongoose = require('mongoose'); require('mongoose-type-email');
const crate = require('mongoose-crate');
const localFS = require('mongoose-crate-localfs');

const Paper = require('./papers');
const WorkExperience = require('./workExperience');
const AcademicHistory = require('./academicHistory');
const Program = require('./programs');

const candidateSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true,
    },
    tel: {
        mobile: { type: String, required: true },
        fixed: { type: String, required: true }
    },
    gender: {
        type: String,
        enum: ['masculino','feminino','outros']
    },
    dob: {
        type: Date,
        required: true
    },
    civilState: {
        type: String,
        required: true
    },
    passport: {
        number: { type: String, required: true },
        country: { type: String, required: true },
        expirationDate: { type: Date, required: true }
    },
    language: {
        native: { type: String, required: true },
        foreign: [String]
    },
    languageExamPoints: {
        toefl: { type: Number },
        others: mongoose.SchemaTypes.Mixed
    },
    impairment: {
        isImpairment: { type: Boolean },
        impairmentDetail: { type: String },
        needs: { type: String }
    },
    papers: [Paper],
    workExperience: [WorkExperience],
    academicHistory: [AcademicHistory],
    programA: { type: Program, required: true },
    programB: { type: Program, required: true }
})

candidateSchema.plugin(crate, {
    storage: new localFS({
        directory: '../public'
    }),
    fields: {
        attachment: {}
    }
})

module.exports = mongoose.model('Candidate', candidateSchema);