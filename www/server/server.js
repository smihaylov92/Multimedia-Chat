var express = require('express'),
	server = express();

var port = process.env.PORT || 8079;

var io = require('socket.io').listen(server.listen(port));

// require('./config')(server, io);
// require('./routes')(server, io);

console.log('Your application is running on http://localhost:' + port);