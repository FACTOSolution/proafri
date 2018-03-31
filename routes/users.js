var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const path = require('path')
const multer = require('multer');
const upload = multer({
  storage: multer.diskStorage({
      destination: (req, file, callback) => {
          callback(null, './public/');
      },
      filename: (req, file, callback) => {
        var issuedAt = new Date().getTime();
        callback(null, file.originalname + issuedAt + '.pdf' );
      }   
  }),
  fileFilter: (req, file, callback) => {
      var ext = path.extname(file.originalname);
      if (ext !== '.pdf' && file.mimetype != "application/pdf"){
          req.fileValidationError = 'Apenas PDFs são permitidos';
          return callback(null, false, new Error('Apenas PDFs são permitidos'));
      }
      callback(null, true);
  }
})

var FileCandidate = require('../models/fileCandidate');
var Candidate = require('../models/candidate');


/**
 * Add a File to server
 */
router.post('/upload_pdf', upload.single('pdf'), function(req, res, next) {
  var newFile = new FileCandidate({
    name: req.file.filename,
    path: req.file.path,
  })
  newFile.save((err, pdf) => {
    if(err){
      console.log(err);
      return res.status(500).json({success: false, message: "Erro no upload do pdf"});
    } else {
      return res.status(200).json({success: true, message: "Arquivo inserido com sucesso.", id: pdf._id });
    }
  })
})

/**
 * Check if email is already in database
 */
router.get('/check/:email', function(req, res, next) {
    Candidate.find({ $or: [ { email: req.params.email }, { email2: req.params.email }]}, (err, candidates) => {
      if(err) { return next(err) }
      if(!candidates.length) {
        return res.status(200).json({ success: true, message: "Esse email não foi cadastrado antes" })
      } else {
        return res.status(500).json({ success: false, message: "Esse email já está sendo usado" });
      }
    })
})

/**
 * Add a candidate to mongo
 */
router.post('/', upload.single('pdf'), function(req, res, next){

  if(req.fileValidationError) {
    return res.render('candidate_form', { type: 'error', message: req.fileValidationError })
  }
  
  var programA = req.body.programA.split(':')
  var programB = req.body.programB.split(':')

  var tel = { 'mobile': req.body.telMovel, 'fixed': req.body.telFixed }
  var passport = { 'number': req.body.passportNumber, 'country': req.body.passportCountry, 'expirationDate': req.body.passportExpirationDate}

  var newCand = new Candidate({
      country: req.body.country,
      name : req.body.name,
      address : req.body.address,
      email : req.body.email,
      email2 : req.body.email2,
      tel : tel,
      gender : req.body.gender,
      dob : req.body.dob,
      passport : passport,
      civilState : req.body.civilState,
      programA : programA[0],
      programB : programB[0]
  });
  var newFile = new FileCandidate({
    name: req.file.filename,
    path: req.file.path,
  })
  newFile.save((err, pdf) => {
    if(err){
      console.log(err);
      return res.render('candidate_form', { type:"error", message: "Apenas arquivos PDFs são permitidos"});
    } else {
      newCand.pdf = pdf._id;    
      newCand.save((err) => {
        if(err){
          console.log(err);
          return res.render('candidate_form', { type:"error", message: "Erro no cadastro, algum campo requerido faltando. Para maiores explicações entre em contato com o GCUB"});
          // res.render('confirmation', {
          //   title: "Failure",
          //   message: "Erro no cadastro algum campo requerido faltando."
          // });
        }else{
          return res.render('candidate_form', { type:"success", message: "Candidato inscrito com sucesso"});
          // res.render('login', {
          //   title: "Success",
          //   message: "Adicionado com sucesso."
          // });
        }
      });
    }
  })

});

module.exports = router;
