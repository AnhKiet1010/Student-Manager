var Students = require('../models/students.model');
var shortid = require('shortid');

module.exports.student = async function(req,res) {
	var students = await Students.find();
	res.render('student/index', {
		students: students
	});
};

module.exports.search = async function(req,res) {
	var students = await Students.find();
	var q = req.query.q;
  	var matchedStus = students.filter(function(stu) {
    return stu.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  	});
  	res.render('student/index', {
    students: matchedStus
  });
};

module.exports.create = function(req,res) {
	res.render('./student/create');
};

module.exports.postCreate = function(req,res) {
	var newStudent = new Students(req.body);
	newStudent.avatar = '/' +  req.file.path.split('\\').slice(1).join('\\');
	newStudent.save()
    .then(item => {
      res.redirect('/student');
    })
    .catch(err => {
      res.send("unable to save to database");
      return;
    });
}

module.exports.view = async function(req,res) {
	var id = req.params.id;
	var student = await Students.findById(id);
	res.render('student/view',{
		student
	})
}

