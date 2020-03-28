
// Require statements
var express=require('express');
var mongoose=require('mongoose');
var http=require('http');
var logger=require('morgan');

var mongoDB='mongodb+srv://admin:Isatest@buwebdev-cluster-1-qc6an.mongodb.net/test';
mongoose.connect(mongoDB, {
  useMongoClient: true
});

mongoose.Promise=global.Promise;

var db=mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function(){
  console.log("Application connected to mLab MongoDB instance");
});

var app=express();
app.use(logger('dev'));

http.createServer(app).listen(3000, function(){
  console.log('Application started and listening on port 3000');
})


