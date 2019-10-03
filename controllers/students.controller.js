var Students = require('../models/students.model');
var shortid = require('shortid');

module.exports.student = async function(req,res) {
	var students = await Students.find();
	res.render('student/index', {
		students: students,
		cookie: req.cookies
	});
};

module.exports.search = async function(req,res) {
	var students = await Students.find();
	var q = req.query.q;
  	var matchedStus = students.filter(function(stu) {
    return stu.name.toLowerCase().indexOf(q.toLowerCase()) !== -1 || stu.namej.indexOf(q) !== -1;
  	});
  	res.render('student/index', {
	students: matchedStus,
	cookie: req.cookies
  });
};

module.exports.create = function(req,res) {
	res.render('./student/create',{
		cookie: req.cookies
	});
};

module.exports.postCreate = function(req,res) {
	var newStudent = new Students(req.body);
	newStudent.avatar = '/' +  req.file.path.split('\\').slice(1).join('\\');
	newStudent.save()
    .then(item => {
      res.redirect('/student', {
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
	var student = await Students.findById(id);
	res.render('student/view',{
		student,
		cookie: req.cookies
	})
}

