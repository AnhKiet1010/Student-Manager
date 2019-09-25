var Students = require('../models/students.model');
var shortid = require('shortid');

module.exports.student = async function(req,res) {
	var students = await Students.find();
	res.render('student/index', {
		students: students
	});
};

module.exports.create = function(req,res) {
	res.render('./student/create');
};

module.exports.postCreate = function(req,res) {
	var newStudent = new Students(req.body);
	newStudent.avatar = req.file.path.split('\\').slice(1).join('\\');
	console.log(newStudent);
	newStudent.save()
    .then(item => {
      res.redirect('/student');
    })
    .catch(err => {
      res.send("unable to save to database");
      return;
    });
}

