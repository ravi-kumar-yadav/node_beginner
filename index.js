// main file to execute program
// index.js will call sub-modules to run program

var server = require("./server");
var router = require("./router");

server.start(router.route);

