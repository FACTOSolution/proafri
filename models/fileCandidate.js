const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    path: {
        type: String,
        //unique: true,
        required: true
    }
})

const FileCandidate = mongoose.model('FileCandidate', fileSchema)

module.exports = FileCandidate;