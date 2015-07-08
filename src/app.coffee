$ = require('jquery')
# uiData = require('../src/data/bridge-ios')

uiData = [{
    "styleName": "badge-large-style",
    "fontFamily": "Lato thin",
    "fontSize": "13pt"
  }, {
    "styleName": "badge-small-style",
    "fontFamily": "Lato bold",
    "fontSize": "9pt"
  }, {
    "styleName": "body-text-a-style",
    "fontFamily": "Lato normal",
    "fontSize": "16pt",
    "lineHeight": "18pt"
  }, {
    "styleName": "body-text-b-style",
    "fontFamily": "Lato normal",
    "fontSize": "15pt",
    "lineHeight": "20pt"
  }]

$ ->
  for style in uiData
    console.log(style.styleName)
    styleBlock = "
    <div class='rule' style='font-size: #{style.fontSize}'>
      <div>#{style.styleName}</div>
      <div class='family'>#{style.fontFamily}</div>
      <div class='size'>#{style.fontSize}</div>
    </div>"
    document.getElementById("bridge-style").innerHTML += styleBlock

    