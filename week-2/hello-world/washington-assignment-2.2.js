/*
============================================
; Title:  Exercise 2.2
; Author: Professor Krasso
; Date:   29 February 2020
; Modified by: Verlee Washington
; Description: Creating an application and
; running Node.js with Express
;===========================================
*/

// Formatted header
var header = require('./Washington-header.js');

// start program

var express = require('express');
var http = require('http');
var app = express();

app.use(function(request, response)
 {
  console.log("In comes a request to: %s", request.url);
  response.end("Hello World");
});

http.createServer(app).listen(8080, function()
{
  console.log("Application started on port %s", 8080);
});

// end program
