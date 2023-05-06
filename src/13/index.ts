function romanToInt(s: string): number {
  const rNums: Record<string, number> = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = 0;
  for (let rN in rNums) {
    while (s.indexOf(rN) === 0) {
      result += rNums[rN];
      s = s.replace(rN, "");
    }
  }
  return result;
}

// test
console.log(romanToInt("MCMLXXVIII"));
