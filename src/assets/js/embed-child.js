/*jslint nomen: true, plusplus: true, todo: true, white: true, browser: true, indent: 2 */

// This happens on the child window
var Bridge = {};

(function($) {
  'use strict';

  // Alert parent window when the height changes
  var htmlHeight = 0;
  var checkHTMLHeight = function() {
    var height = document.getElementsByTagName('BODY')[0].offsetHeight;
    if (height !== htmlHeight) {
      htmlHeight = height;
      window.parent.postMessage(['setHeight', Bridge.milestone, htmlHeight].join(';'), '*');
    }
    setTimeout(checkHTMLHeight, 100);
  };
  
  var isElementOnViewPort = function(el, data) {
    var rect = el.getBoundingClientRect(),
        h = data[0], w = data[1], tp = data[2], left = data[3];
  
    return (
      rect.top + tp >= 0 &&
      rect.left + left >= 0 &&
      rect.bottom + tp <= h &&
      rect.right + left <= w
    );
  };
  
  if (!window.embedly) {
    window.embedly = function() {
      // Just avoid undefined errors
    };
  }

  var embedlyEventsAttached = false;

  var lazyLoad = function(data) {
    $('.bridgeEmbed__item-embedly-card').each(function() {
      var $that = $(this);
      if (!$that.hasClass('embedly-card') && isElementOnViewPort($that[0], data)) {
        $that.addClass('embedly-card');
        try {
          window.embedly('card', $that[0], function(e) {
            $(e.elem).attr('data-sid', e.sid);
            $that.parents('.bridgeEmbed__item').attr('id', 'item-' + e.sid);
          });
        }
        catch(e) {
          // Embedly is not ready
        }
      }
    });

    if (!embedlyEventsAttached) {
      window.embedly('on', 'card.rendered', function(iframe) {
        if (!jQuery.contains(document, iframe)) {
          $('#item-' + $(iframe).data('sid')).remove();
        }
      });
    }
  };
  
  var messageCallback = function(e) {
    var data = e.data.split(';'),
        type = data.shift();
  
    for (var i = 0; i < data.length; i++) {
      data[i] = parseInt(data[i], 10);
    }
  
    switch (type) {
      // Lazy load
      case 'lazyLoad':
        lazyLoad(data);
        break;
    }
  };
  
  var resizeOrScrollCallback = function() {
    var h = window.innerHeight || document.documentElement.clientHeight,
        w = window.innerWidth || document.documentElement.clientWidth,
        data = [h, w, 0, 0, 0, 0];
    lazyLoad(data);
  };
  
  if (!window.addEventListener) {
    window.attachEvent('onmessage', messageCallback);
    if (window === window.parent) {
      window.attachEvent('onscroll', resizeOrScrollCallback);
      window.attachEvent('onresize', resizeOrScrollCallback);
      window.attachEvent('onload', resizeOrScrollCallback);
    }
    window.attachEvent('onload', checkHTMLHeight);
  }
  else {
    window.addEventListener('message', messageCallback, false);
    if (window === window.parent) {
      window.addEventListener('scroll', resizeOrScrollCallback, false);
      window.addEventListener('resize', resizeOrScrollCallback, false);
      window.addEventListener('load', resizeOrScrollCallback, false);
    }
    window.addEventListener('load', checkHTMLHeight, false);
  }
}(jQuery));
