/*
============================================
; Title:  ems app
; Author: Verlee Washington
; Date:   05 April 2020
; Modified by:
; Description: Server file for the ems application
;===========================================
*/

// Require statements
var express=require("express");
var http=require("http");
var path=require("path");
var logger=require("morgan");
var mongoose=require("mongoose");
var bodyParser = require('body-parser');
var Employee = require("..\models\employee.js");

// Initializes the express application
var app=express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', process.env.PORT || 8080);

app.use(logger("short"));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', function(req, res) {
  Employee.find({}, function(err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);
      res.render('index', {
        title: 'EMS | Home',
        employees: employees
      })
    }
  });
});
app.get("/", function(request, response){
  response.render("index",{
    message: "Home page",
    title:"Home page"
  })
});

app.get("/about", function(request, response){
  response.render("index",{
    message: "About page"
  })
});

app.get("/contact", function(request, response){
  response.render("index",{
    message: "Contact us"
  })
});

http.createServer(app).listen(8080, function(){
  console.log("Applications started on port 8080!");
});
// End program


