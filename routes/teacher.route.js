var express = require('express');
var multer  = require('multer');

var upload = multer({ dest: './public/uploads/' });

// validate
var validate = require('../validate/teacher.validate');
var controller = require('../controllers/teacher.controller');

var router = express.Router();

router.get('/', controller.teacher);

router.get('/create' , controller.create);

router.get('/:id' , controller.view);

router.post('/create' ,upload.single('avatar'),validate.postCreate, controller.postCreate);

module.exports = router;