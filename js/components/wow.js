// Wow
var Wow = function() {
  'use strict';

  // Handle Wow
  var handleWow = function() {
    var wow = new WOW({
      
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile: true,       
        live:         true        // default
      
     
  	});
  	wow.init();
  }

  return {
    init: function() {
      handleWow(); // initial setup for Wow
    }
  }
}();

$(document).ready(function() {
  Wow.init();
});