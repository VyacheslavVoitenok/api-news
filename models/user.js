const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    email: {
		type: String,
		validate: {
			validator(link) {
				return validator.isEmail(link);
			},
		},
		required: true,
		unique: true,
    },
    password: {
		type: String,
		required: true,
		minlength: 8,
		select: false,
    },
    name: {
        type: String,
		minlength: 2,
		maxlength: 30,
		required: true,
    }
});