var mongoose = require('mongoose');

var teacherSchema  = new mongoose.Schema({
	name: String,
	namej: String,
	age: Number,
	avatar: String,
	email: String,
	couse: String
});

var Teachers = mongoose.model('Teachers', teacherSchema, 'teachers');

module.exports = Teachers;