"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var WinsAanalysis_1 = require("./analyzers/WinsAanalysis");
var Summary_1 = require("./Summary");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
// Create an object that satisfies the  "DataReader" interface
var csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
// Create an instance of MatchReader and pass in something satisfying
// the "DataReader" interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new ConsoleReport()
// );
var summary = new Summary_1.Summary(new WinsAanalysis_1.WinsAnalysis("Man United"), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
