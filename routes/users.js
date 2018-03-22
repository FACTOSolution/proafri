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
        var DOC = parseInt(process.env.DOC);
        DOC += 1;
        process.env.DOC = DOC.toString();
        console.log(process.env.DOC)
        callback(null, Buffer.from(req.body.email + process.env.DOC).toString('base64').replace('/', '=') + '.pdf' );
      }   
  }),
  fileFilter: (req, file, callback) => {
      var ext = path.extname(file.originalname);
      if (ext !== '.pdf' && file.mimetype != "application/pdf"){
          return callback(new Error('Apenas PDFs são permitidos'), false);
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
router.post('/', function(req, res, next){
  req.body.programA = mongoose.Types.ObjectId(req.body.programA);
  req.body.programB = mongoose.Types.ObjectId(req.body.programB);
  var newCand = new Candidate(req.body);

  newCand.save((err) => {
    if(err){
      console.log(err);
      return res.status(500).json({success: false, message: err });
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
