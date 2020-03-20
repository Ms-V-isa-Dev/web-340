/*
============================================
; Title:  Exercise 5.2 EJS Templates
; Author: Professor Krasso
; Date:   15 March 2020
; Modified by: Verlee Washington
; Description: Rendering views with EJS Templates
;===========================================
*/

// Required header
var header = require('./Washington-header.js');

// Required variables
var express=require("express");
var http=require("http");
var path=require("path");

// App functions
var app=express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// local princess array
var princesses=[
  "Tiana",
  "Merida",
  "Jasmine",
  "Belle",
  "Moana"
];


// routes
app.get('/', function(request, response){
  response.render("index",{
    names: princesses
  });
});


// create server
http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080!");
});
