// load fs(filesystem) module
var fs = require("fs");
var parser = require("./parser.js");

// Read contents of file into memory
// following callback is called when complete file read operation is done
fs.readFile('example_log.txt', function(err, logData){
	// if error occurs
	if (err) {
		throw err;
	}

	// logData is Buffer(Array of bytes), convert it to string
	var text = logData.toString().trim();

	parser.parse(text);
});
