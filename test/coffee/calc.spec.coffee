if not window?
  calc = require '../../src/js/calc.js'
  expect = require 'expect.js'

m = Math.pow(10, -3)

describe 'calc.gram(final, mass, volume) -> value', ->
  it 'should return 11.915 [g] for creating 50 [mL] of 1 [M] HEPES solution', ->
    # HEPES = 238.30 g/mol
    value = calc.gram(1.0, 238.30, 50 * m) * 1000
    value = Math.round(value) / 1000
    expect(value).to.be.equal(11.915)

  it 'should return 14.611 [g] for creating 50 [mL] of 5 [M] NaCl solution', ->
    # NaCl = 58.442 g/mol
    value = calc.gram(5.0, 58.442, 50 * m) * 1000
    value = Math.round(value) / 1000
    expect(value).to.be.equal(14.611)

describe 'calc.volume(final, molar, volume) -> value', ->
  it 'should return 2.5 [mL] for creating 50 [mL] of 50 [mM] Tris solution with 1 [M] Tris', ->
    value = calc.volume(50 * m, 1.0, 50 * m) * 100000
    value = Math.round(value) / 100000
    expect(value).to.be.equal(2.5 * m)

  it 'should return 1.5 [mL] for creating 50 [mL] of 150 [mM] NaCl solution with 5 [M] NaCl', ->
    value = calc.volume(150 * m, 5.0, 50 * m) * 100000
    value = Math.round(value) / 100000
    expect(value).to.be.equal(1.5 * m)
