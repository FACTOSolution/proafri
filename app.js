var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config.js');
var index = require('./routes/index');
var users = require('./routes/users');
var admins = require('./routes/admins');
var programs = require('./routes/programs');
var pdf = require('express-pdf');
const httpErrorPages = require('http-error-pages');

var app = express();
var Candidate = require('./models/candidate');

// MONGOOSE =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//mongoose.Promise = global.Promise;
mongoose.connect(config.mongo.url);
console.log("conf", config.mongo)
mongoose.connection.on('error', (err) => {
    console.log('Erro ao conectar ao banco: ', err);
});
mongoose.connection.on('open', () => {
    console.log('MongoDB, conexão estabelecida com sucesso.');
});
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'static')));

httpErrorPages.express(app, {
  lang: 'pt_BR',
  footer: 'ProAfri'
});

app.use(pdf)

app.use('/', index);
app.use('/users', users);
app.use('/admin', admins);
app.use('/programs', programs);

// secret
app.set('secret', config.secret);


module.exports = app;
