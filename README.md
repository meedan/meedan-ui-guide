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

