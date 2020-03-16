
/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   15 March 2020
; Modified by: Verlee Washington
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/

var express = require("express");
var http = require("http");

var app = express();

app.get("/", function(req, res){
  res.send("You just sent a GET request, good work.");
});

app.put("/", function(req, res){
  res.send("I have not seen many PUT request.");
});

app.post("/", function(req, res){
  res.send("A POST request? Well done.");
});


app.delete("/", function(req, res){
  res.send("Oh my, a DELETE request");
});

http.createServer(app).listen(8080, function() {
  console.log("Application started and is listening on port 8080!");
});
