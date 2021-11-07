"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default
    .readFileSync("football.csv", {
    encoding: "utf-8",
})
    .split("\n")
    .map(function (item) { return item.split(","); });
// enum - enumeration
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
var HomeWin = MatchResult.HomeWin, AwayWin = MatchResult.AwayWin, Draw = MatchResult.Draw;
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === "Man United" && match[5] === HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games.");
