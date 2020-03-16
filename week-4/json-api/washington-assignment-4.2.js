/*
============================================
; Title:  Exercise 4.2
; Author: Professor Krasso
; Date:   14 March 2020
; Modified by: Verlee Washington
; Description: Creating APIs and managing
; them with json.
;===========================================
*/

// Start program
var express=require('express');
var logger=require ("morgan");
var path=require('path');
var http=require('http');

// Register app
var app = express();

// Setup logger
app.use(logger('dev'));

// Create get request and pass in an id
app.get("/customer/:id", function(req, res){
  var id =parseInt(req.params.id, 10);
  res.json({
    firstName: 'Lisa',
    lastName: 'Wheatley',
    employeeId: id
  });
});

// Output
http.createServer(app).listen(3000, function(){
  console.log("The application has started on port 3000");
});

// End program
