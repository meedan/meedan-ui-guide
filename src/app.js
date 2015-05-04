var _screenfull = require('screenfull'); // the bower component
var domready = require('domready'); // a regular browserify npm component

domready(function () {
  var button = document.getElementById('fullscreen');
  button.addEventListener('click', function (evt) {
    // screenfull adds itself to window.screenfull - but we can get to it
    if (screenfull.enabled) {
      screenfull.toggle(this);
    }
  });
});