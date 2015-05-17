var $ = require('jquery');
var configValue = '/* @echo FOO */' || 'default value';
var uiData = require('../src/data/bridge-ios');
var RELEASE_TAG = "123";

// This file is bundled with browserify
// 
//    browserify -d src/app.js -o www/bundle.js -v
// 
// To use browserify via watchify, with bower support:
// 
//    `watchify -t debowerify -d src/app.js -o www/bundle.js -v`

var $ = require('jquery');
var uiData = require('../src/data/bridge-ios');

$(document).ready(function () {

  for (var i = 0; i < uiData.length; i++) {
    var style = uiData[i];
    var styleBlock = "<div class='rule " + style.name + "'>" + "<h2>" + style.styleName + "</h2>" + "<div class='family'>" + style.fontFamily + "</div><div class='size'>" + style.fontSize + "</div>";
    document.getElementById("bridge-style").innerHTML += styleBlock;
    console.log("looped " + style.name);
  }
});