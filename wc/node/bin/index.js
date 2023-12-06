#! /usr/bin/env node
const yargs = require("yargs");
const fs = require("node:fs");
// const buffer = require("node:buffer");

const usage = "\nUsage: tran <lang_name> sentence or words to be translated";
const options = yargs
  .usage(usage)
  .option("c", {
    alias: "characters",
    describe:
      "The number of bytes in each input file is written to the standard output.  This will cancel out any prior usage of the -m option.",
    type: "boolean",
    demandOption: false,
  })
  .option("w", {
    alias: "words",
    describe:
      "The number of words in each input file is written to the standard output.",
    type: "boolean",
    demandOption: false,
  })
  .option("l", {
    alias: "lines",
    type: "boolean",
    description:
      "The number of lines in each input file is written to the standard output.",
  })
  .help(true).argv;

const NEW_LINE = 10;
const SPACE = 32;

const file = options._[0];
// Order of the output is [lines, words, size, name]
const output = [file];
const lines = options.l;
const words = options.w;
const characters = options.c;

fs.stat(file, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  characters && output.unshift(stats.size);

  var i;
  let lineCount = 0;
  let wordCount = 0;
  // fs.readFile() is not recommended for large files
  fs.createReadStream(file)
    .on("data", function (chunk) {
      for (i = 0; i < chunk.length; ++i) {
        if (chunk[i] == NEW_LINE) {
          lineCount++;
          wordCount++;
        }

        if (chunk[i] == SPACE) {
          wordCount++;
        }

        // const s = buffer.Buffer.from([chunk[i]]).toString();
        // const whitespaceRegex = /\s/;
        // if (s.match(whitespaceRegex)) {
        //   wordCount++;
        // }
      }
    })
    .on("end", function () {
      words && output.unshift(wordCount);
      lines && output.unshift(lineCount);
      console.log(...output);
    });
});

// d this is the first program!");

// ccwc -c test.txt

// wc -c test.txt
// 335039 test.txt
