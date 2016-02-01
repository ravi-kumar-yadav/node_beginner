var exec = require("child_process").exec;

var seconds = 2;

function start(response){
	console.log("Request handler 'start' was called");

	var body = 	'<html>'+
								'<head>'+
									'<meta http-equiv="Content-Type" content="text/html; '+
									'charset=UTF-8" />'+
								'</head>'+
								'<body>'+
									'<form action="/upload" method="post">'+
										'<textarea name="text" rows="20" cols="60"></textarea>'+
										'<br/> <br/>' +
										'<input type="submit" value="Submit text" />'+
									'</form>'+
								'</body>'+
							'</html>';
	response.writeHead({"Content-Type":"text/plain"});
	response.write(body);
	response.end();
}

function upload(response, postData){
	console.log("Request handler 'upload' was called");
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("You have sent data: " + postData + " of size: " + postData.length);
	response.end();
}

exports.start = start;
exports.upload = upload;
