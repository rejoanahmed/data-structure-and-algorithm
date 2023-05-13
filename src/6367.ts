function matrixSum(nums: number[][]): number {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i].sort((a, b) => b - a);
  }
  for (let j = 0; j < nums[0].length; j++) {
    let largest = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i][j] > largest) largest = nums[i][j];
    }
    sum += largest;
  }
  return sum;
}

console.log(
  matrixSum([
    [7, 10, 1],
    [6, 4, 2],
    [6, 5, 3],
    [3, 2, 1],
  ])
);
