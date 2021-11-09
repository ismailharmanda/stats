import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MathResult";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    const { HomeWin, AwayWin } = MatchResult;

    let wins = 0;

    for (let match of matches) {
      if (match[1] === "Man United" && match[5] === HomeWin) {
        wins++;
      } else if (match[2] === "Man United" && match[5] === AwayWin) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} games.`;
  }
}
