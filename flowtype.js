/*
* FlowType.JS v1.1
* Copyright 2013-2014, Simple Focus http://simplefocus.com/
*
* FlowType.JS by Simple Focus (http://simplefocus.com/)
* is licensed under the MIT License. Read a copy of the
* license in the LICENSE.txt file or at
* http://choosealicense.com/licenses/mit
*
* Thanks to Giovanni Difeterici (http://www.gdifeterici.com/)
*/

(function($) {
  $.fn.flowtype = function(options) {

    // Establish default settings/variables
    // ====================================
    var settings = $.extend({
      delay     : 250,
      fontRatio : 35,
      maxFont   : 9999,
      maximum   : 9999,
      minFont   : 1,
      minimum   : 1
    }, options),

    // Do the magic math
    // =================
    changes = function(el) {
      var $el = $(el),
        elw = $el.width(),
        width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
        fontBase = width / settings.fontRatio,
        fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
      $el.css('font-size', fontSize + 'px');
    },

    // Debounce recalculation of fontSize
    // =================
    debounce = function (fn, delay) {
      var timer = null;
      return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
          fn.apply(context, args);
        }, delay);
      };
    };

    // Make the magic visible
    // ======================
    return this.each(function() {
      // Context for resize callback
      var that = this;
      // Make changes upon `resize` and `orientationchange`.
      $(window).on('resize orientationchange', debounce(function(){
        changes(that);
      }, settings.delay));
      // Set changes on load
      changes(this);
    });
  };
}(jQuery));
