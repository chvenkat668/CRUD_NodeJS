'use strict';

var mongoose = require('mongoose');

var userModel = function() {
	var userSchema = mongoose.Schema({
		uid: Number,
		username: String,
		password: String,
		email: String
	});

	return mongoose.model('User', userSchema);
}

module.exports = new userModel();
