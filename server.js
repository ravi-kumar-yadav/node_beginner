// server.js holds the code for servering HTTP requests

var http = require('http');
var url  = require('url');
var port = 3456;

function start(route, handle) {
	function onRequest(request, response){
		// for each request following code will be executed twice
		// fetch requested path from the request
		var pathname = url.parse(request.url).pathname;

		// due to subsequent call for "favicon.ico" file
		console.log("Request for " + pathname + " recieved");
		
		// calling router function for any routing task
		route(pathname, handle, response);
	}

	http.createServer(onRequest).listen(port);

	console.log("Server started at port " + port + "...");
}

exports.start = start;

