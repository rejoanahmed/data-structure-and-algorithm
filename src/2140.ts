function mostPoints(questions: number[][]): number {
  // Initialize a dynamic programming table to store the maximum number of points that can be obtained from each question
  const dp = new Array(questions.length);

  // Iterate over the questions in reverse order, from the last question to the first question
  for (let i = questions.length - 1; i >= 0; i--) {
    const q = questions[i];

    // Compute the maximum number of points that can be obtained by skipping the current question and moving on to the next question
    const n = dp[i + 1] ?? 0;

    // Compute the maximum number of points that can be obtained by answering the current question and then skipping the required number of questions
    const f = dp[i + q[1] + 1] ?? 0;

    // Store the maximum number of points that can be obtained by either skipping the current question or answering it and then skipping the required number of questions
    dp[i] = Math.max(q[0] + f, n);
  }

  // Return the maximum number of points that can be obtained by starting at the first question
  return dp[0];
}

// test
