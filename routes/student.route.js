var express = require('express');
var multer  = require('multer');

var upload = multer({ dest: './public/uploads/' });

var controller = require('../controllers/students.controller');

var router = express.Router();

router.get('/', controller.student);

router.get('/create' , controller.create);

router.post('/create' ,upload.single('avatar'), controller.postCreate);

module.exports = router;

