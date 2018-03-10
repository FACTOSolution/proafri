var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

var Candidate = require('../models/candidate');

/**
 * Add a candidate to mongo
 */
router.post('/', function(req, res, next){
  req.body.programA = mongoose.Types.ObjectId(req.body.programA);
  req.body.programB = mongoose.Types.ObjectId(req.body.programB);
  var newCand = new Candidate(req.body);

  newCand.save((err) => {
    if(err){
      console.log(err);
      return res.status(500).json({success: false, message: "Erro no cadastro algum campo requerido faltando. "});
      // res.render('confirmation', {
      //   title: "Failure",
      //   message: "Erro no cadastro algum campo requerido faltando."
      // });
    }else{
      return res.status(200).json({success: true, message: "Candidato inserido com sucesso."});
      // res.render('login', {
      //   title: "Success",
      //   message: "Adicionado com sucesso."
      // });
    }
  });
});

module.exports = router;
