function countSeniors(details: string[]): number {
  let count = 0;
  for (let i = 0; i < details.length; i++) {
    const age = parseInt(details[i].slice(11, 13));
    console.log(age);
    if (age > 60) count++;
  }
  return count;
}
console.log(
  countSeniors([
    "9751302862F0693",
    "3888560693F7262",
    "5485983835F0649",
    "2580974299F6042",
    "9976672161M6561",
    "0234451011F8013",
    "4294552179O6482",
  ])
);
