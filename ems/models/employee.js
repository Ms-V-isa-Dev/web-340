/*
============================================
; Title:  employee.js
; Author: Verlee Washington
; Date:   05 April 2020
; Description: File for the employee database model
;===========================================
*/

// Start program
// Require statements
var express=require("express");
var http=require("http");
var path=require("path");
var logger=require("morgan");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Define the employee schema
var EmployeeSchema = new Schema ({
  firstName:{type: String, required: true},
  lastName:{type: String, required: true }
});

// model
var employee = new Employee({
  firstName:"Susan",
  lastName: "Caster"
});

// Define the employee model
var Employee = mongoose.model("Employee", EmployeeSchema);

// Expose the employee to calling files
module.exports=Employee;

// Export model so that it is publicly available
module.exports = mongoose.model('Employee', EmployeeSchema);

// mLab connection
var mongoDB="mongodb+srv://admin:Isatest@buwebdev-cluster-1-qc6an.mongodb.net/test";
mongoose.connect(mongoDB,{
  useMongoClient: true
});

mongoose.Promise=global.Promise;

var db=mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function(){
  console.log("Application connected to mLab MongoDB instance");
});

// End program
