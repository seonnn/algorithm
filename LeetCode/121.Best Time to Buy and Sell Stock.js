var maxProfit = function (prices) {
  let profit = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (min > prices[i]) min = prices[i];
    if (profit < prices[i] - min) profit = prices[i] - min;
  }

  return profit;
};
