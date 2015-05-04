## Bridge UI

We're designing some bridge components in the browser.

This repo keeps track of them.

## How it works 

We're designing in the browser. To get started, install the dependencies and run the compiler.

In general, each component is a single template HTML file with a .dust extension.

An example component is a user profile pattern. So, there's one file called `src/profile.dust` and that compiles into `www/profile.html` which you can open and see on your phone.

There is an index of all of the "official" components of Bridge. 

## Installing bridge-ui dependencies

Most of the code we use is packaged with [NPM](https://www.npmjs.com/ "npm"). To install NPM dependencies you do this in the bridge-ui directory:

                npm install

This installs the tools listed in the file `package.json`.

## Working locally with bridge-ui

It's hosted on github pages. But, it's the local development environment that makes it easy to work with these little HTML prototypes.

We use a tool called gulp. Once you've done the `npm install` step, you should be able to do something like this:

                cd bridge-ui
                gulp

That will start the compiler for both the stylesheets ([Sass](sass-lang.com/)) and the HTML ([dust](http://akdubya.github.io/dustjs/ "dust") templates).

While the gulp compiler is running, edit the source files in `src/` and the web-ready files in `www` will be regenerated.

Read about it on the [Browserify homepage](https://www.npmjs.com/package/browserify)

## Working with browserify 

Browserify makes it easy to combine javascript modules via NPM. 

- Install a cool npm module with `npm install --save-dev`
- Open app.js and `require` the npm module
- Run the bundler command to create bundle.js

## Working with bower components in browserify 

Bower components are installed into `src/bower_components`. Run `bower install` to get these.  

The sass pulls from the bower_components directory directly. 

For example, say we want to use the burger component, which is installed with bower but not npm: 

        @import "../bower_components/burger/dist/scss/burger.scss";

The javascript is bundled in app.js: 

        var burger = require('burger');

## Using watchify

Then we must bundle the js with a separate command. This command is not integrated with the build system yet, so you need to run it in a separate console: 

        `watchify -t debowerify -d src/app.js -o www/bundle.js -v`

Watchify will automatically parse the bower paths to create a bundle.js with all the bower libraries included.

See: [Debowerfiy on Github](https://github.com/eugeneware/debowerify).