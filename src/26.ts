function removeDuplicates(nums: number[]): number {
  const set = new Set(nums);
  nums.length = 0;
  nums.push(...set);
  return set.size;
}
