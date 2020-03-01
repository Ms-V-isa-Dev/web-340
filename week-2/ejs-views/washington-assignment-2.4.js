
/*
============================================
; Title:  Exercise 2.4
; Author: Professor Krasso
; Date:   29 February 2020
; Modified by: Verlee Washington
; Description: Using ejs and view engine
;===========================================
*/

var header = require('./Washington-header.js');

// start program
var http = require("http");
var express = require("express");
var path = require("path");
var app = express();

// Tell express the views are in the 'views' directory
app.set("views", path.resolve(_dirname, "views"));

// Tell Express to use the EJS view engine
app.set("view engine", "ejs");

app.get("/", function(request, response)
{
  response.render("index",
  {
    firstName: "William",
    lastName: "Spokes",
    address: "2300 Curb Street, New Haven NM, 06954"
  });
});

http.createServer(app).listen(8080, function()
{
  console.log("EJS-Views app started on port 8080.");
});

<nav class = "navbar navbar-expand-sm bg-dark navbar-dark">
  <ul class = "navbar-nav">
    <li class = "nav-item active">
    <a href="#">Home</a>
    </li>

    <li class = "nav-item">

    </li>

    <li class = "nav-item">
      <a href="#">Contact Us</a>
    </li>
  </ul>
</nav>

<div role="main" class="container">
  <br/><br/>
  <h2>EJS Views Example</h2>

  <div class="row">
  <div class="col-12"></div>
    <div class="alert alert-success" role="alert">
      <strong>Message:</strong>
      <span><%= message %></span>
    </div>
  </div>
</div>
