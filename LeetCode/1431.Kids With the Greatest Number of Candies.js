var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  return candies.map((candyCount) => candyCount + extraCandies >= max);
};
