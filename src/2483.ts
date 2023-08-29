function bestClosingTime(customers: string): number {
  let currentPenalty = 0;
  for (const customer of customers) {
    if (customer === "N") currentPenalty++;
  }
  let minPenalty = currentPenalty,
    minPenaltyIndex = customers.length;

  for (let i = customers.length - 1; i >= 0; i--) {
    currentPenalty =
      customers[i] === "N" ? currentPenalty - 1 : currentPenalty + 1;

    if (currentPenalty <= minPenalty) {
      minPenalty = currentPenalty;
      minPenaltyIndex = i;
    }
  }

  return minPenaltyIndex;
}
