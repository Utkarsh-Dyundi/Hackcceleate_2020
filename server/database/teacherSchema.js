const mongoose = require('mongoose');
const teacherSchema = new mongoose.Schema({
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
		required:true,
	},
	courses:{
		type:[{string:date}],
		required:false,
	},
	updated:{
		type:[date],
		default:date.now,
	},
	education:{
		type:string,
		required:true,
	},
	college:{
		type:string,
		required:true,
	},
});

mongoose.model('teacher',teacherSchema);