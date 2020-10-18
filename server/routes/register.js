const express = require('express');
const authRouter = express.Router();
const pushData = require('./database/pushData');


authRouter.route('/sign-up')
.all( (req,res,next) => {
	res.statusCode = 200;
	res.setHeader('Content-Type','text/html');
	next();
})
.post( (req,res,next) => {
	var response = validate.singup(req);
	if(response >0) response=pushData(req);
	res.send(response);
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