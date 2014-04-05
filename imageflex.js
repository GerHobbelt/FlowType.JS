/*
* Imageflex.js, forked from flowtype.js
* 
*
* Imageflex.js by Kyle Lillie and FlowType.JS by Simple Focus (http://simplefocus.com/)
* is licensed under the MIT License. Read a copy of the
* license in the LICENSE.txt file or at
* http://choosealicense.com/licenses/mit
*
* Thanks to Giovanni Difeterici (http://www.gdifeterici.com/)
*/

(function($) {
   $.fn.imageflex = function(options) {

// Establish default settings/variables
// ====================================
      var settings = $.extend({
         screenMax   : 9999,
         screenMin   : 1,
         maxSize   : 9999,
         minSize   : 1,
         sizeRatio : 25
      }, options),

// Do the magic math
// =================
      changes = function(el) {
         var $el = $(el),
            elw = $el.width(),
            width = elw > settings.screenMax ? settings.screenMax : elw < settings.screenMin ? settings.screenMin : elw,
            fontBase = width / settings.sizeRatio,
            fontSize = fontBase > settings.maxSize ? settings.maxSize : fontBase < settings.minSize ? settings.minSize : fontBase;
         $el.css('height', fontSize + '%');
      };
// Make the magic visible
// ======================
      return this.each(function() {
      // Context for resize callback
         var that = this;
      // Make changes upon resize
         $(window).resize(function(){changes(that);});
      // Set changes on load
         changes(this);
      });
   };

}(jQuery));
