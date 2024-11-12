var http = require('http');
var fs = require('fs');

const port = 8080;
var httpFunction = function (req,res) {
    var displayFile = '';
    if(req.url == '/')                      displayFile='index.html';
    else if(req.url == '/about')            displayFile='about.html';
    else if(req.url == '/contact-me')       displayFile='contact-me.html';
    else                                    displayFile='404.html';
    fs.readFile(displayFile, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write("Internal Server Error");
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
    });
}

var connectedFunction = function (){
    console.log("connected to the port " + port + " succesfully");
}
var server = http.createServer(httpFunction);

server.listen(8080,connectedFunction);