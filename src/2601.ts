function primeSubOperation(nums: number[]): boolean {
  const p = Array(1001).fill(1);
  p[0] = p[1] = 0;
  // sieve of eratosthenes
  for (let i = 2; i <= Math.sqrt(1000); i++) {
    if (p[i] === 1) {
      for (let j = i * 2; j <= 1000; j += i) {
        p[j] = 0;
      }
    }
  }
  for (let i = 0; i < nums.length - 1; i++) {
    let a = p[nums[i] - 1],
      k = nums[i];
    while (a == 0) {
      k--;
      a = p[k];
      console.log(i, "helll");
    }
    console.log(i, k);
    if (i !== nums.length - 1 && k >= nums[i + 1]) return false;
  }

  return true;
}
console.log(primeSubOperation([4, 9, 6, 10]));
