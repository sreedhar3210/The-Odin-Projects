
var express = require('express');
var app = express();

const port = 8080;

var connectedFunction = function (){
    console.log("connected to the port " + port + " succesfully");
}

app.get('/*', function (req, res) {
    var outputHtml;
    if(req.url == '/')                   outputHtml = '/index.html';
    else if(req.url == '/about')         outputHtml = '/about.html';
    else if(req.url == '/contact-me')    outputHtml = '/contact-me.html';
    else                                 outputHtml = '/404.html';
    res.sendFile(__dirname + outputHtml);
})

app.listen(8080,connectedFunction);