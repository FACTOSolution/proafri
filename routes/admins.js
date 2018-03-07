var express = require('express');
var router = express.Router();
var Candidate = require('../models/candidate');
var Admin = require('../models/admins');
var Users = require('../models/users');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('send the admin page');
});

router.get('/list', function(req, res, next){
  // Falta a autenticacao
  // if(req.auth == true)
  Users.find({}, function(err, users){
    if(err) console.log(err);
    if(!users){
      res.json({
        success: true,
        data: {users: []}
      });
    } else{
      res.json({
        success: true,
        data: {
          users: users
        }
      });
    }
  });
});

router.post('/login', function(req, res, next){
  res.json({success: "false", message:"not logged"});
});


module.exports = router;