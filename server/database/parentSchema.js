const mongoose = require('mongoose');
const parentSchema = new mongoose.Schema({
	name:{
		type:string,
		required:true,
	},
	email:{
		type:string,
		required:true,
		unique:true,
	},
	password:{
		type:string,
		required:true,
	},
	mobile:{
		type:number,
		required:false,
	},
	childrens:{
		type:[string],
	},
	updated_profile:{
		type:[date],
		default:date.now,
	}
});

mongoose.model('parent',parentSchema);