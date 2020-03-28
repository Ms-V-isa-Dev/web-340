/*
============================================
; Title:  Exercise 6.3
; Author: Professor Krasso
; Date:   27 March 2020
; Modified by: Verlee Washington
; Description: Creating and using Mongoose and
; MongoDB
;===========================================
*/

// Required header no longer registering
//var header=require('..\Washington-header.js');

// Require statements
var express=require('express');
var mongoose=require('mongoose');
var http=require('http');
var logger=require('morgan');

// Specify our database connection and pass in the connection string
var mongoDB='mongodb+srv://admin:Isatest@buwebdev-cluster-1-qc6an.mongodb.net/test';
mongoose.connect(mongoDB, {
  useMongoClient: true
});

mongoose.Promise=global.Promise;

// Database variable
var db=mongoose.connection;

// General error handling
db.on("error", console.error.bind(console, "MongoDB connected error: "));

// Output
db.once("open", function(){
  console.log("Application connected to mLab MongoDB instance");
});

// Creat our express server
var app=express();
app.use(logger('dev'));


// Create http server and pass in an app
http.createServer(app).listen(3000, function(){
  console.log('Application started and listening on port 3000');
})


