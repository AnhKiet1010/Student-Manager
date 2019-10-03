var Teachers = require('../models/teachers.model');
var shortid = require('shortid');

module.exports.teacher = async function(req,res) {
	var teachers = await Teachers.find();
	res.render('teacher/index', {
		teachers: teachers,
		cookie: req.cookies
	});
};

module.exports.create = function(req,res) {
	res.render('./teacher/create', {
		cookie: req.cookies
	});
};

module.exports.postCreate = function(req,res) {
	var newTeacher = new Teachers(req.body);
	newTeacher.avatar = '/' + req.file.path.split('\\').slice(1).join('\\');
	newTeacher.save()
    .then(item => {
      res.redirect('/teacher', {
		cookie: req.cookies
	  });
    })
    .catch(err => {
      res.send("unable to save to database");
      return;
    });
}

module.exports.view = async function(req,res) {
	var id = req.params.id;
	var teacher = await Teachers.findById(id);
	res.render('teacher/view',{
		teacher,
		cookie: req.cookies
	})
}