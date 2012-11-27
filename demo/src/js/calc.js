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
