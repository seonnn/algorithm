var twoSum = function (nums, target) {
  let answer = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        answer.push(i);
        answer.push(j);
        break;
      }
    }
  }
  return answer;
};
