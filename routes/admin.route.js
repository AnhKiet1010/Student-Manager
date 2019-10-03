var express = require('express');

// validate
var validate = require('../validate/admin.validate');
var controller = require('../controllers/admin.controller');

var router = express.Router();

router.get('/', controller.login);

router.get('/signup' , controller.signup);

router.post('/signup' ,validate.postSignup, controller.postSignup);

router.post('/' ,validate.postLogin, controller.postLogin);

module.exports = router;