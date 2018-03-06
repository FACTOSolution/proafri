const mongoose = require('mongoose');

const paperSchema = new mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Date, required: true }
});

module.exports = paperSchema