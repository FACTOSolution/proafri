const mongoose = require('mongoose'); require('mongoose-type-email');
const shortid = require('shortid');
const AutoIncrement = require('mongoose-sequence')(mongoose)

const Paper = require('./papers');
const WorkExperience = require('./workExperience');
const AcademicHistory = require('./academicHistory');
const ScholarShips = require('./scholarship')
const Program = require('../models/programs')

const candidateSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    regId: {
        type: String,
        'default': shortid.generate
    },
    regNumber: {
        type: Number
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
        unique: true
    },
    email2: {
        type: String,
    },
    tel: {
        mobile: { type: String, required: true },
        fixed: { type: String, required: true }
    },
    gender: {
        type: String,
        enum: ['masculino','feminino','outros'],
        required: true
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
        native: { type: String },
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
    scholarships: [ScholarShips],
    programA: { 
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Program',
        required: true
     },
    programB: { 
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Program',
        required: true
    },
    pdf: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'FileCandidate',
        required: true
    }
    
})

candidateSchema.statics.findByProgram = function(program, callback) {
    var query = this.find()

    Program.find({ university: program }, function (err, programs) {
        query.where({ $or: [ { programA: { $in: programs } } ], $or: [ { programB: { $in: programs } } ] })
            .exec(callback)
    })
    return query;
}

candidateSchema.plugin(AutoIncrement, { inc_field: 'regNumber' })

module.exports = mongoose.model('Candidate', candidateSchema);