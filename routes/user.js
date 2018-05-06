var express = require('express');
var router = express.Router();

// var ValidationController = require('./../controller/Validation')
var userController = require('./../controller/User');

router.post('/sms', userController.insert);

module.exports = router;