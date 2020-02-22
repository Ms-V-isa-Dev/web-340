/*
============================================
; Title:  Exercise 1.5
; Author: Professor Krasso
; Date:   21 February 2020
; Modified by: Verlee Washington
; Description: Running a node.js server
;===========================================
*/

// Formatted header
var header = require('../Washington-header.js');

// Start program
//Variable declaration:

var http = require("http");

function processRequest(req, res) {

var body = "This threw a syntax error in console debug mode so the webpage would not run.";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);
