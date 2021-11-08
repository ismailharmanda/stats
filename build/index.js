"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var MathResult_1 = require("./MathResult");
// Create an object that satisfies the  "DataReader" interface
var csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
// Create an instance of MatchReader and pass in something satisfying
// the "DataReader" interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
//matchReader.matches
var HomeWin = MathResult_1.MatchResult.HomeWin, AwayWin = MathResult_1.MatchResult.AwayWin;
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games.");
