var mongoose = require('mongoose');

var studentSchema  = new mongoose.Schema({
	name: String,
	country: String,
	age: Number,
	avatar: String,
	email: String
});

var Students = mongoose.model('Students', studentSchema, 'students');

module.exports = Students;