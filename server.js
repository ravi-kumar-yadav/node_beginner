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

		// store all data received from multiple Post chunks
		var postData = "";
		request.setEncoding("utf8");

		request.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
			console.log("Received POST data chunk: " + postDataChunk + " of size: " + postDataChunk.length);
		});

		// calling router function for any routing task
		request.addListener("end", function(){
			route(pathname, handle, response, postData);
		});
	}

	http.createServer(onRequest).listen(port);

	console.log("Server started at port " + port + "...");
}

exports.start = start;
