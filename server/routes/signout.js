const express = require('express');
const authRouter = express.Router();

authRouter.route('/sign-out')
.all( (req,res,next) => {
	res.statusCode = 200;
	res.setHeader('Content-Type','text/html');
	next();
})
.delete( (req,res,next) => {
	res.clearCookie('email');
	res.sendFile(index.js);
})
.put( (req,res,next) => {
	res.end('ERROR: request method not supported');
})
.get( (req,res,next) => {
	res.end('ERROR: request method not supported');
})
.post( (req,res,next) => {
	res.end('ERROR: request method not supported');
});

module.exports = authRouter;