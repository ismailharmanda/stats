import fs from "fs";
export class CsvFileReader {
  //   data: string[][] = [];

  constructor(public fileName: string) {}

  get data(): string[][] {
    return fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((item: string): string[] => item.split(","));
  }
}
