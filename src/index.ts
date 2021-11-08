import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MathResult";

const reader = new MatchReader("football.csv");
reader.read();
console.log(reader.data[0]);
const { HomeWin, AwayWin } = MatchResult;

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games.`);
