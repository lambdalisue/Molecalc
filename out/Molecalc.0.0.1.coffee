gram = (final, mass, volume) ->
  return final * volume * mass

volume = (final, molar, volume) ->
  return final / molar * volume

if not exports?
  exports = window.calc = {}

exports.gram = gram
exports.volume = volume
