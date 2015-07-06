$ = require('jquery')
uiData = require('../src/data/bridge-ios')

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
    