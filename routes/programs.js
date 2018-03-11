var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Program = require('../models/programs')

router.get('/:degree', function(req, res, next) {
    Program.find({ degree: req.params['degree'] }, function(err, programs) {
        if(err) { return next(err); }
        res.status(200).json(programs)
    })
})

module.exports = router;