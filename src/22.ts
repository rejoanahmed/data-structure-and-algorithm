function generateParenthesis(n: number): string[] {
  const res: string[] = [];
  function dfs(a: number, b: number, s: string): void {
    if (s.length === n * 2) {
      res.push(s);
      return;
    }
    if (a < n) dfs(a + 1, b, s + "(");
    if (b < a) dfs(a, b + 1, s + ")");
  }
  dfs(0, 0, "");
  return res;
}

// test
console.log(generateParenthesis(4));
