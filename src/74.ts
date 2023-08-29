function searchMatrix(matrix: number[][], target: number): boolean {
  let l = 0,
    r = matrix.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const first = matrix[mid][0],
      last = matrix[mid][matrix[mid].length];

    if (first === target || last === target) return true;

    if (target > first && target < last)
      return binarySearch(matrix[mid], target);

    if (target < first) r = mid - 1;
    else l = mid + 1;
  }

  return false;
}

function binarySearch(nums: number[], target: number) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (target === nums[mid]) return true;
    if (nums[mid] > target) r = mid - 1;
    else l = mid + 1;
  }

  return false;
}
