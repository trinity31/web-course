var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = {
	//route level middleware
	requireAuthentication: function(req, res, next) { 
		console.log('private route hit!');
		next();
	},
	logger: function(req, res, next) {
		console.log('[' + new Date().toString() + '] Request: ' + req.method + '' + req.originalUrl);
		next();
	}
};

app.use(express.static(__dirname + '/public'))
// console.log(__dirname);

app.listen(PORT, function() {
	console.log('Express server started, port = ' + PORT);
});