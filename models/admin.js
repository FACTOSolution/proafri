var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var argon = require('argon2');

const AdminsSchema = new Schema({
    name: String,
    hash_password: {
        type: String,
        require: true
    },
    university: {
        type: String,
        require: true
    }
});

AdminsSchema.methods.verify = function(passwd, callback){
    //compareHashHere(pass, this.hash_password);
    argon.verify(this.hash_password, passwd).then(match => {
        if(match){
            console.log("Senha valida");
            return callback(true);
        }else{
            console.log("Senha invalida :(");
            return callback(false);
        }
    }).catch(err => {
        console.log(err);
    });
}

module.exports = mongoose.model('Admins', AdminsSchema);