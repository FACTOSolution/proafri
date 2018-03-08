const argon2 = require('argon2');
const salt = Buffer.alloc(16, 'olofmeister57')
const readline = require('readline');
const Admin = require('../models/admin');
const mongoose = require('mongoose');
const config = require('../config.js')
const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

mongoose.connect(config.mongo.url);
console.log("conf", config.mongo)
mongoose.connection.on('error', (err) => {
    console.log('Erro ao conectar ao banco: ', err);
});
mongoose.connection.on('open', () => {
    console.log('MongoDB, conexão estabelecida com sucesso.');
});


console.log("Usage: <name> <password> <university>");

rd.on('line', (line) => {
    var attr = line.split(' ');
    console.log('att', attr);
    if(attr.length != 3) throw new Error("Arguments falt");
    argon2.hash(attr[1], {salt}).then(hash => {
        console.log('Successfully created Argon2 hash:', hash);
        var adm = {
            name: attr[0],
            hash_password: hash,
            university: attr[2]
        };
        console.log('Adm mounted: ', adm);
        var newAdmin = new Admin(adm);
        newAdmin.save((err) => {
            if(err) console.log("Error on create adm");
            else{
                console.log("Created with success!");
                process.exit(0);
            }

        })
    });
});

