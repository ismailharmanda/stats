import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("football.csv");

// enum - enumeration
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
const { HomeWin, AwayWin, Draw } = MatchResult;

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games.`);
