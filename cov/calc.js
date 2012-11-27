if (typeof __$coverObject === "undefined"){
	if (typeof window !== "undefined") window.__$coverObject = {};
	else if (typeof global !== "undefined") global.__$coverObject = {};
	else throw new Error("cannot find the global scope");
}
var __$coverInit = function(name, code){
	__$coverObject[name] = {__code: code}
}
var __$coverInitRange = function(name, range){
	__$coverObject[name][range] = 0;
}
var __$coverCall = function(name, range){
	__$coverObject[name][range]++;
}
__$coverInit("src/js/calc.js", "var exports, gram, volume;\n\ngram = function(final, mass, volume) {\n  return final * volume * mass;\n};\n\nvolume = function(final, molar, volume) {\n  return final / molar * volume;\n};\n\nif (!(typeof exports !== \"undefined\" && exports !== null)) {\n  exports = window.calc = {};\n}\n\nexports.gram = gram;\n\nexports.volume = volume;\n");
__$coverInitRange("src/js/calc.js", "0:25");
__$coverInitRange("src/js/calc.js", "28:100");
__$coverInitRange("src/js/calc.js", "103:179");
__$coverInitRange("src/js/calc.js", "182:273");
__$coverInitRange("src/js/calc.js", "276:295");
__$coverInitRange("src/js/calc.js", "298:321");
__$coverInitRange("src/js/calc.js", "69:97");
__$coverInitRange("src/js/calc.js", "147:176");
__$coverInitRange("src/js/calc.js", "245:271");
__$coverCall('src/js/calc.js', '0:25');
var exports, gram, volume;
__$coverCall('src/js/calc.js', '28:100');
gram = function (final, mass, volume) {
    __$coverCall('src/js/calc.js', '69:97');
    return final * volume * mass;
};
__$coverCall('src/js/calc.js', '103:179');
volume = function (final, molar, volume) {
    __$coverCall('src/js/calc.js', '147:176');
    return final / molar * volume;
};
__$coverCall('src/js/calc.js', '182:273');
if (!(typeof exports !== 'undefined' && exports !== null)) {
    __$coverCall('src/js/calc.js', '245:271');
    exports = window.calc = {};
}
__$coverCall('src/js/calc.js', '276:295');
exports.gram = gram;
__$coverCall('src/js/calc.js', '298:321');
exports.volume = volume;