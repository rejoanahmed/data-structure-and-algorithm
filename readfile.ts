// const nReadlines = require("n-readlines");
// const broadbandLines = new nReadlines("./input.txt");

// let line: { toString: (arg0: string) => string; };
// let lineNumber = 0;

// const result: { likes: string[][]; dislikes: string[][] } = {
//   likes: [],
//   dislikes: [],
// };
// while ((line = broadbandLines.next())) {
//   if (lineNumber % 2 === 0 && lineNumber !== 0) {
//     result.dislikes.push(line.toString("ascii").split(/\s?\r/)[0].split(" "));
//   } else if (lineNumber % 2 === 1 && lineNumber !== 0) {
//     result.likes.push(line.toString("ascii").split(/\s?\r/)[0].split(" "));
//   }

//   lineNumber++;
// }

// // let firstlike = result.likes[0];
// // console.log(firstlike);
// // let lengtth = firstlike.length;
// console.log(`${result.likes[0]} \n and dislikes ${result.dislikes[0]}`);

// console.log(2 ** 10000);
