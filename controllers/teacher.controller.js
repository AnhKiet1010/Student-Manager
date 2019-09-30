var Teachers = require('../models/teachers.model');
var shortid = require('shortid');

module.exports.teacher = async function(req,res) {
	var teachers = await Teachers.find();
	res.render('teacher/index', {
		teachers: teachers
	});
};

module.exports.create = function(req,res) {
	res.render('./teacher/create');
};

module.exports.postCreate = function(req,res) {
	var newTeacher = new Teachers(req.body);
	newTeacher.avatar = req.file.path.split('\\').slice(1).join('\\');
	newTeacher.save()
    .then(item => {
      res.redirect('/teacher');
    })
    .catch(err => {
      res.send("unable to save to database");
      return;
    });
}