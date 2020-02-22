/*
============================================
; Title:  Exercise 1.3
; Author: Professor Krasso
; Date:   21 February 2020
; Modified by: Verlee Washington
; Description: Common Js modules
;===========================================
*/

// Formatted header
var header = require('../Washington-header.js');

var url = require("url");

var parsedURL = url.parse("https://www.happyfeet.com/profile?name=Tillman");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);
