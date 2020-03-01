/*
============================================
; Title:  Exercise 2.3
; Author: Professor Krasso
; Date:   29 February 2020
; Modified by: Verlee Washington
; Description: Mapping request with routes.
;===========================================
*/

// Formatted header
var header = require('./Washington-header.js');

// start program
var express = require("express");
var http = require("http");
var app = express();

app.get("/", function(request, response)
{
  response.end("Welcome to the homepage!");
});

app.get("/about",function(request, response)
{
  response.end("Welcome to the about page!");
});

app.get("/contact",function(request, response)
{
  response.end("Welcome to the contact page!");
});

app.use(function(request, response)
{
  response.statusCode = 404;
  response.end("404!");
});

http.createServer(app).listen(3000, function()
  {
    console.log("Application started on port %s", 3000);

  });

  // end program
