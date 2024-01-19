var longestOnes = function (nums, k) {
  let one = 0;
  let zero = 0;
  let p = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zero++;
    else one++;

    if (zero > k) {
      while (zero > k) {
        if (nums[p] === 1) one--;
        else zero--;

        p++;
      }
    }

    max = Math.max(max, zero + one);
  }

  return max;
};
