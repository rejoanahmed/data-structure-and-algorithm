function fourSum(nums: number[], target: number): number[][] {
  const length = nums.length;
  if (length < 4) return [];
  nums.sort((a, b) => a - b);
  let res: number[][] = [];
  for (let a = 0; a < length - 3; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) {
      continue;
    }
    for (let b = a + 1; b < length - 2; b++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) {
        continue;
      }
      let c = b + 1,
        d = length - 1;
      while (c < d) {
        const sum = nums[a] + nums[b] + nums[c] + nums[d];
        if (sum === target) {
          const h = [nums[a], nums[b], nums[c], nums[d]];
          res.push(h);

          while (c < d && nums[c] === nums[c + 1]) c++;
          while (c < d && nums[d] === nums[d - 1]) d--;
          c++;
          d--;
        } else if (sum < target) {
          c++;
        } else {
          d--;
        }
      }
    }
  }

  return res;
}

console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0));
