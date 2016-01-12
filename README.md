# Meedan UI Guide

The Meedan UI Guide helps Meedanis develop UIs in the browser. 

## Install

* `git clone https://github.com/meedan/meedan-ui-guide.git`
* `bundle install`
* `bundle exec middleman`

This should start a local web server running at: `http://localhost:4567/`

Optionally you can run browser sync to try to improve your live-reloading of CSS: 

`browser-sync start --files="source/**/*" --proxy="localhost:4567" --no-notify`