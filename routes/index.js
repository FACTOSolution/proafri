var express = require('express');
var router = express.Router();
const async = require('async');

const Program = require('../models/programs')

/* GET home page. */
router.get('/', function(req, res, next) {
  async.parallel({
    programsM: function(callback) {
      Program.find({degree: 'mr'})
        .exec(callback)
    },
    programsD: function(callback) {
      Program.find({degree: 'dc'})
        .exec(callback)
    }
  }, function(err, results) {
    if (err) { return next(err) }
    if (results.programsM == null && results.programsD == null) {
      var err = new Error('Nao foi achado nenhum programa');
      err.status = 404;
      return next(err);
    }
    var program = { mr: results.programsM, dc: results.programsD }
    res.render('candidate_form', { title: 'ProAfri',  programs: program });
  })
});

module.exports = router;
