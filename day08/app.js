var http = require('http');
var fs = require('fs');

var index = fs.readFileSync('./index.html', 'utf-8');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-type': 'text/html'});
	res.end(index);
});

// socket.io module
var io = require('socket.io').listen(server);

io.on('connection', function(socket) {
	// console.log('Connected with the id: ' + socket.id);
	// sends message for a specific client
	// emit('EventName', 'Can be an Object');
	socket.emit('welcomeEventName', 'Hallo SuckIt.io.user : ');
	socket.on('boo', function(data) {
		console.log("A new customer is connected" + data.id);
	});

	// To broadcast the message from the user
	socket.broadcast.emit('eventToAll', function() {
		
	});
});

server.listen(3000, function() {
	console.log('I suck it on port 3000');
});