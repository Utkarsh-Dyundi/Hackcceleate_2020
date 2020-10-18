
var valid = 1;
var invalid = 0;

function chech_email(email){
	var regx = /^([a-zA-Z0-9\.-]+)@gmail.com/i;
	if(regx.test(email)) return valid;
	return invalid;
}

function check_name(name){
	var regx = /^([a-zA-Z]+)/i;
	if(regx.test(name)) return valid;
	return invalid;
}

function check_password(password){
	var regx = /^([a-zA-Z0-9@*#])/i;
	if(regx.test(password)) return valid;
	return invalid;
}

function check_username(username){
	var regx = /^([a-zA-Z0-9@*#\-])/i;
	if(regx.test(username)) return valid;
	return invalid;
}

function check_college(college){
	var regx = /^([a-zA-Z]+)/i;
	if(regx.test(college.trim())) return valid;
	return invalid;
}

function signin(req){
	if( check_email(req.body.email) && check_password(req..body.password)) return valid;
	return invalid;
}

function signup(req){
	var status=1;
	if( check_email(req.body.email) && check_password(req.body.password) && check_name(req.body.name) ) status=status;
	if(req.body.type=='teacher') status*=check_college(req.body.college);
	return invalid;
}