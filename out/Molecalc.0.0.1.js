/**
 * Molecalc 0.0.1
 *
 * Author:  lambdalisue
 * URL:     http://hashnote.net/
 * License: MIT License
 *
 * Copyright (C) 2012 lambdalisue, hashnote.net all right reserved.
 */
(function() {
  var exports, gram, volume;

  gram = function(final, mass, volume) {
    return final * volume * mass;
  };

  volume = function(final, molar, volume) {
    return final / molar * volume;
  };

  if (!(typeof exports !== "undefined" && exports !== null)) {
    exports = window.calc = {};
  }

  exports.gram = gram;

  exports.volume = volume;

}).call(this);
