var minCostClimbingStairs = function (cost) {
  let dp = Array(cost.length);

  for (let i = 0; i < cost.length; i++) {
    if (i === 0 || i === 1) {
      dp[i] = cost[i];
      continue;
    }

    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }

  return Math.min(dp.at(-1), dp.at(-2));
};
