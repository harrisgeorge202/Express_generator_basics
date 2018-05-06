var mongoose = require('mongoose');

// var userController = require('./../controller/User');


var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    // var message = JSON.parse(fields);

var User = new Schema({
    message    : String,
    Subject     : String,
    email_id      : String,
    password      : String,
    age           : { type: Number,default:23 }
    
});

module.exports = mongoose.model('user', User);