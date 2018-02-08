var mongoose = require('mongoose');
var userDB = mongoose.model('user');
var user_detailsDB = mongoose.model('user_details');

module.exports = {

    insert: function(req, res) {
        // console.log("Enter iot_actions =========================>>>>>>>>>>>>>>")
        var userObj = new userDB({
            first_name    : req.body.first_name,
            last_name     : req.body.last_name,
            email_id      : req.body.email_id,
            password      : req.body.password
                 
        })

    userObj.save(function(err) {
            if(err) {
                return res.status(500).json({ status: false, message: 'Database error'})
            } else {
                console.log("actionObj =================>>>>>>>>>>>>>>>>>")
                var user_detailsObj = new user_detailsDB({
                    user_id          : userObj._id,
                    user_address     : req.body.user_address,
                    user_salary      : req.body.user_salary,
                });
                
                user_detailsObj.save(function (err) {
                    if (err) {
                        return res.status(500).json({status: false, message: "Database error"})
                    } else {
                
             return res.status(200).json({ status: true, message: 'Id inserted', data: user_detailsObj })
            }
        })
    }
})
    },


    // {
    //     "first_name"    : "req.body.first_name",
    //                 "last_name"     : "req.body.last_name",
    //                 "email_id"      : "req.body.email_id",
    //                 "password"      : "pass",
    //     "user_address"     : "req.body.user_address",
    //                         "user_salary      : req.body.user_salary"
    //     }

    select: function(req, res) {
        // console.log("Enter select actions ===================>>>>>>>>>>>>>>>")
        userDB.find({ first_name: req.params.first_name},{first_name:1,email_id:1})
        .exec(function(err, actions) {
            if(err) {
                return res.status(500).json({ status: false, message: 'Database error'})
            } else {
                // console.log("actions selected ========================>>>>>>>>>>>>")
                // console.log(actions)
                return res.status(200).json({ status: true, message: 'Actions fetched', data: actions})
            }
        })
    },

    update: function(req, res) {
    userDB.findOneAndUpdate({_id: req.params.user_id,}, 
        { $set: { first_name: req.body.name ,last_name: req.body.lname} },{new:true},
        function (err, rule) {
            if (err) {return res.status(400).json(err)} 
            else {
                return res.status(200).json({status: true,message: "Rule status updated",data: rule})
            }
        })
    },


    remove: function (req, res) {
        // console.log("enter inside delete =============>>>>>>>>")
        // console.log("req.params :::::::::::::::::")
        // console.log(req.params)
        userDB.findOne({ _id: req.params.user_id }).remove(function (err, rule) {
            if (err) {
                return res.status(400).json({ status: false, message: 'Databse error', data: err })
            } 
            else 
            {
                return res.status(200).json({ status: true, message: 'Rule Removed' })
            }
        })
    },

}
