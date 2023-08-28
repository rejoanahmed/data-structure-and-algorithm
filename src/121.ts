function maxProfit(prices: number[]): number {
  let max = 0,
    buy = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) buy = prices[i];
    else max = Math.max(prices[i] - buy, max);
  }
  return max;
}
