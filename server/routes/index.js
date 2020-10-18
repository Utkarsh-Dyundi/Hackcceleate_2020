var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
	res.statusCode=200;
	res.setHeader('Content-type','text/js');
	res.sendFile('../client/src/index.js');
});

module.exports = router;
