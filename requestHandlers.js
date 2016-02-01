var exec = require("child_process").exec;

var seconds = 2;

function start(response){
	console.log("Request handler 'start' was called");

	// fire 'sleep' command to see the Asynchronous nature of Node.js
	exec("sleep " + seconds, function(error, stdout, stderr) {
		response.writeHead(200, {"Content-Type":"text/plain"});
		response.write("Slept for " + seconds + " sec..");
		response.end();
	});
}

function upload(response){
	console.log("Request handler 'upload' was called");
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("Hello Upload");
	response.end();
}

exports.start = start;
exports.upload = upload;

