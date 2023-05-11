function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];
  const map = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);

  const res: string[] = [];
  const dfs = (curStr: string, i: number) => {
    if (i > digits.length - 1) {
      res.push(curStr);
      return;
    }
    const letters = map.get(digits[i])!;
    for (const letter of letters) {
      dfs(curStr + letter, i + 1);
    }
  };
  dfs("", 0);
  return res;
}

// test
const res = letterCombinations("2378");
console.log(res);
