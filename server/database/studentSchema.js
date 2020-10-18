const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
	name:{
		type:string,
		required:true,
	},
	email:{
		type:string,
		required:true,
	},
	password:{
		type:string,
		required:true,
	},
	mobile:{
		type:number,
		required:false,
	},
	registered_courses:{
		type:[{string:date}],
		required:false,
	},
	completed_courses:{
		type:[{string:date}],
		required:false,
	},
	updated:{
		type:[date],
		default:date.now,
	}
});

mongoose.model('student',studentSchema);