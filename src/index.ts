import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((item: string): string[] => item.split(","));

console.log(matches);
