var express = require('express');
var multer  = require('multer');

var upload = multer({ dest: './public/uploads/' });

// validate
var validate = require('../validate/student.validate');
var controller = require('../controllers/students.controller');

var router = express.Router();

router.get('/', controller.student);

router.get('/search' , controller.search);

router.get('/create' , controller.create);

router.get('/:id' , controller.view);

router.post('/create' ,upload.single('avatar'),validate.postCreate, controller.postCreate);

module.exports = router;

