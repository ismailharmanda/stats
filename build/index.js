"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MathResult_1 = require("./MathResult");
var reader = new MatchReader_1.MatchReader("football.csv");
reader.read();
console.log(reader.data[0]);
var HomeWin = MathResult_1.MatchResult.HomeWin, AwayWin = MathResult_1.MatchResult.AwayWin;
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games.");
