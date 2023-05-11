function threeSumClosest(nums: number[], target: number): number {
  let result = nums[0] + nums[1] + nums[2];
  let diff = Math.abs(result - target);
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      const newDiff = Math.abs(sum - target);
      if (newDiff < diff) {
        result = sum;
        diff = newDiff;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}
