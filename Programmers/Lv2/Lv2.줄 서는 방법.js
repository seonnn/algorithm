function solution(n, k) {
  var answer = [];
  let max = 1;
  let nums = [];

  for (let i = 1; i <= n; i++) {
    nums.push(i);
    max *= i;
  }

  while (n >= 1) {
    max = max / n;
    n--;

    if (n === 0) break;
    answer.push(nums[k % max === 0 ? k / max - 1 : Math.floor(k / max)]);
    nums.splice(k % max === 0 ? k / max - 1 : Math.floor(k / max), 1);
    k = k % max || max;
  }

  return [...answer, nums[0]];
}
