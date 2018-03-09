const express = require('express');
const router = express.Router();
const Candidate = require('../models/candidate');
const Admin = require('../models/admin');
const Users = require('../models/candidate');
const jwt = require('jsonwebtoken');
const config = require('../config.js');
const app = express();

/* GET users listing. */
app.set('secret', config.secret);

/**
 *  Middleware
 */
router.use(function(req, res, next){
    let token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies['token'];
    console.log("Token ", token);
    if(token){
        jwt.verify(token, app.get('secret'), function(err, decoded){
            if(err) {
                res.rendirect('/');
                //return res.json({success: false, message: 'Token invalido.'});
            }
            else{
                req.auth = true;
                console.log("Authenticated, Token ok");
                next();
            }
        });
    }else{
        console.log("Not authenticated");
        req.auth = false;
        next();
    }
});

/**
 * Returns the login page of admin
 */
router.get('/', function(req, res, next) {
    res.render('login', {
        title: "LOGIN",
        message: "Pagina de login"
    });
});

/**
 * Lists all inscribers
 * Send a page with all inscribers objects
 */
router.get('/page', function(req, res, next){
  if(req.auth == true){
    Users.find({}, function(err, users){
        if(err) console.log(err);
        if(!users){
          /*  
          res.json({
            success: true,
            data: {users: []}
          });
          */
         res.render('listCandidates', {
             title: "Pagina com todos os cadidatos",
             message: "Nenhum usuario",
             data: []
         });
        } else{
            res.render('listCandidates', {
                title: "Pagina com todos os cadidatos",
                message: "Todos os usuarios",
                data: users
            });
        }
      });
  }else{
    res.render('index', {
        title: "Login",
        message: "Usuário nao autenticado",
    });
  }
});

/**
 * Login
 * username - password
 */
router.post('/', function(req, res){
    if(req.auth == false){
        Admin.findOne({
            name: req.body.name
        }, function(err, admin){
            if(err) console.log(err);
            if(!admin){
                res.render('login', {
                    title: "Login",
                    message: "Usuário nao cadastrado",
                });
//                res.json({success: false, message: "Usuário não encontrado"});

            }else{
                return admin.verify(req.body.password, function(bool){
                    if(bool){
                        console.log("Autenticação ok, redirecionando... para /admin/page");
                        // res.header('token', jwt.sign({
                        //         _id: admin._id,
                        //         name: admin.name
                        //     }, app.get('secret'), {expiresIn: 60*30}));
                        res.cookie('token',  jwt.sign({
                            _id: admin._id,
                            name: admin.name
                        }, app.get('secret'), {expiresIn: 60*30}));
                        res.redirect('/admin/page');
                        /*
                        return res.json({
                            success: true,
                            message: 'Login feito com sucesso',
                            token: jwt.sign({
                                _id: admin._id,
                                name: admin.name
                            }, app.get('secret'), {expiresIn: 60*30})
                        });
                        */
                    }else{
                        res.render('login', {
                            title: "Login",
                            message: "Wrong password",
                        });
                        //return res.json({success: false, message: "Wrong password"});
                    }
                })
            }
        });
    }else{
        // Redirect to /admin/page
        console.log("Redirect actived");
        res.redirect('/admin/page');
    }
});


module.exports = router;