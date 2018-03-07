var express = require('express');
var router = express.Router();
var Candidate = require('../models/candidate');
// var User = require('../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', function(req, res, next){
  console.log("BODY ", req.body);
  
  var newCand = new Candidate(req.body);
  
  newCand.save((err) => {
    if(err){
      console.log(err);
      return res.json({success: false, message: "Erro no cadastro algum campo requerido faltando. "});
    }
    res.json({
      success: true, 
      message: "Adicionado com sucesso."
    });
  });
  // Make some thing 
  // res.render('podepah', { title: 'SOh', message: 'Guardian > Fallen' });
  //res.json({ title: 'SOh', message: 'Guardian > Fallen' });
});

module.exports = router;
