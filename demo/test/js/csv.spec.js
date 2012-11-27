var csv, expect;

require('better-require');

csv = require('../../src/coffee/csv.coffee');

expect = require('expect.js');

describe("csv.parse(data, delimiter=',')", function() {
  it("should parse single line CSV ('A, B, C, D, E')", function() {
    return expect(csv.parse('A, B, C, D, E')).eql([['A', 'B', 'C', 'D', 'E']]);
  });
  it("should parse multi line CSV ('A, B, C, D, E\\nF, G, H, I, J')", function() {
    return expect(csv.parse('A, B, C, D, E\nF, G, H, I, J')).eql([['A', 'B', 'C', 'D', 'E'], ['F', 'G', 'H', 'I', 'J']]);
  });
  it("should remove empty raw(line) in CSV ('A, B, C, D, E\\n\\nK, L, M, N, O')", function() {
    return expect(csv.parse('A, B, C, D, E\n\nK, L, M, N, O')).eql([['A', 'B', 'C', 'D', 'E'], ['K', 'L', 'M', 'N', 'O']]);
  });
  it("should remove comment in CSV ('A, B, C, D, E\\n#F, G, H, I, J\\nK, L, M, N, O')", function() {
    return expect(csv.parse('A, B, C, D, E\n#F, G, H, I, J\nK, L, M, N, O')).eql([['A', 'B', 'C', 'D', 'E'], ['K', 'L', 'M', 'N', 'O']]);
  });
  it("should keep empty column(item) in CSV ('A, B, , D, E,')", function() {
    return expect(csv.parse('A, B, , D, E,')).eql([['A', 'B', '', 'D', 'E', '']]);
  });
  return it("should parse with different delimiter ('A, B; C, D; E, F')", function() {
    return expect(csv.parse('A, B; C, D; E, F', ';')).eql([['A, B', 'C, D', 'E, F']]);
  });
});

describe("csv.parseFile(filename, encoding='utf-8', callback, delimiter=';')", function() {
  it("should parse CSV file (test/test.csv) with full arguments", function(done) {
    return csv.parseFile('test/test.csv', 'utf-8', function(raws) {
      expect(raws).eql([['A', 'B', 'C', 'D', 'E'], ['F', 'G', 'H', 'I', 'J'], ['K', 'L', 'M', 'N', 'O']]);
      return done();
    }, ',');
  });
  it("should parse CSV file (test/test.csv) with 3 arguments", function(done) {
    return csv.parseFile('test/test.csv', 'utf-8', function(raws) {
      expect(raws).eql([['A', 'B', 'C', 'D', 'E'], ['F', 'G', 'H', 'I', 'J'], ['K', 'L', 'M', 'N', 'O']]);
      return done();
    });
  });
  return it("should parse CSV file (test/test.csv) with 2 arguments", function(done) {
    return csv.parseFile('test/test.csv', function(raws) {
      expect(raws).eql([['A', 'B', 'C', 'D', 'E'], ['F', 'G', 'H', 'I', 'J'], ['K', 'L', 'M', 'N', 'O']]);
      return done();
    });
  });
});

describe("csv.parseFileSync(filename, encoding='utf-8', delimiter=';')", function() {
  it("should parse CSV file (test/test.csv) with full arguments", function() {
    var raws;
    raws = csv.parseFileSync('test/test.csv', 'utf-8', ',');
    return expect(raws).eql([['A', 'B', 'C', 'D', 'E'], ['F', 'G', 'H', 'I', 'J'], ['K', 'L', 'M', 'N', 'O']]);
  });
  it("should parse CSV file (test/test.csv) with 2 arguments", function() {
    var raws;
    raws = csv.parseFileSync('test/test.csv', ',');
    return expect(raws).eql([['A', 'B', 'C', 'D', 'E'], ['F', 'G', 'H', 'I', 'J'], ['K', 'L', 'M', 'N', 'O']]);
  });
  return it("should parse CSV file (test/test.csv) with 1 argument", function() {
    var raws;
    raws = csv.parseFileSync('test/test.csv');
    return expect(raws).eql([['A', 'B', 'C', 'D', 'E'], ['F', 'G', 'H', 'I', 'J'], ['K', 'L', 'M', 'N', 'O']]);
  });
});
