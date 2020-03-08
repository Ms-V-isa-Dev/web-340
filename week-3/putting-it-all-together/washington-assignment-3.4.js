/*
============================================
; Title:  Exercise 3.4
; Author: Professor Krasso
; Date:   7 March 2020
; Modified by: Verlee Washington
; Description: Demonstration of putting it all
; together.
;===========================================
*/

var express=require("express");
var http=require("http");
var path=require("path");
var logger=require("morgan");
var app=express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));

app.get("/", function(request, response){
  response.render("index",{
    message:"home page"
  });
});

app.get("/about",function(request, response){
  response.render("about",{
    message:"about page"
  });
});

app.get("/contact",function(request, response){
  response.render("contact",{
    message:"contact page"
  });
});

app.get("/products",function(request, response){
  response.render("products",{
   message:"products page"
  });
});

http.createServer(app).listen(3000, function(){
  console.log("Application started on port 3000.");
});
