var calc, expect, m;

if (!(typeof window !== "undefined" && window !== null)) {
  calc = require('../../src/js/calc.js');
  expect = require('expect.js');
}

m = Math.pow(10, -3);

describe('calc.gram(final, mass, volume) -> value', function() {
  it('should return 11.915 [g] for creating 50 [mL] of 1 [M] HEPES solution', function() {
    var value;
    value = calc.gram(1.0, 238.30, 50 * m) * 1000;
    value = Math.round(value) / 1000;
    return expect(value).to.be.equal(11.915);
  });
  return it('should return 14.611 [g] for creating 50 [mL] of 5 [M] NaCl solution', function() {
    var value;
    value = calc.gram(5.0, 58.442, 50 * m) * 1000;
    value = Math.round(value) / 1000;
    return expect(value).to.be.equal(14.611);
  });
});

describe('calc.volume(final, molar, volume) -> value', function() {
  it('should return 2.5 [mL] for creating 50 [mL] of 50 [mM] Tris solution with 1 [M] Tris', function() {
    var value;
    value = calc.volume(50 * m, 1.0, 50 * m) * 100000;
    value = Math.round(value) / 100000;
    return expect(value).to.be.equal(2.5 * m);
  });
  return it('should return 1.5 [mL] for creating 50 [mL] of 150 [mM] NaCl solution with 5 [M] NaCl', function() {
    var value;
    value = calc.volume(150 * m, 5.0, 50 * m) * 100000;
    value = Math.round(value) / 100000;
    return expect(value).to.be.equal(1.5 * m);
  });
});
