/*
============================================
; Title:  Exercise 7.2
; Author: Professor Krasso
; Date:   4 April 2020
; Modified by: Verlee Washington
; Description: Demonstrating how to create
; TDD unit test.
;===========================================
*/

// Required header
//const header=require("..\Washington-header.js");

var assert=require("assert");

describe("String#split", function(){
  it("should return an array of fruits", function(){
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});


