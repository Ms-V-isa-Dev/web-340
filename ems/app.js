/*
============================================
; Title:  ems app
; Author: Verlee Washington
; Date:   29 March 2020
; Modified by:
; Description: Putting it all together with
; the ems application.
;===========================================
*/
var express=require("express");
var http=require("http");
var path=require("path");
var logger=require("morgan");

var app=express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

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
})
