var express = require('express');
var router = express.Router();
var user_controller = require('../controller/user_controller');
/* GET home page. */
router.get('/', user_controller.register);
router.get('/register_action', user_controller.register_action);

module.exports = router;
