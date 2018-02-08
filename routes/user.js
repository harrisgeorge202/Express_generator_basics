var express = require('express');
var router = express.Router();

// var ValidationController = require('./../controller/Validation')
var userController = require('./../controller/User');

router.post('/', userController.insert);

router.get('/:user_id', userController.select);

router.put('/:user_id', userController.update);

router.delete('/:user_id', userController.remove);

// router.put('/:rule_id/status', IotRulesController.updateActiveStatus);
// router.put('/:rule_id', ValidationController.isValidRuleName,
//                       IotRulesController.updateRule)
// router.delete('/:rule_id', IotRulesController.removeRule);

module.exports = router;