var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var User = new Schema({
    first_name    : String,
    last_name     : String,
    email_id      : String,
    password      : String,
    age           : { type: Number,default:23 }
    
});

module.exports = mongoose.model('user', User);