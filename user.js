const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const userSchema   = new Schema({
    firstname: String,
    lastname: String,
    sex:String,
    age: Number,
    passowrd:Number
},{collection:'users'});

module.exports = mongoose.model('User', userSchema);