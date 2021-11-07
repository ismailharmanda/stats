"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    //   data: string[][] = [];
    function CsvFileReader(fileName) {
        this.fileName = fileName;
    }
    Object.defineProperty(CsvFileReader.prototype, "data", {
        get: function () {
            return fs_1.default
                .readFileSync(this.fileName, {
                encoding: "utf-8",
            })
                .split("\n")
                .map(function (item) { return item.split(","); });
        },
        enumerable: false,
        configurable: true
    });
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
