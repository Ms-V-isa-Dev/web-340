/*
============================================
; Title:  Exercise 7.3
; Author: Professor Krasso
; Date:   4 April 2020
; Modified by: Verlee Washington
; Description: Demonstrating how to create
; a chai test.
;===========================================
*/

// Required header
//const header=require("..\Washington-header.js");


var fruits = require("../washington-fruits");

var chai = require("chai");
var assert = chai.assert;

describe("fruits", function(){
  it("should return an array of fruits", function(){
    var f = fruits('Apple,Orange,Mango');
    assert(Array.isArray(f));
  });
});
