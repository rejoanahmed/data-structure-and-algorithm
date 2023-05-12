function kItemsWithMaximumSum(
  numOnes: number,
  numZeros: number,
  numNegOnes: number,
  k: number
): number {
  if (numOnes + numZeros >= k) return Math.min(k, numOnes);
  return 2 * numOnes - k + numZeros;
}
