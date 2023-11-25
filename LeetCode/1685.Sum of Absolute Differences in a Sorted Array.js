var getSumAbsoluteDifferences = function (nums) {
  const res = [];
  let leftSum = 0;
  let rightSum = nums.reduce((acc, num) => acc + num, 0);

  let leftCnt = 0;
  let rightCnt = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];

    // 정렬된 배열이 주어질 때 우측 요소의 합에서 nums[i]에 우측 요소의 수를 곱한 값을 빼고,
    // nums[i]에 좌측 요소의 수를 곱한 값에서 좌측 요소의 합을 빼서 두 값을 더함
    res.push(rightSum - nums[i] * rightCnt + nums[i] * leftCnt - leftSum);

    leftSum += nums[i];
    leftCnt++;
    rightCnt--;
  }

  return res;
};
