// server.js holds the code for servering HTTP requests

var http = require('http');
var port = 3456;

function start() {
	function onRequest(request, response){
		// for each request following code will be executed twice
		// due to subsequent call for "favicon.ico" file
		console.log("Request recieved");
		response.writeHead(200, {"Content-Type":"text/plain"});
		response.write("Hello World!!!");
		response.end();
	}

	http.createServer(onRequest).listen(port);

	console.log("Server started at port " + port + "...");
}

exports.start = start;

