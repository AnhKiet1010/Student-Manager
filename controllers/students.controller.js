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
	newStudent.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
	res.redirect('/student');
}

