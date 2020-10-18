const express = require('express');
const suthorise = require('../database/authorise');
var validate = require('../validation/authvalidate');
var authRouter = express.Router();

authRouter.route('/')
.all( (req,res,next) => {
	res.statusCode = 200;
	res.setHeader('Content-Type','text/html');
	next();
})
.post( (req,res,next) => {
	var response = validate.signin(req);
	if(response>0){
		res.json(authorise);
	}
	else{
		res.end(response);
	}
})
.put( (req,res,next) => {
	res.end('ERROR: request method not supported');
})
.get( (req,res,next) => {
	res.end('ERROR: request method not supported');
})
.delete( (req,res,next) => {
	res.end('ERROR: request method not supported');
});



module.exports = authRouter;


