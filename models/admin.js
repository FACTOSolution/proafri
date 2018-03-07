var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

AdminsSchema.methods.comparePass = function(pass){
    //compareHashHere(pass, this.hash_password);
}

module.exports = mongoose.model('AdminsSchema', AdminsSchema);