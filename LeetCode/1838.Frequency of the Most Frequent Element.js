var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);

  let pointer = 0;
  let max = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    /* 앞에 있는 숫자들을 nums에 i와 동일하게 만들기 위해 필요한 수(nums[i] * window의 길이 - window 내 숫자들의 합)가 k보다 크면
    pointer를 우측으로 이동시켜 window의 길이를 조정함 */
    while (nums[i] * (i - pointer + 1) - sum > k) {
      sum -= nums[pointer];
      pointer++;
    }

    max = Math.max(max, i - pointer + 1);
  }

  return max;
};
