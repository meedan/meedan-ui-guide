(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Burger is a bower component installed with `bower install burger`
// But we want to bundle it so we use the debundleify module when we run browserify 
// eg using: `watchify -t debowerify -d src/app.js -o www/bundle.js -v`
var burger = require("./bower_components/burger/dist/scripts/burger.min.js");
},{"./bower_components/burger/dist/scripts/burger.min.js":2}],2:[function(require,module,exports){
!function(){"use strict";var e=document.body,n=document.getElementsByClassName("burger-contain")[0],t=document.getElementsByClassName("burger-nav")[0],s=document.getElementsByClassName("burger-brand")[0];n.addEventListener("click",function(){[e,n,t,s].forEach(function(e){e.classList.toggle("open")})},!1)}();
},{}]},{},[1]);
