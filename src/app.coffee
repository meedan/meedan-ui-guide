$ = require('jquery')
uiData = require('../src/data/bridge-ios')

$ ->
  for style in uiData
    style = uiData[i]
    styleBlock = "<div class='rule' style='font-size: #{style.fontSize}'><h2>{style.styleName}</h2><div class='family'>{style.fontFamily}</div><div class='size' #{style.fontSize}</div>"

document.getElementById("bridge-style").innerHTML += styleBlock

console.log(style.name)