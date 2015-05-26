## Meedan UI Guide

We're designing some components in the browser.

This repo keeps track of them.

## How it works 

We're designing in the browser. To get started, install the dependencies and run the compiler.

In general, each component is a single template HTML file with a .dust extension.

## Installing dependencies

Most of the code we use is packaged with [NPM](https://www.npmjs.com/ "npm"). To install NPM dependencies you do this in the directory:

    npm install

This installs the tools listed in the file `package.json`.

    bower install

This installs the things listed in `bower.json`. 

Among our bower packages are checkdesk-style, meedan-style and bridge-style. Because `bower_components` is searched by node-sass when the stylesheets are parsed, you can import them like this in a stylesheet: `@import bridge-style/filename.scss`.

## Working locally

It's hosted on github pages. But, it's the local development environment that makes it easy to work with these little HTML prototypes.

We use a tool called gulp. Once you've done the previous steps, you should be able to do something like this:

    cd REPO_NAME
    gulp

That should start the compiler and open a browser to the homepage.

While the gulp compiler is running, edit the source files in `src/` and the web-ready files in `www` will be regenerated.

## Working with browserify 

[Browserify](https://www.npmjs.com/package/browserify) can help us bundle modules via NPM. 

- Install a cool npm module with `npm install --save-dev`
- Open app.js and `require` the npm module
- Run the bundler command to create bundle.js

    browserify -d src/app.js -o www/bundle.js -v

## WIP: Working with Bower components in Browserify 

Bower components are installed into `src/bower_components`. Run `bower install` to get these.  

The sass pulls from the bower_components directory directly. 

For example, say we want to use the burger component, which is installed with bower but not npm: 

    @import "../bower_components/burger/dist/scss/burger.scss";

The javascript is bundled in app.js: 

    var burger = require('burger');

## WIP: Browserify js continuously with watchify

Then we must bundle the js with a separate command. This command is not integrated with the build system yet, so you need to run it in a separate console: 

    `watchify -t debowerify -d src/app.js -o www/bundle.js -v`

Watchify will automatically parse the bower paths to create a bundle.js with all the bower libraries included.

See: [Debowerfiy on Github](https://github.com/eugeneware/debowerify).