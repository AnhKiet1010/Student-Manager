var mongoose = require('mongoose');

var studentSchema  = new mongoose.Schema({
	name: String,
	namej: String,
	country: String,
	age: Number,
	jlpt: String,
	avatar: String,
	email: String,
});

var Students = mongoose.model('Students', studentSchema, 'students');

module.exports = Students;