var express = require('express');
var router = express.Router();

var user_detailscontroller = require('./../controller/User');


router.post('/',user_detailscontroller.insert);

module.exports = router;
