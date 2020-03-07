
/*
============================================
; Title:  Exercise 3.2
; Author: Professor Krasso
; Date:   7 March 2020
; Modified by: Verlee Washington
; Description: Learning server logging through
; a third-party library.
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require ("morgan");
var app = express();


// Tell Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views"));

// Tell Express to use the EJS view engine
app.set("view engine", "ejs");

app.use(logger("dev"));

app.get("/", function(request, response) {
  response.render("index", {
    message:"I got the Morgan Logger Example and Bootstrap to work, woo hoo!!"
  });
});

// Create the http server and listen on a port
http.createServer(app).listen(3000, function() {
  console.log("Application started on port %s", 3000);
});

