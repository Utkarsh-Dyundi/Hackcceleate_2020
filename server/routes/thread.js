var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.statusCode=200;
	res.setHeader('Content-type','text/js');
	// fetching the reply of current thread.
});

module.exports = router;