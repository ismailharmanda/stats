import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MathResult";

// Create an object that satisfies the  "DataReader" interface
const csvFileReader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in something satisfying
// the "DataReader" interface

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

//matchReader.matches

const { HomeWin, AwayWin } = MatchResult;

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games.`);
