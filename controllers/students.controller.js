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

module.exports.postCreate = async function(req,res) {
	console.log(req.body);

	await Students.add(req.body);
	res.redirect('/student');
}

