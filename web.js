var port = process.env.PORT;
var msg = "Hello Cloud9";
require("http").createServer(function (req, res) {
    res.writeHead(200);
    res.end(msg);
}).listen(port);

console.log("http://hellocloud9.jin7_kuramoto.c9.io");
