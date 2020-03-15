/*
============================================
; Title:  Exercise 4.3
; Author: Professor Krasso
; Date:   15 March 2020
; Modified by: Verlee Washington
; Description: Creating and setting HTTP
; status codes.
;===========================================
*/

// Start program
var express = require("express");
var logger = require ("morgan");
var http = require("http");

// Register app
var app = express();

// Setup logger
app.use(logger('dev'));


// Create get request using status codes
app.get("/not-found", function(request, response){
  response.status(404);
  response.json({
    error:"The resource you are looking for is not here."
  })
});

app.get("/ok", function(request, response){
  response.status(200);
  response.json({
    message:"This page loaded well."
  })
});

app.get("/not-implemented", function(request, response){
  response.status(501);
    response.json({
      error:"This page has not been implemented."
    });
});

// Output
http.createServer(app).listen(8080, function(){
  console.log("Application started and is listening on port 8080!");
});

// End program

