# Meedan UI Guide

The Meedan UI Guide helps Meedanis develop UIs in the browser.

Goal: A prototyping environment that requires little setup and (most importantly) does lightning fast CSS/HTML/JS injection when working.

## Install & run

Dependencies are installed with NPM. 

Gulp manages the build. 

Browsersync handles livereloading.

* `git clone https://github.com/meedan/meedan-ui-guide.git && cd meedan-ui-guide`
* `npm install`
* `gulp`

This should start a local web server running at: `http://localhost:6997/`

## Cross-browser testing

The console will also indicate an IP address that you can open on other devices. Use it! The page will refresh with each change, and stay in sync with tap events in the main browser!

## Todos

- Enhancement: Automatically import the latest stylesheets — for now do something like `cp -R ~/git/check-app/check-web/src/app/styles ~/git/meedan-ui-guide/src/styles/$(date +%Y-%m-%d)-check-styles` and update the import statement in `prototype.scss` appropriately.
- Bug: Child templates (that are @@included) do not always automatically refresh the page for some reason — for now you have to save the _parent_ or _grandparent_ HTML page to trigger a refresh.
- Bug: images are not automatically copied from `src` to `www`. Run `gulp build` to copy them over.