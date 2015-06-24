# $ = require('jquery')
# uiData = require('../src/data/bridge-ios')

# $ ->
#   for style in uiData
#     style = uiData[i]
#     styleBlock = "<div class='rule' style='font-size: #{style.fontSize}'><h2>{style.styleName}</h2><div class='family'>{style.fontFamily}</div><div class='size' #{style.fontSize}</div>"

# document.getElementById("bridge-style").innerHTML += styleBlock

# console.log(style.name)
require('./bower_components/timesheet.js/dist/timesheet.js')

console.log(Timesheet);

new Timesheet('timesheet', 2002, 2013, [
      ['2002', '09/2002', 'A freaking awesome time', 'lorem'],
      ['06/2002', '09/2003', 'Some great memories', 'ipsum'],
      ['2003', 'Had very bad luck'],
      ['10/2003', '2006', 'At least had fun', 'dolor'],
      ['02/2005', '05/2006', 'Enjoyed those times as well', 'ipsum'],
      ['07/2005', '09/2005', 'Bad luck again', 'default'],
      ['10/2005', '2008', 'For a long time nothing happened', 'dolor'],
      ['01/2008', '05/2009', 'LOST Season #4', 'lorem'],
      ['01/2009', '05/2009', 'LOST Season #4', 'lorem'],
      ['02/2010', '05/2010', 'LOST Season #5', 'lorem'],
      ['09/2008', '06/2010', 'FRINGE #1 & #2', 'ipsum']
    ]); 