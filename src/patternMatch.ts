function isMatch(str: string, pattern: string) {
  const dp = Array.from({ length: str.length + 1 }, () =>
    Array(pattern.length + 1).fill(false)
  );
  dp[0][0] = true;

  for (let j = 1; j <= pattern.length; j++) {
    if (pattern[j - 1] === "*") {
      dp[0][j] = dp[0][j - 2];
    }
  }

  for (let i = 1; i <= str.length; i++) {
    for (let j = 1; j <= pattern.length; j++) {
      if (pattern[j - 1] === "." || pattern[j - 1] === str[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (pattern[j - 1] === "*") {
        dp[i][j] =
          dp[i][j - 2] ||
          (dp[i - 1][j] &&
            (str[i - 1] === pattern[j - 2] || pattern[j - 2] === "."));
      }
    }
  }

  return dp[str.length][pattern.length];
}

function proposed(str: string, pattern: string) {
  if (str.length < pattern.length) return false;
  let prev = pattern[0];
  let pointer = 0;
  for (const char of pattern) {
    if (char == ".") {
      pointer++;
      prev = ".";
    } else if (char == "*") {
      if ((prev = ".")) return true;
      while (str[pointer] == prev) {
        pointer++;
      }
    } else {
      if (str[pointer] !== char) {
        return false;
      } else {
        pointer++;
        prev = char;
      }
    }
  }
  if (pointer === str.length) return true;
  return false;
}
const str = "aab";
const pattern = "c*a*b";
console.log("gpt: " + isMatch(str, pattern));
console.log("me: " + proposed(str, pattern));
