var mongoose = require('mongoose');
//var userDB = mongoose.model('user');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var User_details = new Schema({
       
        user_id          : { type: ObjectId, ref: 'user' },
        user_address     : String,
        user_salary      : { type: Number,default:10000 }
    
});

module.exports = mongoose.model('user_details', User_details);