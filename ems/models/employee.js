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
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the employee schema
let EmployeeSchema = new Schema ({
  firstName:{type: String, required: true},
  lastName:{type: String, required: true }
});

//define the employee model
const Employee = mongoose.model("Employee", EmployeeSchema);

// Export model so that it is publicly available
module.exports = mongoose.model('Employee', EmployeeSchema);

// End program
