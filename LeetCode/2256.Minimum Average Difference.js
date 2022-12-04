var minimumAverageDifference = function (nums) {
  let total = nums.reduce((acc, cur) => acc + cur, 0);
  let curSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let cnt = i + 1;
    curSum += nums[i];

    if (cnt === nums.length) averageDiff.push(Math.floor(total / cnt));
    else
      averageDiff.push(
        Math.abs(
          Math.floor(curSum / cnt) -
            Math.floor((total - curSum) / (nums.length - cnt))
        )
      );
  }

  return averageDiff.indexOf(Math.min(...averageDiff));
};
